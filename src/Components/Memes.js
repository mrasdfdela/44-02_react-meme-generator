import React from "react";
import Meme from "./Meme";

function Memes() {
  const dummyArr = [1,2,3];
  return (
    <>
      <p>Hello, too</p>
      { 
        dummyArr.map(el=>{
          return (
            <>
              <Meme num={el}/>
            </>
          )
        })
      }
    </>
  );
}

export default Memes;
