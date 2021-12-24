import React from 'react';
import {useAppSelector} from "../app/hooks";
import {dishesType, selectDishes} from "../features/dishesSlice";

interface DishesContainerProps {
    activeTab: string
}


const DishesContainer = ({activeTab}: DishesContainerProps) => {
  const dishes = useAppSelector(selectDishes);
  const activeDishes = dishes.filter((dish: dishesType) => dish.category === activeTab && dish)

  return (
    <div className='home'>
      <div className='home__content'>
        {!!activeDishes.length && activeDishes.map((dish: dishesType) => (
          <div key={dish.id} className='home__dish'>
            <img
              src={require(`../assets/dishes/${dish.picture}.png`)}
              alt={dish.name}
            />
            <div className='home__dish-content'>
              <h4>{dish.name}</h4>
              <p className='home__dish-content-price'>{dish.price} $</p>
              <p className='home__dish-content-quantity'>{dish.amount} Bowls available</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DishesContainer;