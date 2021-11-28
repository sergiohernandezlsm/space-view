import { useContext } from "react";
import AssetsContext from "../../store/assets-context";
import Card from "../card";
import styles from "./CardCounter.module.scss";

const CardCounter = () => {
  const ctx = useContext(AssetsContext);
  return (
    <div className={styles.counterWrapper}>
      {ctx.assets.map((x: any) => (
        <Card
          nasaId={x.nasaId}
          imageLocation={x.image}
          cardWidth={3}
          key={x.nasaId}
          collection={x.collection}
          mediaType={x.mediaType}
        />
      ))}
    </div>
  );
};

export default CardCounter;
