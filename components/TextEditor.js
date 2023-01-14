import React, { useState } from 'react';

const TextEditor = () => {
  const [text, setText] = useState('Initial Text');
  return (
    <div>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
}
export default TextEditor;
