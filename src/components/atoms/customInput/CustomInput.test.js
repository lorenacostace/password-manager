import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import CustomInput from "./CustomInput";

describe('CustomInput', () => {
    let component;
    const mockHandler = jest.fn()
    const placeholder = 'Password'

    it('Verification of the text entered and the call to the function that updates it', () => {
        component = render(<CustomInput handler={ (value) => mockHandler(value) } placeholder={placeholder}/>)

        expect(component).toBeDefined();
        expect(component).not.toBeNull();

        const input = component.getByPlaceholderText('Password')

        fireEvent.change(input, { target: { value: 'Password'}})
        expect(input.value).toBe('Password')

        expect(mockHandler).toHaveBeenCalledTimes(1)
    })
})