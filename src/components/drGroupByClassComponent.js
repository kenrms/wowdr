import React from "react";
import { DrSpellDataComponent } from "./drSpellDataComponent";

export function DrGroupByClassComponent(props) {
  const className = props.wowClass;
  const spellList = props.spellList;

  return (
    <div className="drGroup">
      <header>{className}</header>
      <ul className="drSpellList">
        {spellList.map((spellData) => (
          <DrSpellDataComponent spellData={spellData} />
        ))}
      </ul>
    </div>
  );
}
