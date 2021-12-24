import React from 'react';
import '../style/components/toolbar.scss'
import Select from "./Select";

const Toolbar = () => {
  return (
    <div className='toolbar'>
      <h2>Choose Dishes</h2>
      <Select />
    </div>
  );
};

export default Toolbar;