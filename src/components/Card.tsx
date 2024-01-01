/* eslint-disable react-refresh/only-export-components */
import { CDN_URL } from '../utils/constants';
import { PropsWithChildren, ReactNode } from 'react';

interface CardDetail {
  name: string;
  cuisines: string;
  avgRating: string;
  cloudinaryImageId: string;
  deliveryTime: string;
  costForTwo: string;
  aggregatedDiscountInfoV3?: {
    header: string;
    subHeader: string;
  };
}

const Card = (props: PropsWithChildren<{ details: CardDetail }>) => {
  const { name, avgRating, cloudinaryImageId, costForTwo } = props.details;
  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[200px] rounded-sm "
      style={{ backgroundColor: '#f0f0f0' }}
    >
      <div className="h-40 w-40 rounded-lg relative overflow-hidden">
        <img
          className="h-full w-full rounded-lg"
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt="Your Image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90">
          {props.children}
        </div>
      </div>

      <h3 className="font-bold py-2 text-lg">{name}</h3>

      <h4>{avgRating} Star</h4>
      <h4> {costForTwo}</h4>
      <p>10 Minutes</p>
    </div>
  );
};

interface HOCprop {
  details: CardDetail;
}
export function withLabeledOfferCard(
  Card: React.ComponentType<{ children: ReactNode; details: CardDetail }>
) {
  return (props: HOCprop) => {
    const headers = props?.details?.aggregatedDiscountInfoV3;
    const offerString = headers?.header + ' ' + headers?.subHeader;
    return (
      <div className="">
        {headers?.header && headers?.subHeader ? (
          <Card {...props}>
            <label className="absolute text-white font-bold bottom-0 text-[0.77rem] w-full text-center">
              {offerString}
            </label>
          </Card>
        ) : null}
      </div>
    );
  };
}
export default Card;
