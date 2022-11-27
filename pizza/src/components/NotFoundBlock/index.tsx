import React from "react";
import styles from "./NotFound.module.scss";

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <span>🤨</span>
      <br />
      <h1>Ничего не найдено </h1>
      <p>
        К сожалению, данная страница недоступна либо отсутствует в нашем
        интернет-магазине.
      </p>
    </div>
  );
};

export default NotFoundBlock;
