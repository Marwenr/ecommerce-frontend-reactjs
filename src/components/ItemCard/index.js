import React from "react";
import styles from "./styles.module.css";
import { Card } from "react-bootstrap";
import MainButton from "../MainButton";

function ItemCard(el) {
  const { card, textTruncate, image } = styles;
  return (
    <Card className={card}>
      <Card.Img
        variant="top"
        src={require(`../../assets/image/${el.image}.jpg`)}
        className={image}
      />
      <Card.Body>
        <Card.Title className={textTruncate}>{el.name}</Card.Title>
        <Card.Text>${el.price}</Card.Text>
      </Card.Body>
      <MainButton width="100%">Add To Cart</MainButton>
    </Card>
  );
}

export default ItemCard;
