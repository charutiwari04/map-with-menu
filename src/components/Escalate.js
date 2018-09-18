import React, { Component } from 'react';
export default class Escalate extends Component {
    constructor(props){
      super(props)
      this.state={
        isHoverToggle: true,
        bgColor: 'transparent'
      }
      this.hoverToggle = this.hoverToggle.bind(this);
    }
    hoverToggle(){
      this.setState(function(){
        var color = '';
        {!this.state.isHoverToggle? color='transparent' : color='lightblue'}
        return {
          isHoverToggle: !this.state.isHoverToggle,
          bgColor: color
        }
      })
    }
    render (){
      return (
        <div className="red subitem" style={{backgroundColor: this.state.bgColor}}>
          {this.props.repname}
          <span onClick={this.hoverToggle} className="chev-right fa fa-angle-right">
          </span>
          {!this.state.isHoverToggle  &&
            <div className="escalate">
              <div className="escalate-item">Call</div>
              <div className="escalate-item">Report</div>
              <div className="escalate-item">Escalate</div>
              <div className="escalate-item">Dismiss</div>
              <span className="fa fa-ellipsis-h"></span>
              </div>
          }
          </div>
      )
    }
  }
  