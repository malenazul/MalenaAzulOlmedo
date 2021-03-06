/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Cart.css";
import Card from "../Card/Card";
import Formulario from "../Formulario/Formulario";
import { NavLink } from "react-router-dom";

import { GlobalContext } from "../../context/CartContext";
import { useContext } from "react";

const Cart = () => {
  const { carrito, clear, total } = useContext(GlobalContext);



  return (
    <div className="card col-12" id="listContainer">
      <div
        className="row col-12"
        style={{ float: "center", display: "flex", margin: "1%" }}
      >
        <h3 className="txt1">Carrito</h3>
      </div>
      <>
        {carrito.length > 0 && 
          <div className="row col-12" style={{ float: "center" }}>
            <button
              className="btn btn-outline-info"
              style={{
                width: "20rem",
                margin: "3%",
                display: "flex",
                justifyContent: "space-around",
              }}
              onClick={() => clear()}
            >
              Vaciar Carrito
            </button>
          </div>
       }
      </>

      <div className="row col-12" style={{ float: "center", margin: "1%" }}>
        <div className="row col-12 m-2">
          <>
            {carrito.length > 0 && 
            <div className="row col-12 m-2">
            <div className="row col-8">
               {carrito.map((ciudad, index) => (
      <React.Fragment key={index}>
        <Card
          imagen={ciudad.pictureUrl}
          texto={ciudad.description}
          nombre={ciudad.title}
          precio={ciudad.price}
          id={ciudad.id}
          q={ciudad.quantity}
        ></Card>
      </React.Fragment>))
      }
            </div>
             <div className="col-4">
             <Formulario />
           
             </div>
             </div>
            }
             
             
                {carrito.length < 1 &&
                <div>
                <h3
                  className="txt1"
                  style={{
                    margin: "3%",
                    justifyContent: "space-around",
                  }}
                >
                  No hay elementos en el carrito
                </h3>
                <button
                  className="btn btn-outline-info"
                  style={{
                    width: "20rem",
                    margin: "3%",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <NavLink className="nav-link" to="/">
                    Volver a Home
                  </NavLink>
                </button>
              </div>
               }
             
          
          </>
        </div>
      </div>
     
    </div>
  );
};

export default Cart;
