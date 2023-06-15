import React from "react";
import Catigories from "../components/Catigories";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock.jsx";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Pagination from "../components/Paginations/Paginations";
import { SearchContext } from "../App";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import {setCategoryId} from '../redux/slices/filterSlice';

const Home = () => {

const dispatch = useDispatch();
const categoryId = useSelector(state => state.filter.categoryId);
const onChangeCategory = (id) => {
  dispatch(setCategoryId(id));
};

  const {searchValue} = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating'
  });

  React.useEffect(() => {
    axios.get(`https://64121e756e3ca3175307420a.mockapi.io/items?page=${currentPage}&limit=4&${
      categoryId > 0
        ? `category=${categoryId}`
        : "https://64121e756e3ca3175307420a.mockapi.io/items?"
    }&sortBy=${sortType.sortProperty}&order=desc`).then(res => {setItems(res.data);
    setIsLoading(false);})
      window.scrollTo(0, 0);
  }, [categoryId, sortType, currentPage]);

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => <PizzaBlock key={obj} {...obj} />);

  const skeletons = [...new Array(6)].map((_, i) => (
    <Skeleton key={i} />
  ));

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Catigories
            value={categoryId}
            onChangeCatigory={onChangeCategory}
          />
          <Sort value={sortType} onChangeSort={(i) => setSortType(i)}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">{isLoading ? skeletons : pizzas}</div>
        <Pagination onChangePage={(number) => setCurrentPage(number)} />
      </div>
    </>
  );
};

export default Home;

