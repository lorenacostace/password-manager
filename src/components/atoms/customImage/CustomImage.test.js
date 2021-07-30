import React from "react";
import '@testing-library/jest-dom/extend-expect'
import checkOK from '../../../images/checkOK.png'
import { render } from '@testing-library/react'
import CustomImage from "./CustomImage";

describe('CustomImage', () => {
    let component;

    it('Checking the rendering result after receiving an image', () => {
        const image = { checkOK }

        component = render(<CustomImage image={ image }/>)

        expect(component).toBeDefined();
        expect(component).not.toBeNull();
    })
})