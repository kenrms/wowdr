import React, { useEffect, useState } from "react";
import { DrGroupByClassComponent } from "./components/drGroupByClassComponent";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { SearchComponent } from "./components/searchComponent";
import { AppHeaderComponent } from "./components/appHeaderComponent";

import "./style/App.css";
import { CONSTANTS } from "./constants";

function App() {
  const [state, setState] = useState({});
  let isShowRightPanel = false;

  const keyByClassReducer = (acc, drData) => {
    const key = drData.class;
    const val = acc[key] ? [...acc[key], drData] : [drData];
    acc[key] = val;

    return acc;
  };

  // TODO move to a service
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
    <>
      <Container fluid className="App">
        <AppHeaderComponent />

        <Container fluid className="appContent">
          <Row className="justify-content-md-center">
            <Col className="contentPanel" lg={6}>
              {/* <SearchComponent isDisabled={true} /> */}

              <Accordion defaultActiveKey="0">
                {state.spellDataByClass &&
                  Object.entries(state.spellDataByClass).length > 0 &&
                  Object.entries(state.spellDataByClass).map(
                    ([className, spellList], index) => (
                      <DrGroupByClassComponent
                        key={className}
                        wowClass={className}
                        spellList={spellList}
                        eventKey={index}
                      />
                    )
                  )}
              </Accordion>
            </Col>

            {/* <Col className="rightPanel" hidden={isShowRightPanel}>
              <Row>
                <button onClick={closeInfoPanel} value="Close" />
              </Row>
              <Row>
                <p>{spell} is a:</p>
                <h3 className="infoDrSchoolLabel">{drSchool}</h3>
              </Row>
              <Row>
                <p>Here are some more {drSchool}s:</p>
                <ul>
                  {allMatchingDrs.map((spellData) => (
                    <li>{spellData.spell}</li>
                  ))}
                </ul>
              </Row>
            </Col> */}
          </Row>
        </Container>

        <div className="push"></div>
      </Container>

      <footer>
        <p>{CONSTANTS.APP_NAME} &copy; 2023</p>
      </footer>
    </>
  );
}

export default App;
