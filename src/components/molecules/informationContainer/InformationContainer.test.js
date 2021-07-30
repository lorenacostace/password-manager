import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import InformationContainer from "./InformationContainer";

describe('InformationContainer', () => {
    let component, text;

    it('Check that if you receive text, it is displayed.', () => {
        text = 'Lorem ipsum'

        component = render(<InformationContainer text={ text } />)

        expect(component).toBeDefined();
        expect(component).not.toBeNull();

        component.getByText('Lorem ipsum');
    })
})