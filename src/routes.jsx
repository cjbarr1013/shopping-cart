import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';
import StorePages from './components/StorePages.jsx';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'store',
    element: <StorePages />,
    children: [
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
    ],
  },
];

export default routes;
