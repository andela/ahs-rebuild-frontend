import React from 'react';
import { shallow } from 'enzyme'
import Landing from '../../Landing';


describe('Test Landing', () => {
    it('Renders as expected', () => {
        const wrapper = shallow(<Landing />);
        expect(wrapper).toMatchSnapshot()
    })
})
