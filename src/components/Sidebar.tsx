import React from 'react';
import {ReactComponent as Logout} from "../assets/sidebar-icon/Logout.svg";
import {ReactComponent as Logo} from "../assets/sidebar-icon/bx_logo.svg";
import {ReactComponent as Home} from "../assets/sidebar-icon/Home.svg";
import {ReactComponent as Discount} from "../assets/sidebar-icon/Discount.svg";
import {ReactComponent as Graph} from "../assets/sidebar-icon/Graph.svg";
import {ReactComponent as Message} from "../assets/sidebar-icon/Message.svg";
import {ReactComponent as Notification} from "../assets/sidebar-icon/Notification.svg";
import {ReactComponent as Setting} from "../assets/sidebar-icon/Setting.svg";
import {NavLink} from "react-router-dom";
import gsap from 'gsap'

const menu = [
    {id: 1, path: '/', classNameLink: 'sidebar__logo', classNameContainer: 'sidebar__logoContainer', classNameContainerAnimate: '', Component: Logo},
    {id: 2, path: '/', classNameLink: 'sidebar__home sidebar__icon', classNameContainer: 'sidebar__iconContainer', classNameContainerAnimate: 'sidebar__homeContainer', Component: Home},
    {id: 3, path: 'discount', classNameLink: 'sidebar__discount sidebar__icon', classNameContainer: 'sidebar__iconContainer', classNameContainerAnimate: 'sidebar__discountContainer', Component: Discount},
    {id: 4, path: 'graph', classNameLink: 'sidebar__graph sidebar__icon', classNameContainer: 'sidebar__iconContainer', classNameContainerAnimate: 'sidebar__graphContainer', Component: Graph},
    {id: 5, path: 'message', classNameLink: 'sidebar__message sidebar__icon', classNameContainer: 'sidebar__iconContainer', classNameContainerAnimate: 'sidebar__messageContainer', Component: Message},
    {id: 6, path: 'notification', classNameLink: 'sidebar__notification sidebar__icon', classNameContainer: 'sidebar__iconContainer', classNameContainerAnimate: 'sidebar__notificationContainer', Component: Notification},
    {id: 7, path: 'setting', classNameLink: 'sidebar__setting sidebar__icon', classNameContainer: 'sidebar__iconContainer', classNameContainerAnimate: 'sidebar__settingContainer', Component: Setting},
    {id: 8, path: 'logout', classNameLink: 'sidebar__logout sidebar__icon', classNameContainer: 'sidebar__logoutContainer', classNameContainerAnimate: '', Component: Logout},
]

const Sidebar = () => {
    let tl = gsap.timeline()

    const handleClick = (classNameContainer: string) => {
        tl.fromTo(`.${classNameContainer}`, {
            width: 0
        }, {
            width: 88,
        })
    }
    return (
        <div className='sidebar'>
            {
                menu.map(({id, path, classNameLink, classNameContainer, classNameContainerAnimate, Component}) => (
                    <NavLink onClick={(() => handleClick(classNameContainerAnimate))} to={path} className={`${classNameContainer} ${classNameContainerAnimate}`} key={id}>
                        <div className={classNameLink}>
                            <Component/>
                        </div>
                    </NavLink>
                ))
            }
        </div>
    );
};

export default Sidebar;