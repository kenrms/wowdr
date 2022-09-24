import React from "react";
import { Col, Row } from "react-bootstrap";
import { CONSTANTS } from "../constants";

import "../style/App.css"

export function AppHeaderComponent() {
  return (
    <Row className="appHeader">
      <Col lg={12}>
        <h3>{CONSTANTS.APP_NAME}</h3>
      </Col>
    </Row>
  );
}
