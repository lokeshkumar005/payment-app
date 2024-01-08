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
    const num =  Math.floor(Math.random() * (max - min + 1)) + min;
    return "SY" + num.toString().padStart(6, "0")
  }; 
  const SY = getRandomId();
  console.log('num', SY)

  const { open, handleClose, onSave } = props;
  const today = new Date();
  const formik = useFormik({
    initialValues: {
      date: today,
      receiptNumber: SY,
      name: "",
      email: "",
      aadharNumber: "",
      mobileNumber: "",
      address: "",
      paymentMode: "",
      Amount: "",
    },
    validationSchema: Yup.object({
      // vpEmail: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
      // vpName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
      // lpPhone: Yup.string().matches(/^[0-9]+$/, "Must be a valid number").max(15, "Too Long!").required("Required"),
    }),
    onSubmit: async () => {
      const formattedDate = format(formik.values.date, 'yyyy-MM-dd');
      const vpid = window.sessionStorage.getItem('vp_id');
      const username = window.sessionStorage.getItem('username');
      const requestData = {LP_NAME: formik.values.vpName, LP_EMAIL: formik.values.vpEmail, LP_SOCIAL_MEDIA: formik.values.socialMedia,
        LP_LEAD_ACCEPTED: "Yes", LP_CONTACT: formik.values.lpPhone, Registration_date: formattedDate, VP_ID: vpid, 
        ONBOARD_STATUS: formik.values.onboarded, COMMENTS: formik.values.comments};
      console.log(requestData);
      try {
            console.log('xyz', 'data')        
         
      } catch (error) {
        console.error('Error fetching data:', error); 
      }  
    },
  });

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component="form" sx={style} autoComplete="off" onSubmit={formik.handleSubmit}>
          <Typography sx={{ flex: "1 1 100%" }} variant="h5" component="div">
            Add Payment
          </Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }} mt={2}>
             <TextField
                onChange={formik.handleChange}
                value={formik.values.receiptNumber}
                onBlur={formik.handleBlur}
                error={!!(formik.touched.vpName && formik.errors.vpName)}
                helperText={formik.touched.vpName && formik.errors.vpName}
                name="receiptNumber"
                id="standard-basic"
                label="Receipt Number"
                variant="standard"
              />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }} mt={2}>
           
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.vpEmail}
              error={!!(formik.touched.vpEmail && formik.errors.vpEmail)}
              helperText={formik.touched.vpEmail && formik.errors.vpEmail}
              name="name"
              id="standard-basic"
              label="Name"
              variant="standard"
            />
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.vpEmail}
              error={!!(formik.touched.vpEmail && formik.errors.vpEmail)}
              helperText={formik.touched.vpEmail && formik.errors.vpEmail}
              name="email"
              id="standard-basic"
              label="Email Address"
              variant="standard"
            />
             <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.socialMedia}
              name="mobileNumber"
              id="standard-basic"
              label="Mobile Number"
              variant="standard"
            />
           
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }} mt={2}>
          <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lpPhone}
              error={!!(formik.touched.lpPhone && formik.errors.lpPhone)}
              helperText={formik.touched.lpPhone && formik.errors.lpPhone}
              name="aadharNumber"
              id="standard-basic"
              label="Aadhar Number"
              variant="standard"
            />
           
            <TextField 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.onboarded}
              error={!!(formik.touched.onboarded && formik.errors.onboarded)}
              helperText={formik.touched.onboarded && formik.errors.onboarded}
              name="address"
              id="standard-basic"
              label="Address"
              variant="standard" 
              size="small"
            /> 
            <TextField
              select
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.onboarded}
              error={!!(formik.touched.onboarded && formik.errors.onboarded)}
              helperText={formik.touched.onboarded && formik.errors.onboarded}
              name="paymentMode"
              id="standard-basic"
              label="Payment Mode"
              variant="standard"
              sx={{ width: "25ch" }}
              size="small"
            >
              <MenuItem key="YES" value="YES">
                Cash
                </MenuItem>
                <MenuItem key="NO" value="NO">
                Online
                </MenuItem>  
            </TextField> 
           
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }} mt={2}>
          <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.comments}
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