import React from 'react';
import TitlePage from "../components/TitlePage";
import TabMenu from "../components/TabMenu";

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
            <TitlePage title={'Jaegar Resto'} isDate={true} search={true} />
            <TabMenu menuRest={menuRest} setActiveTab={setActiveTab} activeTab={activeTab} />
        </div>
    );
};

export default Home;