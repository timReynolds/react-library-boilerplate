jest.dontMock('../index');

import React from 'react';
import { shallow } from 'enzyme';

describe('Counter', () => {
  let sut;
  let Counter;

  beforeEach(() => {
    Counter = require('../index').default;
    sut = shallow(<Counter />);
  });

  it('when rendered, should include three P components', () => {
    // Arrange
    // Act
    // Assert
    expect(sut.find('p').length).toEqual(1);
    expect(sut.find('button').length).toEqual(2);
  });

  it('when rendered, should have an inital state of 0', () => {
    // Arrange
    // Act
    // Assert
    expect(sut.find('p').first().text()).toEqual('0');
  });

  it('when rendered, should have an element for increment', () => {
    // Arrange
    // Act
    // Assert
    expect(sut.contains('+1')).toEqual(true);
  });

  it('when rendered, should have an element for decrement', () => {
    // Arrange
    // Act
    // Assert
    expect(sut.contains('-1')).toEqual(true);
  });

  it('when +1 clicked, should increment counter', () => {
    // Arrange
    // Act
    sut.find('button').at(0).simulate('click');
    // Assert
    expect(sut.find('p').first().text()).toEqual('1');
  });

  it('when -1 clicked, should decrement counter', () => {
    // Arrange
    // Act
    sut.find('button').at(1).simulate('click');
    // Assert
    expect(sut.find('p').first().text()).toEqual('-1');
  });
});
