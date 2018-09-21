import React, { Component } from 'react';
import SubMenu from './SubMenu';
import data from '../utils/Data';
export default class MainMenu extends Component {
    /*constructor(props){
      super(props)
      /*this.state={
        data: [{id: 'a111', name: 'Cars in Service'}, {id: 'a112', name: 'Cars Standing By'}, {id: 'a113', name: 'Cars Out of Service'}],
      }
}*/
    render() {
      return (
        <div id="searchbar">
          {data && data.map(function(item){
            return <SubMenu keyid={item.id} name={item.state} key={item.id} details={item.carDetails}/>;
          })}
        </div>
      )
    }
  }