import React from "react";
import FormContent from "../components/organisms/formContentStyle/FormContentContainer";
import StepsContainer from "../components/organisms/stepsContainer/StepsContainer";
import InformationContent from "../components/organisms/informationContent/InformationContent";
import FeedbackContent from "../components/organisms/FeedbackContent/FeebackContentContainer";
import Footer from "../components/molecules/footer/Footer";
import {submitForm} from "../services/api";
import Header from "../components/molecules/header/Header";
import {Container, SpinnerContainer, SpinnerCover} from "./PasswordManagerStyle";

class PasswordManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0,
            nextButtonText: 'Siguiente  >'
        }
        this.buttonNext = {
            text: "Siguiente  >",
            enableButton: true,
            onClick: () => this.nextStep()
        }
        this.buttonPrev = {
            text: "Cancelar",
            enableButton: true,
            onClick: () => this.cancelStep()
        }
        this.steps = [
            {
                component: <InformationContent handler={this.nextStep}/>,
                buttonNext: {
                    text: "Siguiente  >",
                },
                buttonPrev: {
                    text: "Cancelar",
                },
                initialAction: () => {
                    this.props.setEnableButton(true);
                },
            },
            {
                component: <FormContent/>,
                buttonNext: {
                    text: "Siguiente  >",
                },
                buttonPrev: {
                    text: "Cancelar",
                },
                initialAction: () => {
                    this.props.setEnableButton(false);
                },
                finalAction: () => this.formContentAction(),
            },
            {
                component: <FeedbackContent handler={this.nextStep}/>,
                buttonNext: {
                    hiddenButton: true
                },
                buttonPrev: {
                    text: "Cancelar",
                    hiddenButton: true
                },
                initialAction: () => {
                    this.props.setEnableButton(true)
                },
                finalAction: () => this.reset(),
            }
        ]
    }

    async formContentAction() {
        this.props.updateStatus('PENDING')
        const {status} = await submitForm(this.props.passwordOne, this.props.passwordTwo, this.props.hintPassword);
        this.props.updateFeedback(true);
        if (status === 200) {
            this.props.updateStatus('OK');
            this.props.updateTextButton('Acceder  >')
        } else {
            this.props.updateStatus('KO');
            this.props.updateTextButton('Volver a Password Manager >')
        }
    }

    reset() {
        this.props.passwordManagerReset();
    }

    formContentValidator() {
        const isEmpty = {
            validator: (value) => {
                return !value;
            },
            errorMessage: 'ErrorIsEmpty'
        };

        const isEqual = {
            validator: () => {
                return !(this.props.passwordOne && this.props.passwordTwo && (this.props.passwordOne === this.props.passwordTwo));
            },
            errorMessage: 'ErrorNotIsEqual'
        };

        let upperReg = /[A-Z]+/g;
        const existUppercase = {
            validator: (value) => {
                return !upperReg.test(value)
            },
            errorMessage: 'ErrorNotUppercase'
        }

        let numberReg = /[0-9]+/g;
        const existNumber = {
            validator: (value) => {
                return !numberReg.test(value)
            },
            errorMessage: 'ErrorNotNumber'
        }

        const isOk = [isEmpty, existUppercase, existNumber, isEqual]
            .map(condition => condition.validator(this.props.passwordOne) ? condition.errorMessage : '')
            .filter(Boolean);
        this.props.setEnableButton(!isOk.length)
    }

    nextStep() {
        const {currentStep} = this.state;
        const nextStep = (currentStep + 1) % this.steps.length;
        if (currentStep !== this.steps.length) {
            this.setState({
                currentStep: nextStep
            })
        }
        this.dispatchStepActions(currentStep, nextStep)
    }

    dispatchStepActions(currentStep, nextStep) {
        if (this.steps[currentStep].finalAction) {
            this.steps[currentStep].finalAction()
        }
        if (this.steps[nextStep].initialAction) {
            this.steps[nextStep].initialAction()
        }
    }

    cancelStep() {
        //Reseteamos los inputs en el finalAction del step feedback

        this.setState({
            currentStep: 0,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const handlerStepUpdate = {
            1: () => {
                this.formContentValidator();
            }
        };
        if (handlerStepUpdate[this.state.currentStep]) {
            handlerStepUpdate[this.state.currentStep]();
        }
    }

    render() {
        return (
            <Container>
                <Header steps={this.steps} currentStep={this.state.currentStep}/>
                <StepsContainer steps={this.steps} currentStep={this.state.currentStep}/>
                <Footer onClick={this.nextStep}
                        configButtonLeft={{
                            ...this.buttonPrev,
                            ...this.steps[this.state.currentStep].buttonPrev,
                            feedback: this.props.feedback,
                            status: this.props.status,
                        }}
                        configButtonRight={{
                            ...this.buttonNext,
                            ...this.steps[this.state.currentStep].buttonNext,
                            feedback: this.props.feedback,
                            enableButton: this.props.enableButton,
                            text: this.props.text
                        }}
                />
                {
                    this.props.status === 'PENDING' && (
                        <SpinnerCover>
                            <SpinnerContainer className="sk-chase">
                                <div className="sk-chase-dot"/>
                                <div className="sk-chase-dot"/>
                                <div className="sk-chase-dot"/>
                                <div className="sk-chase-dot"/>
                                <div className="sk-chase-dot"/>
                                <div className="sk-chase-dot"/>
                            </SpinnerContainer>
                        </SpinnerCover>
                    )
                }
            </Container>
        )
    }
}

export default PasswordManager;