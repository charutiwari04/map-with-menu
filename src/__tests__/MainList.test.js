import React from 'react';
import ReactDOM from 'react-dom';
import MainList from '../components/MainList';
import Escalate from '../components/Escalate';
import { shallow, configure, assert } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('MainList', () => {
    const minProps = {
        name: '',
        keyid: '',
      };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<MainList />);
  });

  it('should render a <div />', () => {
    expect(wrapper.find('.mainList').length).toEqual(1);
  });
  test('should render 2 div', () => {
    expect(wrapper.find('div').length).toEqual(2);
  })
  test('should have isToggle state to be true by default', () => {
    expect(wrapper.state().isToggle).toEqual(true);
  })
  test('should have Escalate component after click on caret', () => {
    expect(wrapper.find('.caret').length).toEqual(1);
    wrapper.find('.caret').simulate('click');
    expect(wrapper.state().isToggle).toEqual(false);
    expect(wrapper.find(Escalate).length).toEqual(2);
    expect(wrapper.find('.chev-right').length).toEqual(3);
  })
  test('should have div with class chev-right after click on caret', () => {
    expect(wrapper.find('.caret').length).toEqual(1);
    wrapper.find('.caret').simulate('click');
    expect(wrapper.state().isToggle).toEqual(false);
    expect(wrapper.find('.chev-right').length).toEqual(3);
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
  test('On Click event handler should have been called', () => {
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance, 'toggle')

    instance.forceUpdate();    

    wrapper.find('.caret').simulate('click');
    expect(spy).toHaveBeenCalled()
  })
});
