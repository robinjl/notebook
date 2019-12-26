import React, { Component } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

class Table extends Component {
  render() {
    const {data, removeCharacter} = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody data={data} removeCharacter={removeCharacter}/>
      </table>
    );
  }
}

export default Table;
