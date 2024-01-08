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
import {BasicModal1} from './payment-view'
import { useState } from 'react';
import Paper from '@mui/material/Paper';

export const PartnersTable = (props) => {
  const {
    searchTerm, 
    items = [],
  } = props; 
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 
 

  return (
    <Card>  
        <Box sx={{ minWidth: 900 }}>
        <BasicModal1 open={open} handleClose={handleClose}  />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                      <TableCell>LP Name</TableCell>
                      <TableCell>LP Email</TableCell>
                      <TableCell>LP Phone</TableCell>
                      <TableCell>Social Media</TableCell>
                      <TableCell>Onboarded</TableCell> 
                      <TableCell>Comments</TableCell> 
                      <TableCell>View</TableCell> 
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((customer) => (
                <TableRow
                  key={customer.Engagement_Id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                       <TableCell>{customer.LP_NAME}</TableCell>
                      <TableCell>{customer.LP_EMAIL}</TableCell>
                      <TableCell>{customer.LP_CONTACT}</TableCell>
                      <TableCell>{customer.LP_SOCIAL_MEDIA}</TableCell>
                      <TableCell>{customer.ONBOARD_STATUS}</TableCell> 
                      <TableCell>{customer.COMMENTS}</TableCell> 
                      <TableCell>
                      <Fab type="submit" variant="extended" size="small" style={{ padding: "0 15px" }} onClick={handleOpen}>
                        View
                      </Fab>  
                      </TableCell> 
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
         
        </Box>  
    </Card>
  );
}; 