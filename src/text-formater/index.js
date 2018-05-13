import React, {Component, Fragment} from 'react';
import { strip, unstrip } from './utils';
import Word from './Word';
import ControlPanel from './ControlPanel';

/**
 * Props & State shape
 *

 type TextFormaterPropsType = {
  text: ?string,
  synonyms: Array<string>,
  onSelect: (word: string) => any,
};

type TextFormaterStateType = {
  words: Array<WordType>,
  selectedIndex: ?number
};

type WordType = {
  idx: number,
  word: string,
  format: {
    b: boolean,
    i: boolean,
    u: boolean
  }
}

class TextFormater extends Component<TextFormaterPropsType, TextFormaterStateType> {
  ...
}
**/

class TextFormater extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      selectedIndex: null
    }
  }

  static getDerivedStateFromProps({ text }, { selectedIndex }) {
    if (selectedIndex) return null;

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

  handleSynonym = synonym => {
    const idx = this.state.selectedIndex;
    const word = this.state.words[idx];
    const word2 = { ...word, word: unstrip(word.word, synonym) };
    this.setState({ words: this.state.words.map(word => word.idx === idx ? word2 : word) });
  }

  handleSelect = (idx, word) => {
    this.setState({ selectedIndex: idx });
    this.props.onSelect && (idx !== this.state.selectedIndex) && this.props.onSelect(strip(word));
  };

  render() {
    const words = this.state.words;
    return (
      <div>
        <ControlPanel
          synonyms={this.props.synonyms}
          onFormat={this.toggleFormat}
          onSynonym={this.handleSynonym}
        />
        {words.map(word => (
          <Fragment key={word.idx}>
            <Word
              {...word}
              isSelected={this.state.selectedIndex === word.idx}
              onSelect={this.handleSelect}
            />
            {' '}
          </Fragment>
        ))}
      </div>
    );
  }
}

export default TextFormater;