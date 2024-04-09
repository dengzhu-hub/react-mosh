

interface InputProps {
  label: string;
  text: string;
}
const Input = ({ label, text }: InputProps) => {
//   const [input, setInput] = useState('');
  return (
    <div>
      <label htmlFor="des">{label}</label>
      <input
        type="text"
        id="des"
        value={text}
        onChange={e => setInput(e.target.value)}
      />
    </div>
  );
};

export default Input;
