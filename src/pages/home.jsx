import React, {useEffect} from 'react';
import Categories from "../component/Categories";
import SortPopUp from "../component/SortPopUp";

import {useDispatch, useSelector} from "react-redux";
import {fetchPizzas} from "../store/pizzaReducer";
import PizzaItem from "../component/pizzaItem";
import {setCategory, setSort} from "../store/filtersReducer";
import LoadingPizzaItem from "../component/loadingPizzaItem";


const categoriesName = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortPizza = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
]

const Home = () => {
    const dispatch = useDispatch()
    const {category, sortBy} = useSelector(({filters})=> filters)
    const isLoaded = useSelector(state => state.pizza.isLoaded)
    const itemsPizza = useSelector(state => state.pizza.items)
    const cartItems = useSelector(({ cart }) => cart.items);

    useEffect(() => {
        dispatch(fetchPizzas(category,sortBy))
    }, [category,sortBy])


    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    },[])

    const onSelectSort = React.useCallback((type) => {
        dispatch(setSort(type))
    },[])

    return (

            <div className="container">
                <div className="content__top">
                    <Categories
                        activeCategory={category}
                        categories={categoriesName}
                        onClickCategory={onSelectCategory}
                    />
                    <SortPopUp
                        sortPizza={sortPizza}
                        onClickSort={onSelectSort}
                        activeSort={sortBy}
                    />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    { isLoaded ?
                        itemsPizza.map(item => (
                            <PizzaItem
                                addedCount={cartItems[item.id] && cartItems[item.id].items.length}
                                key={item.id}
                                {...item}/>))
                         :
                        Array(12)
                            .fill(0)
                            .map((_, index )=>
                                <LoadingPizzaItem
                                    key={index}
                                />)
                    }
                </div>
            </div>

    );
};

export default Home;