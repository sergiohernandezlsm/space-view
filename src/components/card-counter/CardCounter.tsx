import { useContext } from "react";
import AssetsContext from "../../store/assets-context";
import Card from "../card";
import styles from "./CardCounter.module.scss";
import LinkWrapper from "../link-wrapper";

const CardCounter = () => {
  const ctx = useContext(AssetsContext);
  return (
    <div className={styles.counterWrapper}>
      {ctx.assets.map((x: any) => (
        <LinkWrapper nasaId={x.nasaId} key={x.nasaId}>
          <Card imageLocation={x.image} cardWidth={3} />
        </LinkWrapper>
      ))}
    </div>
  );
};

export default CardCounter;
