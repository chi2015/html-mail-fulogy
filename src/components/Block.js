import React from 'react';
import BlockRow from './BlockRow';

export default class Block extends React.Component {
    
    render() {
      const fieldsHtml = this.props.fields.map((field, i) => <BlockRow key={i} title={field.title} val={field.value} sep={field.sep || "colon"}/>)
      return (
        <div style={{marginTop: '20px'}}>
            <p style={ { fontWeight: 'bold', margin: 0 } }>{this.props.title}:</p>
            { fieldsHtml }
        </div>
      );
    }
  }