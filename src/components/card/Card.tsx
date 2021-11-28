import { useContext } from "react";
import AssetsContext from "../../store/assets-context";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styles from "./Card.module.scss";
import LinkWrapper from "../link-wrapper";
export interface Props {
  cardWidth: number;
  nasaId?: string;
  imageLocation: string;
  collection?: any;
  mediaType?: string;
}

const CardComponent: React.FC<Props> = (props) => {
  const ctx = useContext(AssetsContext);

  let card;
  if (!ctx.assetData.mediaType) {
    card = (
      <LinkWrapper nasaId={props.nasaId}>
        <Card.Img variant="top" src={props.imageLocation} />
      </LinkWrapper>
    );
  } else {
    if (props.mediaType === "audio") {
      card = (
        <audio controls>
          <source src={ctx.assetData.href} type="audio/ogg" />
          <source src={ctx.assetData.href} type="audio/mpeg" />
        </audio>
      );
    } else {
      card = <Card.Img variant="top" src={props.imageLocation} />;
    }
  }

  return (
    <Col sm={props.cardWidth}>
      <Card
        onClick={(): void =>
          ctx.getAssetData(props.collection, props.mediaType)
        }
        className={styles.cardWrapper}
      >
        {card}
      </Card>
    </Col>
  );
};

export default CardComponent;
