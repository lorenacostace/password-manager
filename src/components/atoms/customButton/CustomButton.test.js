import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import CustomButton from './CustomButton'

describe('<CustomButton />', () => {
    let component;
    const onClick = jest.fn()

    it('No action is taken when the button is disabled', () => {
        const props = {
            enableButton: false,
            text: 'Siguiente >'
        }

        component = render(<CustomButton {...props} />)

        const button = component.getByText('Siguiente >');
        expect(component.getByRole('button')).toBeDisabled();

        fireEvent.click(button);

        expect(onClick).toHaveBeenCalledTimes(0)
    })

    it('Actions are performed when the button is enabled', () => {
        const props = {
            enableButton: true,
            text: 'Siguiente >'
        }

        component = render(<CustomButton {...props} onClick={onClick}/>)

        const button = component.getByText('Siguiente >')
        expect(component.getByRole('button')).not.toBeDisabled()
        fireEvent.click(button)

        expect(onClick).toHaveBeenCalledTimes(1)
    })
})

