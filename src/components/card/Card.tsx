import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from "./Card.module.scss";

export interface Props {
  cardWidth: number;
  imageLocation: any;
}

const CardComponent: React.FC<Props> = (props) => {
  return (
    <Col sm={props.cardWidth}>
      <Card className={styles.cardWrapper}>
        <Card.Img variant="top" src={props.imageLocation} />
      </Card>
    </Col>
  );
};

export default CardComponent;
