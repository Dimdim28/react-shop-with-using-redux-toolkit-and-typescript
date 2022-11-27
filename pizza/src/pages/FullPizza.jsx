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
  console.log(pizza);
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizzaImage" />
      <h1>{pizza.title}</h1>
      <h4>{pizza.price}</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        optio, quisquam dolor odio sapiente ullam neque cupiditate! Vel, nihil
        nisi.
      </p>
      <h4>250 </h4>
    </div>
  );
};

export default FullPizza;
