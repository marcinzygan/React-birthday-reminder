import React from "react";

const List = ({ name, age, image }) => {
  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <img src={image} alt={name} />
    </>
  );
};

export default List;
