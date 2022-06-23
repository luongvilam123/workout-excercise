import React from 'react';
import { Box,Stack,Typography } from '@mui/material';
import Logo from '../assets/images/LogoMain.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
         <Stack gap='40px' alignItems='center' px='40px' pt='24px' >
          <img src={Logo} alt='Logo' width="200px" height='100px' />
          <Typography variamnt="h5" pb='40px' mt='20px'>From Vĩ Lâm with Love 😘 </Typography>
         </Stack>
    </Box>
  )
}

export default Footer