import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./SearchPage.module.scss";
import CardCounter from "../../components/card-counter";
import SearchForm from "../../components/search-form";

const SearchPage = () => {
  return (
    <Container className={styles.searchPageWrapper}>
      <Row>
        <h1>NASA Search</h1>
        <SearchForm />
      </Row>
      <Row>
        <CardCounter />
      </Row>
    </Container>
  );
};

export default SearchPage;
