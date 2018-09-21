import React from 'react';
import ReactDOM from 'react-dom';
import SubMenu from '../components/SubMenu';
import MainMenu from '../components/MainMenu';
import { shallow, configure, assert } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import data from '../utils/Data';
configure({ adapter: new Adapter() });

describe('MainMenu', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainMenu />);
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('should render a <div /> with id searchbar', () => {
    expect(wrapper.exists('#searchbar')).toBe(true);
  });
  test('should render one SubMenu', () => {
    expect(wrapper.find(SubMenu).exists()).toBe(true);
  })
  it('renders child correctly', () => {
    expect(wrapper.find('div').children().length).toEqual(3);
    expect(wrapper.find('div').children().find(SubMenu).length).toEqual(3);
  });
});
