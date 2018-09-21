import React, { Component } from 'react';
import RequestMenu from './RequestMenu';
export default class SubMenu extends Component {
    constructor(props){
      super(props)
      this.state={
        isToggle: true,
        //reds: [{name: 'Charlie'}, {name: 'Echo'}]
      }
      this.toggle = this.toggle.bind(this);
    }
    toggle(){
      this.setState(function(){
        return {
          isToggle: !this.state.isToggle
        }
      })
    }
    render () {
      var carDetails = this.props.details;
      var selectedArr = [];
      if(carDetails){
        Object.keys(carDetails).map((key) => {
          selectedArr.push({key: key, selected: carDetails[key].selected})
        })
      }
      return (
        <div className="mainList" id={this.props.keyid}>
          <div className="first-listing"></div>
          <span className="activity">{this.props.name}</span>
          {this.state.isToggle ?
            <span onClick={this.toggle} className="caret fa fa-caret-right"></span>
            :
            <span onClick={this.toggle} className="caret fa fa-caret-down"></span>
          }
          <div className="subList">
          {!this.state.isToggle && this.props.details && 
            selectedArr.map((item) => {
              let elem=''
              {item.selected === 'no'  ?
                 elem = <div className="subitem">{item.key}<span className="chev-right fa fa-angle-right"></span></div>
                :
                elem = <RequestMenu repname={item.key} requestFlag={item.selected} />
              }
              return elem;
            })
            
          }
          </div>
        </div>
      )
    }
  }
  