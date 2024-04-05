import './App.css';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <>
      <Alert>
        <span>
          My new thesaurus is terrible. In fact, it's so bad, I'd say it's
          terrible.
        </span>
      </Alert>
      <ListGroup
        items={['New York', 'San Francisco', 'Tokyo', 'London', 'Paris']}
        heading="Master Javascript"
        onSelectItem={handleSelectItem}
      />
    </>
  );
}

export default App;
