import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import { Stack } from "@mui/system";
import { useFormik } from "formik";
import * as Yup from "yup";
import { MenuItem } from "@mui/material";
import apiService from "../../apiService/service";
import { useState } from 'react';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "1px solid #45474B",
  borderRadius: "5px",
  boxShadow: 24,
  p: 5,
};

export function BasicModal(props) {

  const getRandomId = (min = 0, max = 50000) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return "SY" + num.toString().padStart(6, "0")
  };
  const SY = getRandomId();
  console.log('num', SY)

  const { open, handleClose } = props;
  const today = new Date();


  const [userData, setUserData] = useState(
    {
      receiptNumber: "",
      name: "",
      email: "",
      mobile: "",
      aadhar: "",
      address: "",
      paymentMode: "",
      amount: "",
    }
  )

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ results: userData })
      ;
    const test = await apiService.addPayment(userData);
    console.log({ test });

    // setSimulationCreate(""); 

  }

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style} autoComplete="off" onSubmit={handleSubmit}>
          <Typography sx={{ flex: "1 1 100%" }} variant="h5" component="div">
            Add Payment
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }} mt={2}>
            <TextField
              onChange={handleChange}
              value={userData.receiptNumber}
              name="receiptNumber"
              id="standard-basic"
              label="Receipt Number"
              variant="standard"
            />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }} mt={2}>

            <TextField
              onChange={handleChange}
              value={userData.name}
              name="name"
              id="standard-basic"
              label="Name"
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              value={userData.email}
              name="email"
              id="standard-basic"
              label="Email Address"
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              value={userData.mobile}
              name="mobile"
              id="standard-basic"
              label="Mobile Number"
              variant="standard"
            />

          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }} mt={2}>
            <TextField
              onChange={handleChange}
              value={userData.aadhar}
              name="aadhar"
              id="standard-basic"
              label="PAN / Aadhar Number"
              variant="standard"
            />

            <TextField
              onChange={handleChange}
              value={userData.address}
              name="address"
              id="standard-basic"
              label="Address"
              variant="standard"
            />
            <TextField
              onChange={handleChange}
              value={userData.paymentMode}
              name="paymentMode"
              id="standard-basic"
              label="Payment Mode"
              variant="standard"
            />

          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }} mt={2}>
            <TextField
              onChange={handleChange}
              value={userData.amount}
              name="amount"
              id="standard-basic"
              label="Amount"
              variant="standard"
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} mt={3}>
            <Fab type="submit" variant="extended" size="small" style={{ padding: "0 15px" }}>
              Submit
            </Fab>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
} 