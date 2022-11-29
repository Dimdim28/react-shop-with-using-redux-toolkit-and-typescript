import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../../redux/cart/slice";

import { CartItem } from "../../redux/cart/types";
import { selectCartItemsById } from "../../redux/cart/selectors";
const typeNames = ["тонкое", "традиционное"];

type PizzaBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
};
const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  // console.log(title, sizes, types);

  const dispatch = useDispatch();
  const activeTypeNumber = types.includes(0) ? 0 : 1;
  const [activeType, setactiveType] = useState(activeTypeNumber);
  const [activeSize, setactiveSize] = useState(0);
  const [activePrice, setactivePrice] = useState(price);
  const cartItem = useSelector(
    selectCartItemsById(title + typeNames[activeType] + sizes[activeSize])
  );

  const addedCount = cartItem ? cartItem.count : 0;

  React.useEffect(() => {
    setactivePrice(Math.round((price / sizes[0]) * sizes[activeSize]));
  }, [activeSize, price, sizes]);

  React.useEffect(() => {
    if (activeType === 0) setactivePrice((price) => price * 0.5);
    else {
      setactivePrice((price) => price * 2);
    }
  }, [activeType]);

  const onClickAdd = () => {
    const type = typeNames[activeType];
    const size = sizes[activeSize];

    const item: CartItem = {
      type,
      size,
      id: id + type + size,
      title,
      price: activePrice,
      imageUrl,
      count: 0,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link to={`/pizza/${id}`}>
          <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
          <h4 className="pizza-block__title">{title}</h4>
        </Link>
        <div className="pizza-block__selector">
          <ul>
            {types.map((typeId, i) => (
              <li
                onClick={() => setactiveType(typeId)}
                className={activeType === typeId ? "active" : ""}
                key={i}
              >
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li
                onClick={() => setactiveSize(i)}
                className={activeSize === i ? "active" : ""}
                key={i}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price"> {activePrice} ₽</div>
          <button
            onClick={onClickAdd}
            className="button button--outline button--add"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
