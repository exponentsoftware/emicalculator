import React, { useState, useContext } from "react";
import UserInput from "./UserInput";
import { EmiContext } from "./../Context";

function InputComponent() {
  // for seting the readonly property of textbox
  const [isReadOnly, setIsReadOnly] = useState(false);
  // eslint-disable-next-line
  const [output, setOutput] = useContext(EmiContext);

  const [emi, setEmi] = useState({
    principle: "",
    months: "",
    interestRate: "",
  });

  // For the calculation of the emi
  function EMICalc({ principle, months, interestRate }) {
    const r = interestRate / 12 / 100;
    const R1 = Math.pow(1 + r, months);
    const R2 = R1 - 1;
    const loanEMI = Math.floor(principle * r * (R1 / R2)); //loan emi

    const tenure = Math.floor(loanEMI * 48); //total payable

    const interestPayable = tenure - principle; //interest payable

    setOutput([loanEMI, tenure, interestPayable]);
  }

  // getting the values from the user
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmi({ ...emi, [name]: value });
  };

  // getting the values
  const handleSubmit = (e) => {
    e.preventDefault();
    const { principle, months, interestRate } = emi;

    // Validating the field have value
    if (principle === "" || months === "" || interestRate === "") {
      alert("invalid Input");
    } else {
      EMICalc({ principle, months, interestRate });
    }
    setIsReadOnly(true);
  };

  // handling the reseting of all the input fields
  const handleReset = (e) => {
    e.preventDefault();
    setIsReadOnly(false);
  };

  return (
    <UserInput
      handleChange={handleChange}
      isReadOnly={isReadOnly}
      handleSubmit={handleSubmit}
      handleReset={handleReset}
    />
  );
}

export default InputComponent;
