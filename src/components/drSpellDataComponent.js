import React from "react";
import { ListGroup } from "react-bootstrap";

export function DrSpellDataComponent(props) {
  const spellData = props.spellData;

  return (
    <ListGroup.Item className="spellDataGroup">
      {spellData.spell}

      <span className={`drSchoolLabel ${spellData.drSchool}`}>
        {spellData.drSchool}
      </span>

      {/* {spellData.note && <Alert variant="secondary">{spellData.note}</Alert>} */}
    </ListGroup.Item>
  );
}