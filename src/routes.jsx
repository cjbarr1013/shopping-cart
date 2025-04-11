import Home from './components/Home.jsx';
import Shop from './components/Shop.jsx';
import Cart from './components/Cart.jsx';
import StorePages from './components/StorePages.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import DefaultStorePage from './components/DefaultStorePage.jsx';

const routes = [
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'store',
    element: <StorePages />,
    children: [
      {
        index: true,
        element: <DefaultStorePage />,
      },
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
