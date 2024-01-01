import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Outlet } from 'react-router-dom';
import { lazy } from 'react';

export const Cart = lazy(() => import('./components/Cart'));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <div className="mt-[8rem] z-50 overflow-hidden">
          <Outlet />
        </div>
      </div>
    </Provider>
  );
};

export default AppLayout;
