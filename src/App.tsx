import { useEffect, useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Button from './components/Button';
import { ListGroup } from './components/ListGroup';

function App() {
  const [joker, setJoker] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://icanhazdadjoke.com/', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();
        setJoker(data.joke);
        console.log(data);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      }
    };
    fetchData();
  }, []);
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const handleShowAlert = () => {
    setAlertVisible(true);
  };
  const handleHideAlert = () => {
    setAlertVisible(false);
  };
  return (
    <>
      {alertVisible && (
        <Alert onClose={handleHideAlert}>
          <span>{joker}</span>
        </Alert>
      )}
      <ListGroup
        items={['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']}
        heading="Master Javascript"
        onSelectItem={handleSelectItem}
      />
      <Button color="info" onClick={handleShowAlert}>
        <span>Click me</span>
      </Button>
    </>
  );
}

export default App;
