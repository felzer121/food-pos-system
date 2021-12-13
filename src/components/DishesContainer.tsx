import React from 'react';
import {useAppSelector} from "../app/hooks";
import {dishesType, selectDishes} from "../features/dishesSlice";

interface DishesContainerProps {
    activeTab: string
}

const DishesContainer = ({activeTab}:DishesContainerProps) => {
  const dishes = useAppSelector(selectDishes);
  console.log(dishes)
  return (
    <div>
      <h2>Choose Dishes</h2>
      {dishes.map((dish: dishesType) => (
        <div key={dish.id}>
          <img
            src={require(`../assets/dishes/${dish.picture}.png`)}
            alt={dish.name}
          />
          {dish.picture}
        </div>
      ))}
    </div>
  );
};

export default DishesContainer;