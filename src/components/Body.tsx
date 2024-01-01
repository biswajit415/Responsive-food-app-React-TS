import { useState, useEffect } from 'react';
import * as CONSTANT from '../utils/constants';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import ShimmerLoad from './ShimmerLoad';
import { Link } from 'react-router-dom';
import Card, { withLabeledOfferCard } from './Card';

interface Restro {
  info: {
    name: string;
    id: string;
    cuisines: string;
    avgRating: string;
    cloudinaryImageId: string;
    deliveryTime: string;
    costForTwo: string;
    aggregatedDiscountInfoV3?: {
      header: string;
      subHeader: string;
    };
  };
}

interface Card {
  card: {
    card: {
      id: string;
      gridElements?: {
        infoWithStyle?: {
          restaurants: Restro[];
        };
      };
    };
  };
}

const OfferCard = withLabeledOfferCard(Card);

const Body = () => {
  const [restroList, setRestroList] = useState<Restro[] | undefined>([]);
  const [searchText, setSearchText] = useState<string>('');
  const [filteredRestroList, setFilterRestroList] = useState<
    Restro[] | undefined
  >([]);
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(CONSTANT.RESTRO_LIST_URL);
      const json = await data.json();
      const getCards: Card[] = json.data?.cards.filter(
        (item: Card) => item.card.card.id === CONSTANT.RESTRO_ID_TYPE
      );
      setRestroList(
        getCards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      setFilterRestroList(
        getCards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };

  if (filteredRestroList?.length === 0) {
    return <ShimmerLoad />;
  }

  if (!onlineStatus.status) {
    return <h1>Please connect to internet</h1>;
  }

  return (
    <div className="body">
      <div className="p-4 m-4">
        <input
          type="text"
          data-testid="searchInput"
          value={searchText}
          className="border border-solid border-black"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 py-0.5 bg-green-600 text-white rounded-md m-2"
          onClick={() => {
            const filterRestro = restroList?.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterRestroList(filterRestro);
          }}
          name="searchBtn"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestroList?.map((crdItem) => {
          return (
            <Link key={crdItem.info.id} to={`/restro/${crdItem.info.id}`}>
              {crdItem.info.aggregatedDiscountInfoV3 ? (
                <OfferCard details={crdItem.info} />
              ) : (
                <Card details={crdItem.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
