import { Button } from '../Button';
import { FormEvent } from 'react';
import Input from '../Input/Input';
const Form = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <form action="" onSubmit={handleSubmit}>
      <Input label="description" text="jack" />
      <Input label="amount" text="" />
      <Input label="category" text="" />
      <Button
        type="submit"
        onClick={() => console.log('clicked')}
        children="submit"
      />
    </form>
  );
};

export default Form;
