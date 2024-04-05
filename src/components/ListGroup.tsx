import { useState } from 'react';

type ListGroupProps = {
  items: string[];
  heading: string;
  onSelectItem(item: string): void;
};
const ListGroup = ({ items, heading, onSelectItem }: ListGroupProps) => {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
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
            onClick={() => {
              setSelectIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
