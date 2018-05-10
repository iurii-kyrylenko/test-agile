import React, { Component } from 'react';
import './FileZone.css';
import TextFormater from '../text-formater';
import getMockText from '../text.service';

class FileZone extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
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

  render() {
    return (
      <div id="file-zone">
        {this.state.error}
        <div id="file">
          <TextFormater text={this.state.text} />
        </div>
      </div>
    );
  }
}

export default FileZone;
