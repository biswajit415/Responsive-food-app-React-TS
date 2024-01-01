import ItemList from './ItemList';
import { clearCart } from '../redux/features/cartSlice';
import { useAppSelector } from '../hooks/useAppDispatch';
import { useAppDispatch } from '../hooks/useAppSelector';

const Cart = () => {
  const cartItems = useAppSelector((store) => store.cart.cartItems);
  const dispatch = useAppDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mt-4">
      {cartItems.length === 0 ? (
        <div className="text-lg text-gray-500 ">
          Your Cart Is Empty !!! Pease add some items
        </div>
      ) : (
        <div className="w-full md:w-6/12 lg:w-6/12 mx-auto  p-4 ">
          <div>
            <h3 className="inline-block text-lg">
              Total Cart Items -{cartItems.length}
            </h3>
            <button
              onClick={() => clearCartHandler()}
              className="inline-block text-white p-2 bg-blue-700 rounded-lg ml-5"
            >
              Clear Cart
            </button>
          </div>
          <ItemList items={cartItems} />{' '}
        </div>
      )}
    </div>
  );
};

export default Cart;
