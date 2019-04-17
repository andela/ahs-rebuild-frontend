import React from 'react';
import { mount } from 'enzyme';
import Navbar from '..';

const props = {
    userName: 'James King',
}

describe('Test Navbar', () => {
    it('Should render coreectly', () => {
        const wrapper = mount(<Navbar {...props}/>)
        expect(wrapper).toMatchSnapshot();
    })
})