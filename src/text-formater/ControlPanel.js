import React, { Component } from 'react';
import styles from './ControlPanel.styles';

class ControlPanel extends Component {
  render() {
    const { synonyms, onFormat, onSynonym } = this.props;

    const button = (option, children) => (
      <button onClick={() => onFormat(option)} className="format-action" type="button">{children}</button>
    );

    return (
      <div style={styles.root}>
        <div style={styles.actions}>
          {button('b', <b>B</b>)}
          {button('i', <i>I</i>)}
          {button('u', <u>U</u>)}
          <span style={styles.label}>Synonyms:</span>
          <select onChange={e => onSynonym(e.target.value)}>
            {synonyms.map(syn => (
              <option key={syn}>{syn}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
