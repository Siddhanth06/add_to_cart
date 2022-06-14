import { green } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { DLT } from "../redux/actions/action";
import "./style.css";

const CardsDetails = () => {

  const dispatch = useDispatch();
  const history = useNavigate();

  const [data,setData]=useState([]);
  console.log(data);

const {id} = useParams();
// console.log(id);

const getData=useSelector((state)=>state.cartreducer.cart);
// console.log(getData);

const compare =()=>{
  let comparedata=getData.filter((e)=>{
    return e.id==id;
  });
  setData(comparedata);
}

useEffect(()=>{
 compare(); 
},[id]);

const dlt=(id)=>{
  dispatch(DLT(id))
  history("/")
}

  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Details Page</h2>
      <section className="container mt-5">
        <div className="iteamsdetails d-flex">
          {
            data.map((element)=>{
              return(
                <>
                <div className="items_img">
            <img
              src={element.imgdata}
              alt=""
              style={{height:"20rem"}}
            />
          </div>
          <div className="details">
            <Table>
              <tr>
                <td>
                  <p><strong>Restaurant</strong> : {element.rname} </p>
                  <p><strong>Price</strong> :₹ {element.price} </p>
                  <p><strong>Dishes</strong> : {element.address}</p>
                  <p><strong>Total Price</strong> :₹ 300 </p>
                  <div className="mt-5 d-flex justify-content-between align-items-center" style={{width:100,cursor:"pointer",backgroundColor:"grey"}}>
                    <span style={{fontSize:24}}>-</span>
                    <span>{element.qnty}</span>
                    <span style={{fontSize:24}}>+</span>
                  </div>
                </td>

                <td>
                  <p><strong>Ratings : </strong><span style={{backgroundColor:"green",color:"white",padding:"2px 5px",borderRadius:"5px"}}> {element.rating} ★</span></p>
                  <p><strong>Order Review :</strong><span>{element.somedata}</span></p>
                  <p onClick={()=>dlt(element.id)}><strong>Remove : </strong><span ><i className="fas fa-trash" style={{color:"red",fontSize:20,cursor:"pointer"}}></i></span></p>
                </td>
              </tr>
            </Table>

          </div>
                </>
              )
            })
          }
          
        </div>
      </section>
    </div>
  );
};

export default CardsDetails;
