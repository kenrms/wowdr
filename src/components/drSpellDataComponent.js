import React from "react";
import { ListGroup } from "react-bootstrap";
import { SpellIconComponent } from "./spellIconComponent";

import "../style/drSpellDataComponent.css";

let getWowHeadLink = (spellData) => {
  return (
    <>
      {spellData.spellId && (
        <a
          data-wh-icon-size="large"
          data-wh-rename-link="false"
          data-wh-icon-added="true"
          href={`https://www.wowhead.com/spell=${spellData.spellId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SpellIconComponent spellId={spellData.spellId} />

          {spellData.spell}
        </a>
      )}

      {!spellData.spellId && spellData.spell}
    </>
  );
};

let renderSpellInfo = (spellData, onClick) => {
  return (
    <>
      {getWowHeadLink(spellData)}

      <span className={`dataLabel school ${spellData.drSchool}`}>
        {spellData.drSchool}
      </span>

      <button
        className={`dataLabel source ${spellData.source}`}
        onClick={onClick}
      >
        {spellData.source}
      </button>
    </>
  );
};

export function DrSpellDataComponent(props) {
  const spellData = props.spellData;

  return (
    <ListGroup.Item action className="spellDataGroup">
      {renderSpellInfo(spellData)}
    </ListGroup.Item>
  );
}
