import { useDispatch } from 'react-redux';
import { CDN_URL } from '../utils/constants';
import { addItem } from '../redux/features/cartSlice';
import { Item } from '../hooks/useRestraMenu';

const ItemList = ({ items }: { items: Item[] }) => {
  const dispatch = useDispatch();
  const addToCart = (payload: Item) => {
    dispatch(addItem(payload));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2  h-[100px] border-gray-200 border-b-4 text-left flex justify-between"
        >
          <div className="py-2 w-9/12">
            <span>{item.card.info.name}</span>
            <span>- &#8377; {item.card.info.price / 100}</span>
            <p className="text-sm text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-2/12 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-5/6 rounded-md z-10"
            />
            <button
              className="absolute text-sm text-white bg-black px-1 rounded-lg bg-opacity-80 z-20  h-2/6 bottom-0 left-0 "
              onClick={() => addToCart(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
