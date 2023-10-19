import { createContext } from "react";

const gameContext = createContext({
  wrong: 0,
  cardClick :()=>{},
  click:false,
});
export default gameContext;
