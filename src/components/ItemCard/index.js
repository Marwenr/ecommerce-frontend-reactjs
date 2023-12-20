import React from "react";
import styles from "./styles.module.css";
import { Card } from "react-bootstrap";
import MainButton from "../MainButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

function ItemCard({ title, price, image, id }) {
  const { card, textTruncate, imageStyle } = styles;
  const dispatch = useDispatch();

  return (
    <Card className={card}>
      <Card.Img variant="top" src={image} className={imageStyle} />
      <Card.Body>
        <Card.Title className={textTruncate}>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
      </Card.Body>
      <MainButton
        width="100%"
        onClick={() =>
          dispatch(
            addToCart({ productId: id, title, price, image, quantity: 1 })
          )
        }
      >
        Add To Cart
      </MainButton>
    </Card>
  );
}

export default ItemCard;
