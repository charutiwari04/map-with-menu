import React, { Component } from 'react';
import Escalate from './Escalate';
export default class MainList extends Component {
    constructor(props){
      super(props)
      this.state={
        isToggle: true,
        reds: [{name: 'Charlie'}, {name: 'Echo'}]
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
      return (
        <div className="mainList" id={this.props.keyid}>
          <div className="first-listing"></div>
          <span className="activity">{this.props.name}</span>
          {this.state.reds &&
            <span className="redcount">{this.state.reds.length}</span>
          }
          {this.state.isToggle ?
            <span onClick={this.toggle} className="caret fa fa-caret-right"></span>
            :
            <span onClick={this.toggle} className="caret fa fa-caret-down"></span>
          }
          {!this.state.isToggle &&
            <div className="subList">
                <div className="subitem">Alpha<span className="chev-right fa fa-angle-right"></span></div>
                <Escalate repname="Charlie"/>
                <div className="subitem">Bravo<span className="chev-right fa fa-angle-right"></span></div>
                <div className="subitem">Delta<span className="chev-right fa fa-angle-right"></span></div>
                <Escalate repname="Echo"/>
            </div>
          }
        </div>
      )
    }
  }
  