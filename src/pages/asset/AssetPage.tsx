import { useContext, useEffect } from "react";
import AssetsContext from "../../store/assets-context";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "../../components/card";
import AudioCard from "../../components/audioCard";
import useGetAssetMetaData from "../../hook/useGetAssetMetaData";
import styles from "./AssetPage.module.scss";

export interface ParamTypes {
  id: string;
}

const AssetPage = () => {
  const { metaData, getMetaData } = useGetAssetMetaData();
  const ctx = useContext(AssetsContext);
  const { id } = useParams<ParamTypes>();

  useEffect(() => {
    if (ctx.assetData.mediaType) {
      getMetaData(id, ctx.assetData.mediaType);
    }
  }, [ctx.assetData.mediaType, getMetaData, id]);

  const card =
    ctx.assetData.mediaType === "image" ? (
      <Card imageLocation={ctx.assetData.href} />
    ) : (
      <AudioCard href={ctx.assetData.href} />
    );

  return (
    <Container className={styles.assetPageWrapper}>
      <Row>
        <h1>{metaData.title}</h1>
        <p>{metaData.description}</p>
        {card}
      </Row>
    </Container>
  );
};

export default AssetPage;
