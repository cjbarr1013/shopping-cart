import '../styles/App.css';
import Button from './Button';
import CartButton from './CartButton';

function App() {
  return (
    <>
      <Button
        text="Click Me!"
        handleClick={() => console.log('primary')}
        type="primary"
      ></Button>
      <Button
        text="No! Click Me!"
        handleClick={() => console.log('secondary')}
        type="secondary"
      ></Button>
      <CartButton
        total="$29.45"
        handleClick={() => console.log('Redirecting to cart...')}
      ></CartButton>
    </>
  );
}

export default App;
