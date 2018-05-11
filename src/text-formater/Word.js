import React from 'react';

const Word = ({ idx, word, format: {b, i, u}, isSelected, onSelect }) => {
  const style = {
    fontWeight: b ? 'bold' : 'normal',
    fontStyle: i ? 'italic' : 'normal',
    textDecoration: u ? 'underline' : '',
    backgroundColor: isSelected ? '#ccc' : ''
  }
  return (
    <span style={style} onClick={() => onSelect(idx, word)}>
      {word}
    </span>
  );
};

export default Word;
