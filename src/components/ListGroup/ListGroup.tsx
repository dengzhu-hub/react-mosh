import { useState } from 'react';

import styled from 'styled-components';
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
`;
const ListItem = styled.li<ListItemProps>`
  background: ${(props) => (props.$active ? '#BF4F74' : '#fff')};
  color: ${(props) => (props.$active ? 'white' : '#BF4F74')};
  padding: 12px 24px;
`;
type ListGroupProps = {
  items: string[];
  heading: string;
  onSelectItem(item: string): void;
};
interface ListItemProps {
  $active: boolean;
  $primary?: boolean;
}
const ListGroup = ({ items, heading, onSelectItem }: ListGroupProps) => {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found.</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            $active={index === selectIndex}
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
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListGroup;
