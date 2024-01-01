import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Shimmer from './ShimmerLoad';
import useRestraMenu from '../hooks/useRestraMenu';
import RestraunantCategory from './RestraurantCategory';

interface Toggle {
  index: null | number;
  isOpen: boolean;
}
const RestroMenu = () => {
  const { resId } = useParams();
  const menuListWithCategory = useRestraMenu(resId);

  const [toggleIndex, setToggleIndex] = useState<Toggle>({
    index: null,
    isOpen: false,
  });

  const toggleHandler = (index: number | null) => {
    setToggleIndex((prev) => {
      if (prev?.index === index) {
        return {
          index,
          isOpen: !prev.isOpen,
        };
      } else {
        return {
          index,
          isOpen: true,
        };
      }
    });
  };

  return !menuListWithCategory || !menuListWithCategory.listOfMenu ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-xl">
        {menuListWithCategory.info.name}
      </h1>
      <p className="font-bold text-lg">
        {' '}
        {menuListWithCategory.info.cuisines.join(', ')} -{' '}
        {menuListWithCategory.info.costForTwoMessage}
      </p>

      {menuListWithCategory.listOfMenu.map((category, index) => (
        <RestraunantCategory
          key={category.title}
          toggleClick={() => toggleHandler(index)}
          toggle={toggleIndex.index === index && toggleIndex.isOpen}
          details={category}
        />
      ))}
    </div>
  );
};

export default RestroMenu;
