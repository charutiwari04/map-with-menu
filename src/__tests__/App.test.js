import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import SearchBar from '../components/SearchBar';
import { shallow, configure, assert } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
jest.mock('mapbox-gl/dist/mapbox-gl', () => ({
  Map: () => {}
}));
configure({ adapter: new Adapter() });

 describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('should have div with className as main', () => {
    expect(wrapper.find('div').hasClass('main')).toEqual(true);
  })
  test('should render one SearchBar', () => {
    expect(wrapper.find(SearchBar).exists()).toBe(true);
  })
});
