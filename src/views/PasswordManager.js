import React from "react";
import FormContent from "../components/organisms/FormContentContainer";
import StepsContainer from "../components/organisms/StepsContainer";
import InformationContent from "../components/organisms/InformationContent";
import FeedbackContent from "../components/organisms/FeebackContentContainer";
import Footer from "../components/molecules/Footer";
import { submitForm } from "../services/api";

class PasswordManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0,
        }
        this.buttonNext = {
            text: "Siguiente",
            enableButton: true,
            showButton: true,
            onClick: () => this.nextStep()
        }
        this.buttonPrev = {
            text: "Cancelar",
            enableButton: true,
            showButton: this.showButton(),
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
                    text: "Final",
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
        }
        else{
            this.props.updateStatus('KO')
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

    showButton() {
        let show = true;
        if (this.currentStep === 2) {
            show = false;
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
                <StepsContainer steps={this.steps} currentStep={this.state.currentStep}/>
                <Footer onClick={this.nextStep}
                        configButtonLeft={{
                            ...this.buttonPrev,
                            ...this.steps[this.state.currentStep].buttonPrev
                        }}
                        configButtonRight={{
                            ...this.buttonNext,
                            ...this.steps[this.state.currentStep].buttonNext,
                            enableButton: this.props.enableButton
                        }}
                />
            </div>
        )
    }
}

export default PasswordManager;