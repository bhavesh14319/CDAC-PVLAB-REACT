import React, { useEffect } from "react";
import "../css/Menu.css";

function Menu() {

  return (
    <div >
      <div id="webapp_cover">
        <div id="menu_button">
          <input type="checkbox" id="menu_checkbox" />
          <label htmlFor="menu_checkbox" id="menu_label">
            <div id="menu_text_bar"></div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Menu;
