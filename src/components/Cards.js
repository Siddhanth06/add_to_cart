import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardsData from "./CardsData";
import { useDispatch } from "react-redux";
import {ADD} from "../redux/actions/action";

const Cards = () => {
  const [data, setData] = useState(CardsData);
  // console.log(CardsData);

  const dispatch=useDispatch();
const send = (e)=>{
  // console.log(e);
  dispatch(ADD(e));
}

  return (
    <div className="container">
      <h2 className="text-center mt-1">Add to cart Projects</h2>
      <div className="row d-flex align-items-center justify-content-center">
        {data.map((element, id) => {
          return (
            <>
              <Card style={{ width: "22rem",border:"none" }} className="mx-2 mt-4 card_style">
                <Card.Img variant="top" className="mt-3" src={element.imgdata} style={{height:"16rem "}} />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                   Price: ₹ {element.price}
                  </Card.Text>
                  <div className=" btn_div d-flex justify-content-center">
                  <Button variant="primary" className="col-lg-12" onClick={()=>send(element)}>Add to Cart</Button>
                  </div>
                  
                </Card.Body>
              </Card>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
