import React from 'react'

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


function AboutList() {
    return (
        <>
            
            <List sx={{ width: '100%', display: 'flex', flexWrap: 'wrap', }}>
                <ListItem className='transition duration-300 ease-in-out hover:scale-110' sx={{ width: '18%', mb: 2 }} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Muhammad Osama"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Owner
                                </Typography>
                                {' — Leading the RentACar company with over 15 years of experience in the automotive industry.'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem className='transition duration-300 ease-in-out hover:scale-110' sx={{ width: '20%', mb: 2 }} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="John Doe"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Chief Executive Officer
                                </Typography>
                                {' — Leading the RentACar company with over 15 years of experience in the automotive industry.'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem className='transition duration-300 ease-in-out hover:scale-110' sx={{ width: '24%', mb: 2 }} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Jane Smith"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Chief Operations Officer
                                </Typography>
                                {' — Oversees daily operations and ensures the highest level of service for RentACar customers.'}
                            </React.Fragment>
                        }
                    />

                </ListItem>

                <ListItem className='transition duration-300 ease-in-out hover:scale-110' sx={{ width: '20%', mb: 2 }} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Michael Brown"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Chief Financial Officer
                                </Typography>
                                {' — Manages the financial planning and risk management of RentACar.'}
                            </React.Fragment>
                        }
                    />

                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem className='transition duration-300 ease-in-out hover:scale-110' sx={{ width: '17%', mb: 2 }} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Emily Johnson"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Head of Marketing
                                </Typography>
                                {' — Drives the marketing strategy and brand awareness for RentACar.'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem className='transition duration-300 ease-in-out hover:scale-110' sx={{ width: '25%', mb: 2 }} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="David Williams"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Head of Sales
                                </Typography>
                                {' — Leads the sales team and focuses on expanding RentACars market presence.'}
                            </React.Fragment>
                        }
                    />

                </ListItem>
                <ListItem className='transition duration-300 ease-in-out hover:scale-110' sx={{ width: '20%', mb: 2 }} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Olivia Martinez"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Head of Customer Service
                                </Typography>
                                {' — Ensures RentACar customers receive exceptional service and support.'}
                            </React.Fragment>
                        }
                    />

                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem className='transition duration-300 ease-in-out hover:scale-110' sx={{ width: '20%', mb: 2 }} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Liam Davis"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Fleet Manager
                                </Typography>
                                {' — Manages the RentACar vehicle fleet and ensures all vehicles are in top condition.'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem className='transition duration-300 ease-in-out hover:scale-110' sx={{ width: '22%', mb: 2 }} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Sophia Wilson"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Human Resources Manager
                                </Typography>
                                {' — Oversees recruitment, training, and employee welfare at RentACar.'}
                            </React.Fragment>
                        }
                    />

                </ListItem>
                <ListItem className='transition duration-300 ease-in-out hover:scale-110' sx={{ width: '20%', mb: 2 }} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="James Garcia"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    IT Director
                                </Typography>
                                {' — Manages RentACars technology infrastructure and digital transformation.'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem className='transition duration-300 ease-in-out hover:scale-110' sx={{ width: '20%', mb: 2 }} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Ava Rodriguez"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Legal Counsel
                                </Typography>
                                {' — Provides legal advice and ensures RentACars compliance with regulations.'}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem className='transition duration-300 ease-in-out hover:scale-110' sx={{ width: '20%', mb: 2 }} alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Hannan Haider"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Chief Excutive Officer
                                </Typography>
                                {' — Oversees daily operations and ensures the highest level of service for RentACar customers.'}
                            </React.Fragment>
                        }
                    />

                </ListItem>
            </List>
        </>
    )
}

export default AboutList