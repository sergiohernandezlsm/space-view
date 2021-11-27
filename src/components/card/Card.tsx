import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from "./Card.module.scss";

export interface Props {
  cardWidth: number;
}

const CardComponent: React.FC<Props> = (props) => {
  return (
    <Col sm={props.cardWidth}>
      <Card className={styles.cardWrapper}>
        <Card.Img variant="top" src="http://via.placeholder.com/640x360" />
      </Card>
    </Col>
  );
};

export default CardComponent;
