import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchForm = () => {
  return (
    <>
      <InputGroup className="p-4">
        <FormControl placeholder="Add keyword" id="searcher" />
        <Button>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </InputGroup>
      <Form.Group className="p-3" id="formGridCheckbox">
        <Form.Check inline type="checkbox" label="Images" />
        <Form.Check inline type="checkbox" label="Audio" />
      </Form.Group>
    </>
  );
};

export default SearchForm;
