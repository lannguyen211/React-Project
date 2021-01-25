import React from "react";
import style from "./recipe.module.css";

const Recipe = ({ title, image, howtocook }) => {
  return (
    <div className={style.recipe}>
      <a href={howtocook}>
        <h1 className={style.title}>{title}</h1>
      </a>
      <img className={style.image} src={image} atl="" />
    </div>
  );
};

export default Recipe;
