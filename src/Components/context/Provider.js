import { useState } from "react";
import gameContext from "./gameContext";
const Provider = (props) => {
  const [clicks, stetClick] = useState(false);

  const context = {
    wrong: 0,
    cardClick: clickHandler,
    click:clicks,
  };
  function clickHandler(id) {
    stetClick(!clicks )
  }
  return (
    <gameContext.Provider value={context}>
      {props.children}
    </gameContext.Provider>
  );
};
export default Provider;
