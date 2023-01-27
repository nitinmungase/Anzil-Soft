import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Assignment1 = () => {
  const [number1, setNumber1] = useState([]);
  const [number2, setNumber2] = useState([]);
  const [result, setResult] = useState(false);
  const [operation, setOperation] = useState('');

  useEffect(() => {

  }, []);

  function handlenumber1(e) { //function for onchange of value number1
    setNumber1(e.target.value);
  }
  function handlenumber2(e) { //function for onchange of value number2
    setNumber2(e.target.value);
  }
  function add(e) {  //Function for Addition
    setOperation(e.target.value) // for result span indication
    setResult(parseFloat(number1) + parseFloat(number2)); // add number 1 & number 2
  }
  function subtract(e) {  //Function for Subtraction
    setOperation(e.target.value)
    setResult(parseFloat(number1) - parseFloat(number2));
  }
  function multiplication(e) { //Function for Multiplication
    setOperation(e.target.value)
    setResult(parseFloat(number1) * parseFloat(number2));
  }
  function division(e) { //Function for Division
    setOperation(e.target.value)
    setResult(parseFloat(number1) / parseFloat(number2));
  }

  return (
    <>
    <Navbar/>
    <p></p>
    <div className="d-flex justify-content-center">
      <form className="m-5 p-5">
        <div className="card card-container" >
          <div className="mb-3">
            <label className="form-label">Number 1</label>
            <input type="number" value={number1} className="form-control" onChange={handlenumber1} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Number 2</label>
            <input type="number" value={number2} className="form-control" onChange={handlenumber2} required />
          </div>
          <div className="mb-3">
            <button type="button" value="Addition" className="btn btn-primary m-3 p-3" onClick={add}>Add</button>
            <button type="button" value="Subtraction" className="btn btn-primary m-3 p-3" onClick={subtract}>Subtract</button>
            <button type="button" value="Multiplication" className="btn btn-primary m-3 p-3" onClick={multiplication}>Multiply</button>
            <button type="button" value="Division" className="btn btn-primary m-3 p-3" onClick={division}>Divide</button>
          </div>
          <div className="mb-3">
            <label className="form-label">Result for {operation}</label>
            <br />
            <button type="button" class="btn btn-success"><span>{result}</span></button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};
export default Assignment1;