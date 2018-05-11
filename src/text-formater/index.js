import React, {Component, Fragment} from 'react';
import Word from './Word';
import ControlPanel from './ControlPanel';

class TextFormater extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      selectedIndex: null
    }
  }

  static getDerivedStateFromProps({ text }) {
    const format = { b: false, i: false, u: false };
    const words = text.split(/\s+/).map((word, idx) => ({ idx, word, format: { ...format } }));
    return { words };
  }

  toggleFormat = type => {
    const idx = this.state.selectedIndex;
    if (!idx) return;
    const word = this.state.words[idx];
    const option = word.format[type];
    const format ={ ...word.format, [type]: !option };
    const word2 = { ...word, format };
    this.setState({ words: this.state.words.map(word => word.idx === idx ? word2 : word) });
  };

  render() {
    const words = this.state.words;
    return (
      <div>
        <ControlPanel onFormat={this.toggleFormat} />
        {words.map(word => (
          <Fragment key={word.idx}>
            <Word
              {...word}
              isSelected={this.state.selectedIndex === word.idx}
              onSelect={idx => this.setState({ selectedIndex: idx })}
            />
            {' '}
          </Fragment>
        ))}
      </div>
    );
  }
}

export default TextFormater;