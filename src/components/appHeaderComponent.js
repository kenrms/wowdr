import React from "react";
import { Col, Row } from "react-bootstrap";
import CONSTANTS from "../constants";

export function AppHeaderComponent() {
  return (
    <Row className="appHeader">
      <Col>
        <h3>{CONSTANTS.APP_NAME}</h3>
      </Col>
    </Row>
  );
}