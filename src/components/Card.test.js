import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it('expect to render Card component', () => {
	const mockCategory = {key: '1', name: 'Jam', img: 'jam'};
	expect(shallow(<Card category={mockCategory} />)).toMatchSnapshot();
})