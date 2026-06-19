import './RestaurantsCards.css'
const resObj = [
  {
    name: "Spice Garden",
    rating: 4.7,
    cuisine: "Indian",
    deliveryTime: "30min",
    categories: ["Indian", "North Indian", "Vegetarian"],
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/3/28/8e4038f2-98a7-45e1-afda-6e3d5d434135_76928231-a0f0-4f7e-9d45-5cf371d29c4f.png_compressed"
  },
  {
    name: "Pizza Hub",
    rating: 4.5,
    cuisine: "Italian",
    deliveryTime: "25min",
    categories: ["Italian", "Pizza", "Fast Food"],
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/3/28/8e4038f2-98a7-45e1-afda-6e3d5d434135_76928231-a0f0-4f7e-9d45-5cf371d29c4f.png_compressed"
  },
  {
    name: "Sushi World",
    rating: 4.8,
    cuisine: "Japanese",
    deliveryTime:"40min",
    categories: ["Japanese", "Sushi", "Seafood"],
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/3/28/8e4038f2-98a7-45e1-afda-6e3d5d434135_76928231-a0f0-4f7e-9d45-5cf371d29c4f.png_compressed"
  },
  {
    name: "Burger Barn",
    rating: 4.3,
    cuisine: "American",
    deliveryTime: "20min",
    categories: ["Burgers", "American", "Fast Food"],
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/3/28/8e4038f2-98a7-45e1-afda-6e3d5d434135_76928231-a0f0-4f7e-9d45-5cf371d29c4f.png_compressed"
  },
  {
    name: "Taco Town",
    rating: 4.2,
    cuisine: "Mexican",
    deliveryTime: "35min",
    categories: ["Mexican", "Tacos", "Fast Food"],
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/3/28/8e4038f2-98a7-45e1-afda-6e3d5d434135_76928231-a0f0-4f7e-9d45-5cf371d29c4f.png_compressed"
  },
  {
    name: "Biryani Blues",
    rating: 4.6,
    cuisine: "Indian",
    deliveryTime: "45min",
    categories: ["Indian", "Biryani", "Mughlai"],
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/3/28/8e4038f2-98a7-45e1-afda-6e3d5d434135_76928231-a0f0-4f7e-9d45-5cf371d29c4f.png_compressed"
  },
  {
    name: "Chinese Wok",
    rating: 4.1,
    cuisine: "Chinese",
    deliveryTime: "30min",
    categories: ["Chinese", "Noodles", "Dim Sum"],
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/3/28/8e4038f2-98a7-45e1-afda-6e3d5d434135_76928231-a0f0-4f7e-9d45-5cf371d29c4f.png_compressed"
  },
  {
    name: "The Waffle House",
    rating: 4.4,
    cuisine: "Desserts",
    deliveryTime: "20min",
    categories: ["Desserts", "Waffles", "Beverages"],
    cloudinaryImageId: "FOOD_CATALOG/IMAGES/CMS/2025/3/28/8e4038f2-98a7-45e1-afda-6e3d5d434135_76928231-a0f0-4f7e-9d45-5cf371d29c4f.png_compressed"
  }
];
export const RestaurantsCards = () => {
  return (
    <>
    <div className="cards">
 
      {resObj.map((restaurant ,deliveryTime) => (
        <div className="card" key={deliveryTime}>
        <div className="image">  <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant.cloudinaryImageId}></img></div> 
          <h3>{restaurant.name}</h3>

          <p>{restaurant.categories.join(", ")}</p>
          <p>{restaurant.deliveryTime}</p>

          <p>{restaurant.rating}⭐</p>
        </div>
      ))}
      </div>
    </>
  );
};