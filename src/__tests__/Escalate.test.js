import React from 'react';
import ReactDOM from 'react-dom';
import Escalate from '../components/Escalate';
import { shallow, configure, assert } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Escalate', () => {
    const minProps = {
        repname: '',
      };
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Escalate />);
  });

  it('should render a <div /> with classname as subitem', () => {
    expect(wrapper.find('.subitem').length).toEqual(1);
  });
  test('should have isHoverToggle state to be true by default', () => {
    expect(wrapper.state().isHoverToggle).toEqual(true);
  })
  test('should have bgColor state to be transparent by default', () => {
    expect(wrapper.state().bgColor).toEqual('transparent');
  })
  it('renders a div with keyid as a111 text in it', () => {
    const wrapper = shallow(
      <div {...minProps} repname="Charlie"  />
    );

    expect(wrapper.find('div').prop('repname')).toEqual('Charlie');
  });
  test('should have div with classname as escalate after click on checv-right classname', () => {
    expect(wrapper.find('.chev-right').length).toEqual(1);
    wrapper.find('.chev-right').simulate('click');
    expect(wrapper.state().isHoverToggle).toEqual(false);
    expect(wrapper.find('.escalate').length).toEqual(1);
    expect(wrapper.find('.escalate-item').length).toEqual(4);
  })
  test('should have change bgcolor to lightblue after click on checv-right classname', () => {
    expect(wrapper.find('.chev-right').length).toEqual(1);
    wrapper.find('.chev-right').simulate('click');
    expect(wrapper.state().bgColor).toEqual('lightblue');
  })
  
  test('On Click event handler should have been called', () => {
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance, 'hoverToggle')

    instance.forceUpdate();    

    wrapper.find('.chev-right').simulate('click');
    expect(spy).toHaveBeenCalled()
  })
});
