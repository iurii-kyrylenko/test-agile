import React, { Component } from 'react';
import './FileZone.css';
import TextFormater from '../text-formater';
import getMockText from '../text.service';
import getSynonyms from '../synonyms.service';

class FileZone extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      synonyms: [],
      error: ''
    };
  }

  async componentDidMount() {
    try {
      const text = await getMockText();
      this.setState({ text });
    } catch (e) {
      this.setState({ error: e.message });
    }
  }

  handleSelect = async (word) => {
    try {
      const synonyms = [word, ...await getSynonyms(word)];
      this.setState({ synonyms });
    } catch (e) {
      this.setState({ error: e.message });
    }
  }

  render() {
    return (
      <div id="file-zone">
        {this.state.error}
        <div id="file">
          <TextFormater
            text={this.state.text}
            synonyms={this.state.synonyms}
            onSelect={this.handleSelect}
          />
        </div>
      </div>
    );
  }
}

export default FileZone;
