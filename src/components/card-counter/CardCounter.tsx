import { useContext } from "react";
import AssetsContext from "../../store/assets-context";
import Col from "react-bootstrap/Col";
import Card from "../card";
import styles from "./CardCounter.module.scss";
import LinkWrapper from "../link-wrapper";

const CardCounter = () => {
  const ctx = useContext(AssetsContext);
  return (
    <div className={styles.counterWrapper}>
      {ctx.assets.map((x: any) => (
        <Col
          key={x.nasaId}
          sm={3}
          onClick={(): void => ctx.getAssetData(x.collection, x.mediaType)}
        >
          <LinkWrapper nasaId={x.nasaId}>
            <Card imageLocation={x.image} />
          </LinkWrapper>
        </Col>
      ))}
    </div>
  );
};

export default CardCounter;
