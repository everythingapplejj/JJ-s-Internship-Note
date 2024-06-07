import React, { useState } from 'react';
import CloseButton from '../../../assets/icons/ApplicantProfilePage/CloseButton.svg'
import { Box, Stack, Typography, Button, Avatar, Backdrop} from "@mui/material";


export const SkillsPopup = (props) => {
  {/*Dummy Skills Lists*/}
  const relevantSkills = ["Teamwork", "Serving", "Efficiency", "Customer Service", "Coffee Making"]
  const allSkills = ["Childcare", "Time Management", "Honest", "Stamina", "Patient"]

  return (
    (props.opened &&
    <Backdrop open={open} sx={{bgcolor: "rgba(0, 0, 0, 0.3)"}}>          
        <Box sx={{zIndex: "2000",width: "40vh", height: "auto", border: 2, borderColor: "#E5E7EB;", borderRadius: 2, bgcolor: "white", pb: 1, position: "relative"}}>
            <Stack direction="row" sx={{height: "7vh",width: "100%", borderBottom: 1, borderColor: "#E5E7EB;"}}>
                <Typography sx={{mt: 2, mr:25, ml: 2, fontWeight: 600, fontSize: 14, color: "#111928"}}>Skills</Typography>
                <Button 
                    disableRipple 
                    disableElevation 
                    startIcon={<Avatar src={CloseButton} 
                    sx={{width: 16, height: 16, p:0}}/>} sx={{'&.MuiButton-root:hover':{bgcolor: 'transparent'}}}
                    onClick={() => props.togglePopup(true)}
                />
            </Stack>
            <Typography sx={{ml: 2, fontSize: 13, fontWeight: 700, color: "#6B7280", mt: 2, mb: 1}}>Relevant Skills:</Typography>
            <Box 
                sx={{
                    width: "fit-content", display: "inline-flex", flexDirection: "row", flexWrap: "wrap", 
                    alignItems:"flex-start", ml: 1, mr: 0}}>
                {relevantSkills.map((skill)=>{
                    return(
                    <Typography sx={{color: "#111928", mt: 0.5, mr: 1, ml: 1, mb: 0.5, pt: 0, pb: 0, pl: 1, pr: 1, fontWeight: 500, fontSize: 15, bgcolor: "#C3DDFD", border: 1, borderRadius: 1, borderColor: "black", }}>
                        {skill}
                    </Typography>
                    )
                })}
            </Box>
            <Typography sx={{ml: 2, fontSize: 13, fontWeight: 700, color: "#6B7280", mt: 1, mb: 1}}>All Skills:</Typography>
            <Box 
                sx={{
                    width: "fit-content", display: "inline-flex", flexDirection: "row", flexWrap: "wrap", 
                    alignItems:"flex-start", justifyContent: "space-between", ml: 1, mr: 1}}>
                {allSkills.map((skill)=>{
                    return(
                    <Typography sx={{color: "#111928", mt: 0.5, mr: 1, ml: 1, mb: 0.5, pt: 0, pb: 0, pl: 1, pr: 1, fontWeight: 500, fontSize: 15, bgcolor: "#C3DDFD", border: 1, borderRadius: 1, borderColor: "black", }}>
                        {skill}
                    </Typography>
                    )
                })}
            </Box>
        </Box>
    </Backdrop>  
    )
  );
};