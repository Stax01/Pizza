import React from 'react';

const Categories = React.memo(function  Categories  ({categories, activeCategory, onClickCategory})  {
    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}>Все
                </li>
                {categories.map((item, index) => (<li
                    onClick={() => onClickCategory(index)}
                    key={item}
                    className={activeCategory === index ? 'active' : ''}
                >{item}</li>))}
            </ul>
        </div>
    );
})

export default Categories;