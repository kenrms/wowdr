import React, { useEffect, useState } from "react";
import { DrGroupByClassComponent } from "./components/drGroupByClassComponent";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import Form from "react-bootstrap/Form";


function App() {
  const [state, setState] = useState({});
  const headerText = "WoW DR";

  const keyByClassReducer = (acc, drData) => {
    const key = drData.class;
    const val = acc[key] ? [...acc[key], drData] : [drData];
    acc[key] = val;

    return acc;
  };

  const fetchJsonDataAndReduce = () => {
    fetch("./data/wowDiminishingReturns.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        let byClassData = json.reduce(keyByClassReducer, {});

        let newState = {
          spellDataByClass: byClassData,
        };

        setState(newState);
      });
  };

  useEffect(() => {
    fetchJsonDataAndReduce();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <h3>{headerText}</h3>
        </Col>
      </Row>

      <Row>
        <Col className="leftPanel">
          {/* Search filter */}
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="i.e. Kidney Shot"
                disabled
              />
            </Form.Group>
          </Form>

          <Accordion defaultActiveKey="0">
            {state.spellDataByClass &&
              Object.entries(state.spellDataByClass).length > 0 &&
              Object.entries(state.spellDataByClass).map(
                ([className, spellList], index) => (
                  <>
                    <DrGroupByClassComponent
                      wowClass={className}
                      spellList={spellList}
                      eventKey={index}
                    />
                  </>
                )
              )}
          </Accordion>
        </Col>

        <Col className="rightPanel">{/* TODO */}</Col>
      </Row>
    </Container>
  );
}

export default App;
