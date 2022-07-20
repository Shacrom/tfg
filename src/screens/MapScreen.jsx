import { Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'
import { SideBar } from '../layouts/SideBar'
import { TfgLayout } from '../layouts/TfgLayout'

export const MapScreen = () => {
  return (

    <TfgLayout>
      <Box
        sx={{
          backgroundColor: 'red',
          width: "100%",
          height: "100%"
        }}>

        <Typography>MapScreen</Typography>
      </Box>
    </TfgLayout>
  )
}
