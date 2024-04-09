import { useEffect, useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import { Button } from './components/Button';
import { ListGroup } from './components/ListGroup';
import Like from './components/Like/Like';
import StrictMode from './components/StrictMode';
import UpdateObject from './components/UpdateObject';
import NavBar from './components/NavBar';
import CartIt from './components/CartIt';
import ExpandableText from './components/ExpandableText';
import Form from './components/Form/Form';

function App() {
  const [joker, setJoker] = useState('');
  const [alertVisible, setAlertVisible] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([
    'laptops',
    'iphone',
    'books',
    'power pc',
  ]);
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
      <Button color="primary" onClick={handleShowAlert}>
        <span>Click me</span>
      </Button>
      <Like />
      <StrictMode />
      <UpdateObject />
      <NavBar cartItemCount={cartItems.length} />
      <CartIt cartItems={cartItems} onClearCartItem={() => setCartItems([])} />
      <ExpandableText>Hello world!</ExpandableText>
      <Form />
    </>
  );
}

export default App;
