import { useState } from 'react';
import './Input.style.css';

interface InputProps {
  label: string;
  text?: string;
}
const Input = ({ label }: InputProps) => {
  const [input, setInput] = useState('');
  console.log(input);

  return (
    <div className='input-container'>
      <label className='desc' htmlFor="des">{label}</label>
      <input
      className='input-text'
        type="text"
        id="des"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </div>
  );
};

export default Input;
