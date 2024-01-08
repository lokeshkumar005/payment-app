import * as React from "react"; 
import { useRef } from 'react';
import Box from "@mui/material/Box";
import { Typography, Paper, Grid } from '@mui/material';
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import { Stack } from "@mui/system"; 
import { useFormik } from "formik";
import * as Yup from "yup";   
 import {
  Container,  
  } from "@mui/material";

  const donorInfo = {
    name: "AMIT SAINI",
    panAadhaar: "665334016681",
    mobile: "9829545897",
    address: "NEAR SARAWAGI GUEST HOUSE, Jaipur, Rajasthan - 333031",
    amount: "Rupees: Three Thousand Nine Hundred Only",
    mode: "UPI",
    instrumentDate: "Instrument Date: 17/11/2023",
    purpose: "Towards voluntary donation.",
    Aadhar:"898989898989", 
    res:"rfc22w84700",
    email:"lks@gmail.com"
  };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "1000px",
  // bgcolor: "background.paper",
  border: "1px solid #45474B",
  borderRadius: "5px",
  // boxShadow: 24,
  p: 3,
};

const underline = {
  borderBottom: "dashed 2px gray",
  textDecoration: "none",
  padding:"0 30px", 
}

export function BasicModal1(props) { 
  const printContentRef = useRef(null);
  const { open, handleClose, onSave } = props;

  const handlePrint = () => {
    const contentToBePrinted = printContentRef.current;
  
    if (contentToBePrinted) {
      const contentHTML = contentToBePrinted.innerHTML;
      const websiteContent = document.body.innerHTML;
  
      document.body.innerHTML = contentHTML;
      window.print();
      document.body.innerHTML = websiteContent;
    } else {
      console.error("Element not found");
    }
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/* <Box component="form" sx={style} autoComplete="off" onSubmit={formik.handleSubmit}> */}
         
      <Container maxWidth="md" sx={style} autoComplete="off" >
      <Paper elevation={5} style={{ padding: '15px' }} className='printOut' ref={printContentRef}>
        <div style={{border:"5px double black", padding:"20px"}}>
        <Stack direction={{ xs: "column", sm: "row" }} sx={{justifyContent:"center"}}>
         <Typography variant='h6' sx={{backgroundColor:"red", borderRadius:"50px", padding:"0 20px", fontWeight:"bold"}}>Receipt</Typography> 
        </Stack>
      <Stack direction={{ xs: "column", sm: "row" }} sx={{ justifyContent: 'space-between' }}>
          
          <div >
          
        <Typography sx={{ color:"red" , fontSize:"20px"}} variant="subtitle1" >
          THE LIFE ETERNAL TRUST
        </Typography>
        <Typography sx={{ fontSize:"12px" }} variant="subtitle1" >
          C-17, Qutub Institutional Area,
        </Typography>
        <Typography sx={{ fontSize:"12px" }} variant="body1" >
          New Delhi - 110016
        </Typography>
        <Typography sx={{ fontSize:"12px" }} variant="body1" >
          Mob : 7065088873 Ph : 011-26866801
        </Typography>
        <Typography sx={{ fontSize:"12px" }} variant="body1" >
          Email : contributions@thelet.org
        </Typography>
          </div>
        <div>
          <Typography variant="body1" >
            Invoice #12345
          </Typography>
          <Typography sx={{ fontSize:"12px" }} variant="body1" >
            Date: 2023-12-18
          </Typography>
        </div>
        </Stack>
        
 
      <br />
<div style={{fontStyle:"italic"}}>
      <Typography variant="body1"  >
        Received with thanks from Mr./Ms./M/s : <span style={underline}>{donorInfo.name}</span> 
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} sx={{justifyContent:"space-between"}}>
        <Typography variant="body1">
          PAN / Aadhaar : <span style={underline}>{donorInfo.panAadhaar}</span>
        </Typography>
        <Typography variant="body1">
          Mobile : <span style={underline}>{donorInfo.mobile}</span>
        </Typography>
        <Typography variant="body1">
          Email : <span style={underline}>{donorInfo.email}</span>
        </Typography>
      </Stack>
      
      <Typography variant="body1">
        Address : <span style={underline}>{donorInfo.address}</span> 
      </Typography> 

      <Typography variant="body1">
       a sum of Rupees : <span style={underline}>{donorInfo.amount}</span>
      </Typography>

      <Stack>
        <Typography variant="body1">
          Payment Mode : <span style={underline}>{donorInfo.mode}</span>
        </Typography>
        <Typography variant="body1">
          Res Number : <span style={underline}>{donorInfo.res}</span>
        </Typography>
      </Stack>
      </div>
        <Typography variant="h6" style={{ margin: '20px 0' }}>
          Amount: $35.00
        </Typography> 


      <Stack direction={{ xs: "column", sm: "row" }} sx={{ justifyContent: 'space-between' }}>
           
          
        <Typography variant="subtitle1" gutterBottom sx={{ width: '40%', fontSize:"12px" }}>
        Exempted u/s 80G Vide Letter Issued by
        Director of Income Tax (Exemptions), Delhi-110092
        Order No. AAATT0493JF20214
        Renewed for AY 2022-23 to AY 2026-27
        Trust PAN No. AAATT0493J
        * Subject to Encashment of Cheque
        * Cash donation above rupees 2000 not entitled for tax 
        benefit       
         </Typography>
          
        <Typography variant="body1" gutterBottom sx={{ width: '40%',fontSize:"12px"  }}>
        For The Life Eternal Trust
        <br />
        "This is system generated Receipt, it does not require signature"
        </Typography> 
            </Stack>

        </div>
      </Paper>
      <Stack direction={{ xs: "column", sm: "row" }} sx={{ justifyContent: 'center' }}>
            <Fab type="submit" variant="extended" size="small" style={{ padding: "0 15px",marginTop: '20px' }} onClick={handlePrint}>
              Print
            </Fab>
          </Stack>
        {/* </Box> */}
        </Container>
        
      </Modal> 
    </div>
  );
} 