import React from "react";
import { Form } from "react-bootstrap";
import { CONSTANTS } from "../constants";

export function SearchComponent(props) {
  const isDisabled = props.isDisabled;

  return (
    <Form>
      <Form.Group className="mb-3" controlId="searchForm.input">
        <Form.Control
          type="text"
          placeholder={CONSTANTS.SEARCH_PLACEHOLDER}
          disabled={isDisabled}
        />
      </Form.Group>
    </Form>
  );
}
