/* eslint-disable no-unused-vars */
import React from 'react'
import { Typography,Button,Stack } from '@mui/material';
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
const Detail = ({exerciseDetail}) => {

    const {bodyPart,gifUrl,name,target,equipment}= exerciseDetail;
    const extraDetail=[
        {
        icon : BodyPartImage,
        name : bodyPart
    },
    {
        icon : TargetImage,
        name : target
    },
    {
        icon : EquipmentImage,
        name : equipment
    }
    
]
  return (
    <Stack gap="60px" sx={{flexDirection:{lg:'row'}, p:'20px',alignItems:'center'}} >
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
        <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
            <Typography variant='h6'>
                <span style={{ color: "#ff2625", textTransform: "capitalize" }}> {name}</span>
            </Typography>
            <Typography textTransform='capitalize'>
                Exercises keep you Strong boiz ! {name} is one of the best exercises to target your {target}
            </Typography>
            {extraDetail.map((item)=>(
                <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                <Button sx={{background:'#fff2db',borderRadius:'50%', width:'10px',height:'100px'}}>
                    <img src={item.icon} alt='icon' style={{width:'50px',height:'50px'}}/>
                </Button>
                <Typography variant="h5" textTransform='capitalize'>
                   {item.name}
                </Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Detail