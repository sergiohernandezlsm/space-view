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
    if (id) {
      ctx.getMetaData(id);
      ctx.getAssetImage(id);
    }
  }, []);

  return (
    <Container className={styles.assetPageWrapper}>
      <Row>
        <h1>{ctx.assetMetaData.title}</h1>
        <p>{ctx.assetMetaData.description}</p>
        <Card imageLocation={ctx.assetImage} cardWidth={12} />
      </Row>
    </Container>
  );
};

export default AssetPage;
