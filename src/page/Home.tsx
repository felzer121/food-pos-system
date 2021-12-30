import React from 'react';
import TitlePage from "../components/TitlePage";
import TabMenu from "../components/TabMenu";
import DishesContainer from "../components/DishesContainer";
import Toolbar from "../components/Toolbar";
import Orders from '../components/Orders';

const menuRest = [
    'Hot Dishes',
    'Cold Dishes',
    'Soup',
    'Grill',
    'Appetizer',
    'Dessert'
]

const Home = () => {
  const [activeTab, setActiveTab] = React.useState(menuRest[0])
  return (
    <div className='home'>
      <div className='home__dishes'>
        <TitlePage title={'Jaegar Resto'} isDate={true} search={true} />
        <TabMenu menuRest={menuRest} setActiveTab={setActiveTab} activeTab={activeTab} />
        <Toolbar />
        <DishesContainer activeTab={activeTab} />
      </div>
      <div className='home__orders'>
        <Orders orderName={'Order #34562'} />
      </div>
    </div>
  );
};

export default Home;