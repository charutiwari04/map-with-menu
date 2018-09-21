import React from 'react';
import ReactDOM from 'react-dom';
import SubMenu from '../components/SubMenu';
import RequestMenu from '../components/RequestMenu';
import { shallow, configure, assert } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('SubMenu', () => {
    const minProps = {
        name: '',
        keyid: '',
        selected: 'yes',
        details : {}
      };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SubMenu />);
  });

  it('should render a <div />', () => {
    expect(wrapper.find('.mainList').length).toEqual(1);
  });
  test('should render 3 div', () => {
    expect(wrapper.find('div').length).toEqual(3);
  })
  test('should have isToggle state to be true by default', () => {
    expect(wrapper.state().isToggle).toEqual(true);
  })
  test('should have RequestMenu component after click on caret', () => {
    expect(wrapper.find('.caret').length).toEqual(1);
    wrapper.find('.caret').simulate('click');
    expect(wrapper.state().isToggle).toEqual(false);
    //expect(wrapper.find(RequestMenu).length).toEqual(2);
    //expect(wrapper.find('.chev-right').length).toEqual(3);
  })
  it('renders a div with name as Cars in Service text in it', () => {
    const wrapper = shallow(
      <div className="activity" {...minProps} name="Cars in Service"  />
    );

    expect(wrapper.find('.activity').prop('name')).toBe('Cars in Service');
  });
  it('renders a div with keyid as a111 text in it', () => {
    const wrapper = shallow(
      <div className="mainList" {...minProps} keyid="a111"  />
    );

    expect(wrapper.find('.mainList').prop('keyid')).toEqual('a111');
  });
  /*it('carDetails should be having car name as key', () => {
    const wrapper = shallow(
      <div className='sublist' {...minProps} details="{Alpha: {selected: 'yes'}, Delta: {selected: 'no'}}" />
    );
    const keys = wrapper.find('.sublist').prop(details);
    //console.log(keys);
    //const cars = Object.keys(keys).map(node => node.text());
    expect(wrapper.find('.subist').prop('details')).toEqual("{Alpha: {selected: 'yes'}, Delta: {selected: 'no'}}");
    //expect(cars[0]).toEqual('Alpha');
  });*/
  test('On Click event handler should have been called', () => {
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance, 'toggle')

    instance.forceUpdate();    

    wrapper.find('.caret').simulate('click');
    expect(spy).toHaveBeenCalled()
  })
});
