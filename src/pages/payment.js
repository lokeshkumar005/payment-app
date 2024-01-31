import { useCallback, useMemo, useState, useEffect } from "react";
import Head from "next/head";
import { Box, Button, Container, Stack, SvgIcon, Typography } from "@mui/material";
import { PartnersSearch } from "../sections/partner/payment-search"
import { PartnersTable } from "../sections/partner/payment-table";
import { BasicModal } from "../sections/partner/payment-add";
import apiService from "../apiService/service";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [partnerData, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    try {
      const result = await apiService.getUser();
      setData(result); // Update the state with the fetched data 
    } catch (error) {
      alert('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Payment</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 1,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Donations</Typography>
              </Stack>
              <div>
                <Button

                  variant="contained"
                  onClick={handleOpen}
                >
                  Add
                </Button>
              </div>
            </Stack>
            <PartnersSearch onInputChange={setSearchTerm} />

            <BasicModal open={open} handleClose={handleClose} />

            <PartnersTable
              searchTerm={searchTerm}
              items={partnerData}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};


export default Page;
