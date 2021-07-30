import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import MultiStepPosition from './MultiStepPosition'
import checkOk from '../../../images/checkOK.png'

describe('MultiStepPosition', () => {

    let component, text
    const image = { checkOk }

    it('Checking that text is displayed if it is received', () => {
        text = 'Lorem ipsum'

        component = render(<MultiStepPosition text={ text } image={ image }/>)

        expect(component).toBeDefined();
        expect(component).not.toBeNull();

        component.getByText('Lorem ipsum');
    })

    it('Verification that even if no text is received, the component is defined', () => {

        component = render(<MultiStepPosition image={ image }/>)

        expect(component).toBeDefined();
        expect(component).not.toBeNull();
    })
})