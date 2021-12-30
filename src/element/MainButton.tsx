import React from 'react';
import '../style/elements/mainButton.scss'

interface MainButtonProps {
  value: string
}

const MainButton = ({value}:MainButtonProps) => {
  return (
    <button className='mainButton'>{value}</button>
  );
};

export default MainButton;