import Card from "../card";
import styles from "./CardCounter.module.scss";

const array = [1, 2, 3, 4, 5, 6, 7, 8];

const CardCounter = () => {
  return (
    <div className={styles.counterWrapper}>
      {array.map((x: any) => (
        <Card cardWidth={3} key={x} />
      ))}
    </div>
  );
};

export default CardCounter;
