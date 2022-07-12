import React from "react";

function Categories() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const array = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {array.map((elem, ind) => (
          <li
            key={ind}
            onClick={() => onClickCategory(ind)}
            className={activeIndex === ind ? "active" : ""}
          >
            {elem}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
