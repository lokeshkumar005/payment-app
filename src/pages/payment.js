import { useCallback, useMemo, useState, useEffect } from "react";
import Head from "next/head"; 
import { Box, Button, Container, Stack, SvgIcon, Typography } from "@mui/material"; 
import { PartnersSearch } from "../sections/partner/payment-search"
import { PartnersTable } from "../sections/partner/payment-table";
import { BasicModal } from "../sections/partner/payment-add";  

const partnerData = [{"Engagement_Id":1,"LP_NAME":"Betteann","LP_EMAIL":"bloverock0@sohu.com","LP_CONTACT":"176-794-4125","LP_SOCIAL_MEDIA":"Tromp, Zboncak and Thiel","ONBOARD_STATUS":'true',"COMMENTS":"duis ac nibh","LP_LEAD_ACCEPTED":"Charlie Chan in the Secret Service"},
{"Engagement_Id":2,"LP_NAME":"Lorna","LP_EMAIL":"lbampford1@tinypic.com","LP_CONTACT":"946-632-2623","LP_SOCIAL_MEDIA":"Roberts Group","ONBOARD_STATUS":'false',"COMMENTS":"sed ante vivamus ","LP_LEAD_ACCEPTED":"In Their Sleep (Dans ton sommeil)"},
{"Engagement_Id":3,"LP_NAME":"Kelly","LP_EMAIL":"kmcglynn2@google.com.hk","LP_CONTACT":"629-300-4190","LP_SOCIAL_MEDIA":"Baumbach, Larkin and Trantow","ONBOARD_STATUS":'true',"COMMENTS":"ultricies","LP_LEAD_ACCEPTED":"3 Needles"},
{"Engagement_Id":4,"LP_NAME":"Dora","LP_EMAIL":"dguilaem3@trellian.com","LP_CONTACT":"339-529-4776","LP_SOCIAL_MEDIA":"Skiles-Stokes","ONBOARD_STATUS":'true',"COMMENTS":"amet turpis ","LP_LEAD_ACCEPTED":"Open Hearts (Elsker dig for evigt)"},
{"Engagement_Id":5,"LP_NAME":"Sarina","LP_EMAIL":"sbrittan4@yolasite.com","LP_CONTACT":"142-167-4932","LP_SOCIAL_MEDIA":"Walker-Moen","ONBOARD_STATUS":'true',"COMMENTS":"iaculis justo","LP_LEAD_ACCEPTED":"Cube 2: Hypercube"},
{"Engagement_Id":6,"LP_NAME":"Candide","LP_EMAIL":"cgrindell5@fastcompany.com","LP_CONTACT":"486-980-5138","LP_SOCIAL_MEDIA":"Pagac Group","ONBOARD_STATUS":'false',"COMMENTS":"volutpat dui","LP_LEAD_ACCEPTED":"Lost Highway"},
{"Engagement_Id":7,"LP_NAME":"Tann","LP_EMAIL":"tleonard6@reuters.com","LP_CONTACT":"572-106-6422","LP_SOCIAL_MEDIA":"Oberbrunner, Stamm and Kreiger","ONBOARD_STATUS":'false',"COMMENTS":"ligula pellentesque","LP_LEAD_ACCEPTED":"Best Foot Forward"},
{"Engagement_Id":8,"LP_NAME":"Eloise","LP_EMAIL":"ematlock7@people.com.cn","LP_CONTACT":"543-393-8212","LP_SOCIAL_MEDIA":"Kirlin and Sons","ONBOARD_STATUS":'true',"COMMENTS":"ac nulla","LP_LEAD_ACCEPTED":"Constantine's Sword"},
{"Engagement_Id":9,"LP_NAME":"Forster","LP_EMAIL":"fkrause8@blogger.com","LP_CONTACT":"201-622-3290","LP_SOCIAL_MEDIA":"Parisian LLC","ONBOARD_STATUS":'true',"COMMENTS":"luctus cum","LP_LEAD_ACCEPTED":"In the Bedroom"},
{"Engagement_Id":10,"LP_NAME":"Phylys","LP_EMAIL":"poshea9@jalbum.net","LP_CONTACT":"875-803-4485","LP_SOCIAL_MEDIA":"Monahan, Becker and Rempel","ONBOARD_STATUS":'false',"COMMENTS":"purus sit","LP_LEAD_ACCEPTED":"Point, The"}]

const Page = () => { 
  const [open, setOpen] = useState(false);
  // const [partnerData, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 
 
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

            <BasicModal open={open} handleClose={handleClose}  />

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
