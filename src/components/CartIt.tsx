interface CartProps {
  cartItems: string[];
  onClearCartItem: () => void;
}
const CartIt = ({ cartItems, onClearCartItem }: CartProps) => {
  return (
    <ul>
      {cartItems.map(item => (
        <li key={item}>{item}</li>
      ))}
      <button style={{ cursor: 'pointer' }} onClick={onClearCartItem}>
        {' '}
        clear
      </button>
    </ul>
  );
};

export default CartIt;
