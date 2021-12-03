import React from 'react';
import gsap from 'gsap';

interface menuRest {
    menuRest: string[]
    activeTab: string
    setActiveTab: (activeTab: string) => void
}

const TabMenu = ({menuRest, activeTab, setActiveTab}:menuRest) => {
    const handleClick = (e:React.MouseEvent<HTMLLIElement>, item:string) => {
        setActiveTab(item)
        gsap.to(e.target, {

        })
    }
    return (
        <div className='tabMenu'>
            <menu>
                {menuRest.map(item => (
                    <li className={activeTab === item ? 'active' : ''} onClick={(e) => handleClick(e, item)}>{item}</li>
                ))}
            </menu>
        </div>
    );
};

export default TabMenu;