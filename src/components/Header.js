import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Badge from "@mui/material/Badge";
import Nav from "react-bootstrap/Nav";
import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/esm/Table";
import { DLT } from "../redux/actions/action";

const Header = () => {

 const [price,setPrice]=useState(0);
 console.log(price);

const getData=useSelector((state)=>state.cartreducer.cart);
console.log(getData);

const dispatch=useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt =(id)=>{
    dispatch(DLT(id))
  }

  const total =()=>{
    let price=0;
    getData.map((ele,k)=>{
      price=ele.price+price;
    })
    setPrice(price);
    };
   

  useEffect(()=>{
    total()
  },[total])
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>

          <Badge
            badgeContent={getData.length}
            color="primary"
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <i
              className="fa-solid fa-cart-shopping text-light"
              style={{ cursor: "pointer", fontSize: 25 }}
            ></i>
          </Badge>

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            

            {

              getData.length ? 
              <div className="card_details" style={{width:"24rem",padding:10}}>
                  <Table>
                    <thead>
                      <tr>
                        <th>Photo</th>
                        <th>Restaurant</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        getData.map((e)=>{
                          return(
                            <>
                            <tr>
                              <td>
                                <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                                <img src={e.imgdata} style={{width:"8rem",height:"7rem"}}/>
                                </NavLink>
                                  
                              </td>
                              <td>
                                <p>{e.rname}</p>
                                <p>Price : ₹ {e.price}</p>
                                <p>Quantity : {e.qnty}</p>
                                <p style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                  <i className="fas fa-trash smalltrash" ></i>
                                </p>
                              </td>
                              <td className="mt-5 "style={{color:"red",fontSize:20,cursor:"pointer"}} onClick={()=>dlt(e.id)}>
                                <i className="fas fa-trash largetrash"></i>
                              </td>
                            </tr>
                            
                            </>
                            
                          )
                        })
                      }
                      <p className="text-center">Total :₹ {price}</p>
                    </tbody>
                  </Table>
              </div>:
              <div
              className="card_details d-flex align-items-center justify-content-center"
              style={{ width: "20rem", padding: 10, position: "relative" }}
            >
              <i
              onClick={handleClose}
                className="fas fa-close smallclose"
                style={{
                  position: "absolute",
                  right: 20,
                  top: 4,
                  cursor: "pointer",
                  fontSize: 23,
                }}
              >

              </i>
              <p style={{ fontSize: 22 }}>Your cart is empty</p>
              <img
                src="./cart.gif"
                alt="img not found"
                className="emptycart_img"
                style={{ width: "5rem", padding: 10 }}
              />
            </div>
            }
            
          </Menu>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
