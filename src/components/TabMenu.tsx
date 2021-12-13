import React, {useEffect} from 'react';
import gsap from 'gsap';


interface menuRest {
    menuRest: string[]
    activeTab: string
    setActiveTab: (activeTab: string) => void
}

const TabMenu = ({menuRest, activeTab, setActiveTab}:menuRest) => {

    const LineContainer = React.useRef(null);

    const handleClick = (e:React.MouseEvent<HTMLLIElement>, item:string) => {
        setActiveTab(item)
    }
    useEffect(()=> {
        gsap.from(LineContainer.current, {
            width: 0
        })
    },[activeTab])
    return (
        <div className='tabMenu'>
            <menu>
                {menuRest.map(item => (
                    <li className={item}
                        key={item}
                        onClick={(e) => handleClick(e, item)}>{item}
                        { activeTab === item && <div ref={LineContainer} className='active' /> }
                    </li>
                ))}
            </menu>
        </div>
    );
};

export default TabMenu;