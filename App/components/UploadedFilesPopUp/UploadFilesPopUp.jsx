import React, { useState } from 'react';
import Download from '../../../assets/icons/ApplicantProfilePage/Download.svg'
import Close from '../../../assets/icons/ApplicantProfilePage/Close.svg'
import { Box, Stack, Typography, Button, Avatar, Backdrop} from "@mui/material";


export const UploadedFilesPopup = (props) => {
  return (
    (props.opened && 
      <Backdrop open={open} sx={{bgcolor: "rgba(0, 0, 0, 0.3)"}}>
        <Box sx={{zIndex: "2000",width: "40vh", height: "auto", border: 2, borderColor: "#E5E7EB;", borderRadius: 2, bgcolor: "white", position: "relative"}}>
          <Stack direction="row" sx={{height: "7vh",width: "100%", borderBottom: 1, borderColor: "#E5E7EB;"}}>
            <Typography sx={{mt: 2, mr:25.5, ml: 2, fontWeight: 600, fontSize: 14, color: "#111928"}}>Files</Typography>
            <Button 
                disableRipple 
                disableElevation 
                startIcon={<Avatar src={Close} sx={{height: 14, width: 12 }}/>}
                sx={{'&.MuiButton-root:hover':{bgcolor: 'transparent'}}}
                onClick={() => props.togglePopup(true)}
            />
          </Stack>
          <Stack alignItems="center" direction="row" sx={{height: "5vh",width: "100%", borderBottom: 1, borderColor: "#E5E7EB"}}>
            <Typography sx={{p: 1, pl: 1.5, fontWeight: 500, fontSize: 15, color: "#111928"}}>
              Resume
            </Typography>
            <Avatar src={Download} sx={{height: 14, width: 14, borderRadius: 0, ml: 25}}/>
          </Stack>
          <Stack alignItems="center" direction="row" sx={{height: "5vh",width: "100%", borderBottom: 1, borderColor: "#E5E7EB"}}>
            <Typography sx={{p: 1, pl: 1.5, fontWeight: 500, fontSize: 15, color: "#111928"}}>
              Disability Document
            </Typography>
            <Avatar src={Download} sx={{height: 14, width: 14, borderRadius: 0, ml: 14.2}}/>
          </Stack>
          <Stack alignItems="center" direction="row" sx={{height: "5vh",width: "100%", borderBottom: 1, borderColor: "#E5E7EB"}}>
            <Typography sx={{p: 1, pl: 1.5, fontWeight: 500, fontSize: 15, color: "#111928"}}>
              Veteran Document
            </Typography>
            <Avatar src={Download} sx={{height: 14, width: 14, borderRadius: 0, ml: 15.4}}/>
          </Stack>
          <Stack alignItems="center" direction="row" sx={{height: "5vh",width: "100%", borderBottom: 1, borderColor: "#E5E7EB"}}>
            <Typography sx={{p: 1, pl: 1.5, fontWeight: 500, fontSize: 15, color: "#111928"}}>
              Ethnicity Document
            </Typography>
            <Avatar src={Download} sx={{height: 14, width: 14, borderRadius: 0, ml: 14.5}}/>
          </Stack>
          <Stack alignItems="center" direction="row" sx={{height: "5vh",width: "100%", borderBottom: 1, borderColor: "#E5E7EB"}}>
            <Typography sx={{p: 1, pl: 1.5, fontWeight: 500, fontSize: 15, color: "#111928"}}>
              Cover Letter
            </Typography>
            <Avatar src={Download} sx={{height: 14, width: 14, borderRadius: 0, ml: 20.8}}/>
          </Stack>
        </Box>
      </Backdrop>        
        
    )
  );
};