import React, { Component } from 'react';
import MainList from './MainList';
export default class SearchBar extends Component {
    constructor(props){
      super(props)
      this.state={
        data: [{id: 'a111', name: 'Cars in Service'}, {id: 'a112', name: 'Cars Standing By'}, {id: 'a113', name: 'Cars Out of Service'}],
      }
    }
    render() {
      return (
        <div id="searchbar">
          {this.state.data && this.state.data.map(function(item){
            return <MainList keyid={item.id} name={item.name} key={item.id}/>;
          })}
        </div>
      )
    }
  }