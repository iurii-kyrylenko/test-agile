import React, { Component } from 'react';
import './ControlPanel.css';

class ControlPanel extends Component {
  render() {
    const { onFormat } = this.props;

    return (
      <div id="control-panel">
        <div id="format-actions">
          <button onClick={() => onFormat('b')} className="format-action" type="button"><b>B</b></button>
          <button onClick={() => onFormat('i')} className="format-action" type="button"><i>I</i></button>
          <button onClick={() => onFormat('u')} className="format-action" type="button"><u>U</u></button>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
