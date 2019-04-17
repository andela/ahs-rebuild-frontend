import React from 'react';
import { mount } from 'enzyme'
import Landing from '../../Landing';


describe('Test Landing', () => {
    it('Renders as expected', () => {
        const wrapper = mount(<Landing />);
        expect(wrapper).toMatchSnapshot()
    })
})