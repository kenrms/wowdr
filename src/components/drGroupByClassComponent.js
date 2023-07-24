import React from "react";
import { ListGroup, Accordion } from "react-bootstrap";
import { DrSpellDataComponent } from "./drSpellDataComponent";
import { CONSTANTS } from "../constants";

export function DrGroupByClassComponent(props) {
  const className = props.wowClass;
  const spellList = props.spellList;
  const eventKey = props.eventKey;
  const classColor = CONSTANTS.CLASS_COLORS[className];

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header>
        <img
          className="classIcon"
          style={{ backgroundColor: classColor }}
          src={`./img/classIcons/${className}.webp`}
          alt={`${className} class icon`}
        />
        {className}
      </Accordion.Header>
      <Accordion.Body>
        <ListGroup variant="flush">
          {spellList.map((spellData) => (
            <DrSpellDataComponent
              key={`${eventKey}-${className}-${spellData.spell}-${spellData.drSchool}-${spellData.spellId}`}
              spellData={spellData}
            />
          ))}
        </ListGroup>
      </Accordion.Body>
    </Accordion.Item>
  );
}
