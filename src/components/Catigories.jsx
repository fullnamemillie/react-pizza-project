import React from 'react';

const Catigories = ({value, onChangeCatigory}) => {

  // const [activeIndex, setActiveIndex] = React.useState(0);

  // const onClickCatigories = (index) => {
  //   setActiveIndex(index);
  // }

  const catigories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className="categories">
      <ul>
        {catigories.map((categoryName, i) => (<li key={i} onClick={()=> onChangeCatigory(i)} className={value === i ? 'active' : ''}>{categoryName}</li>))}        
      </ul>
    </div>
  );
};

export default Catigories;
