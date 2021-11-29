import Card from "react-bootstrap/Card";
import styles from "./Card.module.scss";
export interface Props {
  imageLocation: string;
}

const CardComponent: React.FC<Props> = (props) => {
  return (
    <Card className={styles.cardWrapper}>
      <Card.Img variant="top" src={props.imageLocation} />
    </Card>
  );
};

export default CardComponent;
