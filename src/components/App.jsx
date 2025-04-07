import '../styles/App.css';
import StorePages from '../components/StorePages.jsx';
// import Button from './Button';
// import CartButton from './CartButton';
// import {
//   StoreCardQuantityCounter,
//   CartCardQuantityCounter,
// } from './QuantityCounter';
// import SortDropdown from './SortDropdown';
// import FilterDropdown from './FilterDropdown';
// import StoreCard from './StoreCard';
// import CartCard from './CartCard';
// import CartSummary from './CartSummary';
// import Header from './Header';
// import Sidebar from './Sidebar';

function App() {
  const cart = [
    {
      id: 1,
      title: "Men's Jacket",
      price: 39.99,
      quantity: 2,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
    {
      id: 2,
      title: 'Old Piece of Meatloaf',
      price: 18.99,
      quantity: 1,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
    {
      id: 3,
      title: 'Blood of the Virgin Mary',
      price: 8.99,
      quantity: 3,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
  ];

  return (
    <>
      <StorePages></StorePages>
      {/* <Button
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
      <StoreCardQuantityCounter quantity={1}></StoreCardQuantityCounter>
      <CartCardQuantityCounter quantity={1}></CartCardQuantityCounter>
      <SortDropdown></SortDropdown>
      <FilterDropdown
        title="Categories"
        options={[
          { value: 'mens', label: "Men's Clothing" },
          { value: 'womens', label: "Women's Clothing" },
        ]}
      ></FilterDropdown>
      <StoreCard
        productInfo={{ title: "Sweet Men's Jacket", price: 59.99, id: 1 }}
      ></StoreCard>
      <CartCard
        productInfo={{
          title: "Sweet Men's Jacket",
          price: 59.99,
          id: 1,
          quantity: 2,
        }}
      ></CartCard>
      <CartSummary subtotal={102.97}></CartSummary>
      <Header total={107.98}></Header>
      <Sidebar
        options={[
          {
            title: 'Category',
            subOptions: [
              { value: 'mens', label: "Men's Clothing" },
              { value: 'womens', label: "Women's Clothing" },
            ],
          },
          {
            title: 'Price',
            subOptions: [
              { value: 'under25', label: 'Under $25' },
              { value: '25-50', label: '$25 - $50' },
              { value: '50-100', label: '$50 - $100' },
              { value: '100-250', label: '$100 - $250' },
            ],
          },
        ]}
      ></Sidebar> */}
    </>
  );
}

export default App;
