import { useState } from 'react';
const ListGroup = () => {
  const [selectIndex, setSelectIndex] = useState(0);
  const items = [
    'Tokyo',
    'New York',
    'London',
    'Paris',
    'Beijing',
    'Moscow',
    'Seoul',
    'Berlin',
    'Madrid',
    'Rome',
  ];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found.</p>}
      <ul className="list-group ">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectIndex === index
                ? 'list-group-item active'
                : 'list-group-item'
            }
            onClick={() => setSelectIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
