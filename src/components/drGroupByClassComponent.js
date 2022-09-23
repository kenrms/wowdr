import React from "react";
import { ListGroup, Accordion } from "react-bootstrap";
import { DrSpellDataComponent } from "./drSpellDataComponent";

export function DrGroupByClassComponent(props) {
  const className = props.wowClass;
  const spellList = props.spellList;
  const eventKey = props.eventKey;

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>{className}</Accordion.Header>
      <Accordion.Body>
        <ListGroup>
          {spellList.map((spellData) => (
            <DrSpellDataComponent spellData={spellData} />
          ))}
        </ListGroup>
      </Accordion.Body>
    </Accordion.Item>
  );
}
