import React, { useEffect, useState } from "react";
import { DrGroupByClassComponent } from "./components/drGroupByClassComponent";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { SearchComponent } from "./components/searchComponent";
import { AppHeaderComponent } from "./components/appHeaderComponent";

import "./style/App.css";

function App() {
  const [state, setState] = useState({});

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
    <Container fluid className="App">
      <AppHeaderComponent />

      <Container className="appContent">
        <Row>
          <Col className="contentPanel">
            {/* <SearchComponent isDisabled={true} /> */}

            <Accordion defaultActiveKey="0">
              {state.spellDataByClass &&
                Object.entries(state.spellDataByClass).length > 0 &&
                Object.entries(
                  state.spellDataByClass
                ).map(([className, spellList], index) => (
                  <DrGroupByClassComponent
                    key={className}
                    wowClass={className}
                    spellList={spellList}
                    eventKey={index}
                  />
                ))}
            </Accordion>
          </Col>

          {/* <Col className="rightPanel">TODO</Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default App;
