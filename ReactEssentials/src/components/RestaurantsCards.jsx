import './RestaurantsCards.css'
import { RES_URL } from './../utils/links'

export const RestaurantsCards = ({ restaurants }) => {
  return (
    <>
      <div className="cards">
        {restaurants
          .filter((restaurant) => restaurant?.info)
          .map((restaurant) => (
            <div className="card" key={restaurant.info.id}>
              <div className="image">
                <img src={RES_URL + restaurant.info.cloudinaryImageId} alt={restaurant.info.name} />
              </div>
              <h3>{restaurant.info.name}</h3>
              <p>{restaurant.info.cuisines.join(", ")}</p>
              <p>{restaurant.info.sla.deliveryTime} mins</p>
              <p>{restaurant.info.avgRating} ⭐</p>
            </div>
          ))}
      </div>
    </>
  );
};