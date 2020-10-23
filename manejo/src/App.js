import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Dragula from "react-dragula";
import DragulaStyles from "react-dragula/dist/dragula.min.css";

export default function App() {
  let left = React.createRef();
  let right = React.createRef();

  useEffect(() => {
    let lElement = ReactDOM.findDOMNode(left.current);
    let rElement = ReactDOM.findDOMNode(right.current);
    Dragula([lElement, rElement], {});
  }, []);

  return (
    <div className="App">
      <h1>Manejador de pedidos</h1>
      <div className="Container">
        <div class="salida"ref={left}>
          <div>Swap me around</div>
          <div>Swap her around</div>
          <div>Swap him around</div>
          <div>Swap them around</div>
        </div>
        <div class="local"ref={right}>
          <div>Swap us around</div>
          <div>Swap things around</div>
          <div>Swap everything around</div>
        </div>
        <div  class="proceso"ref={left}>
          <div>Swap me around</div>
          <div>Swap her around</div>
          <div>Swap him around</div>
          <div>Swap them around</div>
        </div>
        <div class="exito" ref={left}>
          <div>Swap me around</div>
          <div>Swap her around</div>
          <div>Swap him around</div>
          <div>Swap them around</div>
        </div>
        <div  class="fracaso"ref={left}>
          <div>Swap me around</div>
          <div>Swap her around</div>
          <div>Swap him around</div>
          <div>Swap them around</div>
        </div>
      </div>
    </div>
  );
}

