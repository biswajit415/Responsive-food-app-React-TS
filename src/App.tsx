import { Suspense } from 'react';
import Body from './components/Body';
import { createBrowserRouter } from 'react-router-dom';

import RestroMenu from './components/RestroMenu';
import Error from './components/Error';
import Contact from './components/Contact';
import About from './components/About';
import AppLayout, { Cart } from './Layout';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/restro/:resId',
        element: <RestroMenu />,
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<div>loading Cart Items....</div>}>
            <Cart />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

export default AppRouter;
