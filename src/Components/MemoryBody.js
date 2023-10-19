import { useContext } from "react";
import DataImage from "./Data/DataImage";
import MemoryBlock from "./MemoryBlock";
import styless from "./MemoryBody.module.css";
import gameContext from "./context/gameContext";

const MemoryBody = () => {
  

  const Block = DataImage.map((ex) => (
    <MemoryBlock key={ex.id} src={ex.src} data={ex.src} id={ex.id}   />
  ));
  return <div className={styless["memory-game-blocks"]} >{Block}</div>;
};
export default MemoryBody;
