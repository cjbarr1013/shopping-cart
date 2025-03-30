import '../styles/App.css';
import Button from './Button';
import CartButton from './CartButton';
import QuantityCounter from './QuantityCounter';
import SortDropdown from './SortDropdown';
import FilterDropdown from './FilterDropdown';

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
      <QuantityCounter quantity={1}></QuantityCounter>
      <SortDropdown></SortDropdown>
      <FilterDropdown
        title="Categories"
        options={[
          { value: 'mens', label: "Men's Clothing" },
          { value: 'womens', label: "Women's Clothing" },
        ]}
      ></FilterDropdown>
    </>
  );
}

export default App;
