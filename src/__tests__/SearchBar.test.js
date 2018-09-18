import React from 'react';
import ReactDOM from 'react-dom';
import MainList from '../components/MainList';
import SearchBar from '../components/SearchBar';
import { shallow, configure, assert } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('SearchBar', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('should render a <div /> with id searchbar', () => {
    expect(wrapper.exists('#searchbar')).toBe(true);
  });
  test('should render one MainList', () => {
    expect(wrapper.find(MainList).exists()).toBe(true);
  })
  test('should have data state equal to values provided', () => {
    expect(wrapper.state().data).toEqual([{id: 'a111', name: 'Cars in Service'}, {id: 'a112', name: 'Cars Standing By'}, {id: 'a113', name: 'Cars Out of Service'}])
  })
  it('renders child correctly', () => {
    expect(wrapper.find('div').children().length).toEqual(3);
    expect(wrapper.find('div').children().find(MainList).length).toEqual(3);
  });
});
