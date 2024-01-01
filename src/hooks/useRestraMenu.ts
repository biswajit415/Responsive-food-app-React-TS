/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { MENU_URL } from '../utils/constants';

export interface Item {
  card: {
    info: {
      name: string;
      price: number;
      imageId: string;
      id: string;
      description: string;
    };
  };
}
interface ListOfMenu {
  title: string;
  itemCards: Item[];
}
interface MenuInfo {
  cuisines: string[];
  costForTwoMessage: string;
  name: string;
}

interface MenuList {
  listOfMenu: ListOfMenu[];
  info: MenuInfo;
}

interface Card {
  card: { card: { title: string } };
}

const useRestraMenu = (resId: string | undefined) => {
  const [menuList, setMenuList] = useState<MenuList | undefined>();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const dataSet = await fetch(MENU_URL + `=${resId}`);
    const json = await dataSet.json();
    const realData: MenuList = {
      listOfMenu: [],
      info: {
        cuisines: [],
        costForTwoMessage: '',
        name: '',
      },
    };

    realData.info = json.data?.cards[0]?.card.card.info;

    const manues = json.data?.cards
      .filter((item: { groupedCard: any[] }) => item.groupedCard)[0]
      ?.groupedCard.cardGroupMap.REGULAR.cards.filter(
        (it: Card) => it.card.card.title !== undefined
      )
      .map((item: { card: { card: any } }) => item.card.card);

    realData.listOfMenu = manues;
    setMenuList(realData);
  };

  return menuList;
};

export default useRestraMenu;
