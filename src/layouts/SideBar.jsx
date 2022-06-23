import React from 'react';
import { Box, Divider, Drawer, ListItemButton, ListItemIcon, Toolbar, Typography, ListItemText, Grid, List, ListItem } from '@mui/material'
import { TurnedInNot } from '@mui/icons-material';

export const SideBar = ({ sideBarWidth = 0 }) => {
    return (

        <Box
            component='nav'
            sx={{ width: { sm: sideBarWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant='permanent' //temporary
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sideBarWidth }
                }}
            >
                <Toolbar>
                    <Typography
                        variant='h6' noWrap component='div'
                    >
                        Marcos Miguel
                    </Typography>

                </Toolbar>
                <Divider />

                <List>
                    {
                        ["Ejemplo 1", "Ejemplo 2", "Ejemplo 3", "Ejemplo 4"].map(ejemplo => (
                            <ListItem key={ejemplo} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid>
                                        <ListItemText primary={ejemplo} />
                                        <ListItemText secondary={'Nostrud eu eu aute exercitation ad quis tempor nostrud excepteur.'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
        </Box>

    )
}
