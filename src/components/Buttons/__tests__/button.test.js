import React from 'react';
import { mount } from 'enzyme'
import Button from '..';

describe('Test Button component', () => {
    it('Renders as expected', () => {
        const wrapper = mount(<Button />);
        expect(wrapper).toMatchSnapshot()
    })
})
