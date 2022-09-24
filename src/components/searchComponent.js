import React from "react";
import { Form } from "react-bootstrap";

export function SearchComponent(props) {
  const isDisabled = props.isDisabled;

  return (
    <Form>
      <Form.Group className="mb-3" controlId="searchForm.input">
        <Form.Control
          type="text"
          placeholder="i.e. Kidney Shot"
          disabled={isDisabled}
        />
      </Form.Group>
    </Form>
  );
}
