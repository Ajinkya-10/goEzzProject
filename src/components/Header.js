import React,{useState} from "react";

import { Button,Modal,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "../style/header.module.css";

export default function Header() {

const [show, popup]= useState(false);
const modelOpen=()=> popup(true);
const modelClose=()=> popup(false);
  return (
    <header className={style.Header}>
      <div className={style.customContainer}>
        <nav class="navbar navbar-expand-md navbar-light p-0">
          <a href="index.html" className={`navbar-brand ${style.navbarBrand}`}>
            <img className="logo" src="/images/mainLogo.svg" alt="click here" />
          </a>
          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav links align-items-center">
              <li class="nav-item">
                <a href="#" className={`nav-link ${style.navLink}`}>
                  <img src="/images/home_icon.svg" alt="" />
                </a>
              </li>
              <li class="nav-item">
                <a href="#" className={`nav-link ${style.navLink}`}>
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="#" className={`nav-link ${style.navLink}`}>
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a href="#" className={`nav-link ${style.navLink}`}>
                  Why Us
                </a>
              </li>
              <li class="nav-item">
                <a href="#" className={`nav-link ${style.navLink}`}>
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className={`navbar-nav ml-auto align-items-center`}>
              <li class="nav-item">
                <a
                  href="#"
                  className={`nav-link ${style.navLink}`}
                  style={{ fontWeight: "500", fontSize: "1.1em" }}
                >
                  Log In
                </a>
              </li>
              <li className={`nav-item ${style.startedBtn}`}>
                <a href="#" className={`nav-link ${style.navLink}`} onClick={modelOpen}>
                  Get Started
                </a>
              </li>
              <li class="nav-item">
                <a className={`nav-link ${style.navLink}`} href="#">
                  <i
                    className={`fas fa-question-circle ${style.questionIcon}`}
                  ></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Modal onHide={modelClose} show={show}>

     <Modal.Body>
     <div>
      <center>
      <a href="index.html" className={`navbar-brand ${style.navbarBrand}`}>
            <img className="logo" src="/images/mainLogo.svg" alt="click here" />
          </a>
          
          </center>
          <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div> 
      
     </Modal.Body>
      </Modal>

      
    </header>
    
  );
}
