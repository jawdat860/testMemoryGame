import { useContext, useState } from "react";
import styless from "./MemoryBlock.module.css";
import gameContext from "./context/gameContext";

const MemoryBlock = (props) => {
 const ctx =useContext(gameContext)
console.log(ctx.click)
  return (
    <div
      className={styless["game-block"]}
      data-technology={props.data}
      id={props.id}
      onClick={()=>ctx.cardClick()}
    >
      <div className={styless.face + " " + styless.front + ctx.click ? styless["is-flipped"] : ""}></div>
      <div className={styless.face + " " + styless.back}></div>
      <img
        src={require(`../Image/${props.data}`)}
        alt=""
        decoding="async"
        style={{ width: 250, height: 200 , }}
      />
    </div>
  );
};
export default MemoryBlock;
