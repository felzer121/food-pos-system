import React from 'react';
import {ReactComponent as Arrow} from "../assets/navigate-icon/arrow.svg";
import '../style/components/select.scss'
import gsap from 'gsap';
import {useAppSelector} from "../app/hooks";
import {select, selectEat, selectEatType} from "../features/selectEatSlice";
import {useDispatch} from "react-redux";

const tl_dropdown = gsap.timeline()

const Select = () => {
    const [isShow, setShow] = React.useState(false)
  const selectItems = useAppSelector(selectEat);
  const dispatch = useDispatch()

  const handleClick = () => {
    setShow(!isShow)
    gsap.to('.select__effects', .3,{
      width: `${isShow ? '0': '100%'}`
    })
    gsap.to('.select__arrow',  {
      css: {
        transform: `${isShow ? 'rotateX(0deg)' : 'rotateX(180deg)'}`,
        fill:  `${isShow ? '#FFFFFF': '#889898'}`,
        zIndex: 10
      }
    })
    gsap.to('.select__title', {
      css: {
        color:  `${isShow ? '#FFFFFF': '#889898'}`,
        zIndex: 10
      }
    })
    tl_dropdown.to('.select__dropdown', {
      css: {
        display: `${isShow ? 'none' : 'block'}`,
        height: `${isShow ? 0 : selectItems.length * 47}`
      }
    })
  }
  const handleClickItem = (selectItem: selectEatType) => {
    dispatch(select(selectItem))
    handleClick()
  }
  return (
    <div className='select'>
      <div className='select__button' onClick={handleClick}>
        <Arrow className='select__arrow' />
        <span className='select__title'>{selectItems.map((selectItem: selectEatType) => (selectItem.active && selectItem.name))}</span>
        <div className='select__effects' />
      </div>
      <div className='select__dropdown'>
          {selectItems.map((selectItem:selectEatType, index:number) => (
            <div key={index} className={`select__dropdown-item ${selectItem.active && 'select__dropdown-item-active'}`}
                 onClick={() => handleClickItem(selectItem)}>
              {selectItem.name}
            </div>
          ))}
      </div>
    </div>
  );

};

export default Select;