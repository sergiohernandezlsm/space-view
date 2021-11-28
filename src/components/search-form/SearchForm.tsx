import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface Props {
  sendRequest: React.MouseEventHandler<HTMLButtonElement>;
  inputOnChangeHandler: (x: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchForm: React.FC<Props> = (props) => {
  return (
    <>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <InputGroup className="p-4">
            <Form.Control
              size="lg"
              type="text"
              name="keyWord"
              placeholder="Large text"
              onChange={props.inputOnChangeHandler}
            />
            <Button type="button" onClick={props.sendRequest}>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </InputGroup>
        </Form.Group>
        <Form.Group className="p-3" id="formGridCheckbox">
          <Form.Check
            inline
            type="checkbox"
            name="image"
            label="Images"
            onChange={props.inputOnChangeHandler}
          />
          <Form.Check
            inline
            type="checkbox"
            name="audio"
            label="Audio"
            onChange={props.inputOnChangeHandler}
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default SearchForm;
