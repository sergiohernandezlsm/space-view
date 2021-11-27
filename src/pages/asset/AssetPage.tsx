import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "../../components/card";
import styles from "./AssetPage.module.scss";

const AssetPage = () => {
  return (
    <Container className={styles.assetPageWrapper}>
      <Row>
        <h1>Asset title</h1>
        <p>descrtiption</p>
        <Card cardWidth={12} />
      </Row>
    </Container>
  );
};

export default AssetPage;
