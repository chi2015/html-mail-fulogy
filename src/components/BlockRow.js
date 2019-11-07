import React from 'react';

export default class BlockRow extends React.Component {
    getSepStr(sep) {
        switch (sep) {
            case "colon": return ": ";
            case "dash": return " - ";
                default: return ": "
        }
    }

    render() {
      return (
        <div>{this.props.title}{this.getSepStr(this.props.sep)}{this.props.val}</div>
      );
    }
  }