import { Item } from '../hooks/useRestraMenu';
import ItemList from './ItemList';

interface Category {
  details: {
    title: string;
    itemCards: Item[];
  };

  toggleClick: () => void;
  toggle: boolean;
}

const RestraunantCategory = ({ details, toggleClick, toggle }: Category) => {
  const { title } = details;

  return (
    <div>
      <div className="w-full md:w-6/12 lg:w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between font-bold rounded-lg"
          onClick={() => toggleClick()}
        >
          <span>
            {title} ({details.itemCards.length})
          </span>
          <span>{toggle ? '🔽' : '🔼'}</span>
        </div>
        {toggle ? (
          <div className=" border-gray-200 border-b-4 pb-2 "></div>
        ) : null}
        {toggle ? <ItemList items={details.itemCards} /> : null}
      </div>
    </div>
  );
};

export default RestraunantCategory;
