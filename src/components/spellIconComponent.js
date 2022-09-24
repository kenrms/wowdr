import React from "react";

import "../style/spellIconComponent.css"


export function SpellIconComponent(props) {
  const spellId = props.spellId;

  return (
    <span class="icon">
      <img
        src={`https://arenamaster.io/api/v1/spells/${spellId}`}
        alt="Item Icon"
      />
      <span class="frame"></span>
    </span>
  );
};
