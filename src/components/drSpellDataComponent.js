import React from "react";

export function DrSpellDataComponent(props) {
  const spellData = props.spellData;

  return <div className="spellDataGroup">{spellData.spell}</div>;
}