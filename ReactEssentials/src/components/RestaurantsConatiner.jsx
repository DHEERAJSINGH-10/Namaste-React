import './RestaurantsContainer.css';
import { RestaurantsCards } from './RestaurantsCards';

export const RestrauntContainer = ({ restaurants }) => {
  return (
    <div className="container">
      <RestaurantsCards restaurants={restaurants} />
    </div>
  );
};