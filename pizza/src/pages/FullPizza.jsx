import axios from "axios";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Preloader from "../components/Preloader";

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://62cd928f066bd2b699287a7a.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (err) {
        alert("Ошибка при получении информации о пицце");
        navigate("/");
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <Preloader />;
  }

  return (
    <div className="container fullPizzaContainer">
      <div className="pizzaImageContainer">
        <img src={pizza.imageUrl} alt="pizzaImage" className="PizzaImage" />
      </div>
      <h1 className="title">Пицца "{pizza.title}"</h1>
      <div className="line">
        <p className="rating">
          Рейтинг: {"⭐".repeat(pizza.rating) + "☆".repeat(10 - pizza.rating)}
        </p>
        <p className="totalPrice">{pizza.price} </p>
      </div>

      <p className="about">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        optio, quisquam dolor odio sapiente ullam neque cupiditate! Vel, nihil
        nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Voluptatem optio, quisquam dolor odio sapiente ullam neque cupiditate!
        Vel, nihil nisi.
      </p>
    </div>
  );
};

export default FullPizza;
