import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Fab,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  TableContainer
} from "@mui/material";
import { BasicModal1 } from './payment-view'
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import apiService from '@/apiService/service';
import { useEffect } from 'react';

export const PartnersTable = (props) => {
  const {
    searchTerm,
    items = [],
  } = props;
  const [open, setOpen] = useState(false);


  const [donorInfo, setDonorInfo] = useState({})

  const handleOpen = async (id) => {

    try {
      const response = await apiService.getUserReceipt(id);
      setDonorInfo(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Card>
      <Box sx={{ minWidth: 900 }}>
        <BasicModal1 open={open} handleClose={handleClose} donorInfo={donorInfo} />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Aadhra</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Payment Mode</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>View</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {items
                .filter((item) =>
                  item.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((item) => {
                  return (
                    <TableRow
                      key={item._id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{item.name}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.mobile}</TableCell>
                      <TableCell>{item.aadhar}</TableCell>
                      <TableCell>{item.address}</TableCell>
                      <TableCell>{item.paymentMode}</TableCell>
                      <TableCell>{item.amount}</TableCell>
                      <TableCell>
                        <Fab variant="extended" size="small" style={{ padding: "0 15px" }} onClick={() => {
                          handleOpen(item._id)
                        }}>
                          View
                        </Fab>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>







            {/* <TableBody>
              {items.map((item) => (
               
                 
                </TableRow>

              ))}
            </TableBody> */}
          </Table>
        </TableContainer>

      </Box>
    </Card>
  );
}; 