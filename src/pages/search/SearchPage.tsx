import { useContext } from "react";
import AssetsContext from "../../store/assets-context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./SearchPage.module.scss";
import CardCounter from "../../components/card-counter";
import SearchForm from "../../components/search-form";

const SearchPage = () => {
  const ctx = useContext(AssetsContext);
  return (
    <Container className={styles.searchPageWrapper}>
      <Row>
        <h1>NASA Search</h1>
        <SearchForm
          inputOnChangeHandler={ctx.inputOnChangeHandler}
          sendRequest={ctx.sendRequest}
        />
      </Row>
      {[ctx.assets].length && (
        <Row>
          <CardCounter />
        </Row>
      )}
    </Container>
  );
};

export default SearchPage;
