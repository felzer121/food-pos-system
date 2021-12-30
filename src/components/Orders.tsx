import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../app/hooks';
import Input from '../element/Input';
import MainButton from '../element/MainButton';
import { select, selectEat, selectEatType } from '../features/selectEatSlice';
import '../style/components/orders.scss'


interface OrdersProps {
  orderName: string
}

const Orders = ({orderName}:OrdersProps) => {
  const selectItems = useAppSelector(selectEat)
  const dispatch = useDispatch()

  const handleClick = (selectItem: selectEatType) => {
    dispatch(select(selectItem))
  }

  return (
    <div className='order'>
      <h2>{orderName}</h2>
      <div className='order__eatType'>
        {selectItems.map((selectItem: selectEatType) => (
          <span key={selectItem.id} className={selectItem.active ? 'order__eatType-active' : 'order__eatType-disable'}
              onClick={() => handleClick(selectItem)}>{selectItem.name}</span>
        ))}
      </div>
      <div className='order__subtitle'>
        <div className='order__subtitle-info'>
          <span>Item</span>
          <span>Qty</span>
        </div>
        <div className='order__subtitle-price'>
          <span>Price</span>
        </div>
      </div>
      <div className='order__itemsOrder'>
        <div className='order__item'>
          <div className='order__itemInfo'>
            <div className='order__itemInfoContent'>
              <div className='order__itemInfoContent-info'>
                <img
                  src={require(`../assets/dishes/beef-dumpling-in-hot-and-sour-soup.png`)}
                  alt={'name'}
                />
                <div className='order__itemInfoContent-info-txt'>
                  <h6>beef-dumpling-in-hot-and-sour-soup</h6>
                  <span>$ 2.29</span>
                </div>
              </div>
              <Input width={48} height={48}/>
            </div>
            <div className='order__itemInfoPrice'>
              <div className='order__itemInfoPrice-total'>
                <span>$ 2.29</span>
              </div>
            </div>
          </div>
          <div className='order__subItem'>
            <div className='order__subItemContent'>
              <Input height={48} placeholder={'Order Note...'}/>
            </div>
            <div className='order__subItemDelete'>
              <div className='order__subItemDelete-button'>
                <Input width={48} height={48}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='order__totalPrice'>
        <div>
          <div className='order__totalPrice-discount'>
            <span className='order__totalPrice-name'>Discount</span>
            <span className='order__totalPrice-money'>$0</span>
          </div>
          <div className='order__totalPrice-price'>
            <span className='order__totalPrice-name'>Sub total</span>
            <span className='order__totalPrice-money'>$ 21,03</span>
          </div>
        </div>
        <MainButton value={'Continue to Payment'} />
      </div>

    </div>
  );
};

export default Orders;