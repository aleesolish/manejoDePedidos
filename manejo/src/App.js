import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import dragula from "react-dragula";
import DragulaStyles from "react-dragula/dist/dragula.min.css";

export default function App() {
  let sal = React.createRef();
  let lcd = React.createRef();
  let proc = React.createRef();
  let succ = React.createRef();
  let fail = React.createRef();

  useEffect(() => {
    let salElement = ReactDOM.findDOMNode(sal.current);
    let lcdElement = ReactDOM.findDOMNode(lcd.current);
    let procElement = ReactDOM.findDOMNode(proc.current);
    let succElement = ReactDOM.findDOMNode(succ.current);
    let failElement = ReactDOM.findDOMNode(fail.current);
    var drake = dragula([salElement, lcdElement, procElement, succElement, failElement], {removeOnSpill: true});
  }, []);

  return (
    <div className="App">
      <h1>Manejador de pedidos</h1>
      <button type="submit">Crear Pedido</button>
      <div className="Container">
      
        <div class="salida"ref={sal}> Salida De Planta
          
        </div>
        <div class="local"ref={lcd}>Local Delivery Center
          
        </div>
        <div  class="proceso"ref={proc}>En proceso de Entrega
          
        </div>
        <div class="exito" ref={succ}> Entrega Completa
          
        </div>
        <div  class="fracaso"ref={fail}>Entrega fallida
          
        </div>
      </div>
    </div>
  );
}

