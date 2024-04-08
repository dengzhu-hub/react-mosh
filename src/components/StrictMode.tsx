let count: number = 0;

const StrictMode = () => {
  count++;
  console.log(count);

  return <div>number is {count}</div>;
};

export default StrictMode;
