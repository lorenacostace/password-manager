import React from "react";
import FormContent from "../components/organisms/FormContentContainer";
import StepsContainer from "../components/organisms/StepsContainer";
import InformationContent from "../components/organisms/InformationContent";
import FeedbackContent from "../components/organisms/FeebackContentContainer";
import Footer from "../components/molecules/footer/Footer";
import { submitForm } from "../services/api";
import Header from "../components/molecules/Header";

class PasswordManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0,
            nextButtonText: 'Siguiente'
        }
        this.buttonNext = {
            text: "Siguiente",
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
                component: <InformationContent handler={ this.nextStep }/>,
                buttonNext: {
                    text: "Siguiente",
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
                initialAction: () => {
                    this.props.setEnableButton(false);
                },
                finalAction: () => this.formContentAction(),
                buttonNext: {
                    text: "Siguiente",
                },
                buttonPrev: {
                    text: "Cancelar",
                }
            },
            {
                component: <FeedbackContent handler={ this.nextStep } />,
                buttonNext: {
                    text: this.state.nextButtonText,
                },
                buttonPrev: {
                    text: "Cancelar",
                    className: ""
                },
                initialAction: () => {
                    this.props.setEnableButton(true)
                },
            }
        ]
    }

    async formContentAction() {
        const { status } = await submitForm(this.props.passwordOne, this.props.passwordTwo, this.props.hintPassword);
        if( status === 200 ){
            this.props.updateStatus('OK')
            this.setState({
                nextButtonText: 'Acceder'
            })
        }
        else{
            this.props.updateStatus('KO')
            this.setState({
                nextButtonText: 'Volver a Password Manager'
            })
        }
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

    hiddenButton() {
        let show = false;
        if (this.state.currentStep === 2) {
            show = true;
        }
        return show;
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
        //Reseteamos los inputs

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
            <div>
                <Header steps={this.steps} currentStep={this.state.currentStep}/>
                <StepsContainer steps={this.steps} currentStep={this.state.currentStep}/>
                <Footer onClick={this.nextStep}
                        configButtonLeft={{
                            ...this.buttonPrev,
                            ...this.steps[this.state.currentStep].buttonPrev,
                            hiddenButton: this.hiddenButton()
                        }}
                        configButtonRight={{
                            ...this.buttonNext,
                            ...this.steps[this.state.currentStep].buttonNext,
                            hiddenButton: false,
                            enableButton: this.props.enableButton
                        }}
                />
            </div>
        )
    }
}

export default PasswordManager;