import { Fragment, useContext, useState } from "react"
import styless from "./Header.module.css"
import gameContext from "./context/gameContext"
const Header =()=>{
  const [name , setName] = useState("")
  const [click ,setClick] = useState(false)
  const ctx = useContext(gameContext);
  const nameHandler =()=>{
    const name = prompt("What your name ?")
    if(name === null || name === ""){
      setName("Unkown")
    }else{
      setName(name)
    }
    setClick(true)
  }
    return(
        <Fragment>
        <div className={!click ? styless["control-buttons"] : ""}>
        {!click && <span onClick={nameHandler}>Start Game</span>}
      </div>
      <div className={styless["info-container"]}>
        <div className={styless["name"]}>
          Hello: <span>{name}</span>
        </div>
        <div className={styless["tries"]}>
          Wrong Tries: <span>{ctx.wrong}</span>
        </div>
        </div>
        </Fragment>
    )
}
export default Header