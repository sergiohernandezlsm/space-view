import { useContext, useEffect } from "react";
import AssetsContext from "../../store/assets-context";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "../../components/card";
import styles from "./AssetPage.module.scss";

export interface ParamTypes {
  id: string;
}

const AssetPage = () => {
  const ctx = useContext(AssetsContext);
  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    if (ctx.assetData.mediaType === "image") {
      ctx.getMetaData(id);
    }
  }, [ctx.assetData.mediaType]);

  return (
    <Container className={styles.assetPageWrapper}>
      <Row>
        <h1>{ctx.assetMetaData.title}</h1>
        <p>{ctx.assetMetaData.description}</p>
        <Card
          imageLocation={ctx.assetData.href}
          cardWidth={12}
          mediaType={ctx.assetData.mediaType}
        />
      </Row>
    </Container>
  );
};

export default AssetPage;
