import React from 'react';
import { grey, red } from '@mui/material/colors';
import { Dialog, DialogContent, Box, Button, Typography, Avatar } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close';
const MyProjectsDialog = ({ dialog, setDialog }) => {
    


    const ShowButton = styled(Button)(() => ({
        backgroundColor: dialog.data.softColor,
        ":hover": {
            backgroundColor: dialog.data.boldColor,
        },
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        color: grey[900]
    }))

    const CancelButton = styled(Button)(() => ({
        backgroundColor: red[400],
        ":hover": {
            backgroundColor: red[500],
        },
        boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
        color: grey[900],
        height: '30px',
        width: '20px',
        borderRadius: 1,
    }))

    return (
        <Dialog open={dialog.open} onClose={() => setDialog({ ...dialog, open: false })} fullWidth={true} maxWidth='md' PaperProps={{ style: { backgroundColor: 'whitesmoke', color: grey[800] }, }}>
            <CancelButton onClick={() => setDialog({ ...dialog, open: false })}>
                <CloseIcon sx={{ fontSize: '13px' }} />
            </CancelButton>



            <DialogContent>
                <Grid container>

                    <Grid xs={12} sm={6}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: 1, paddingRight: { xs: 0, sm: 3 } }}>
                            {/* dangerouslySetInnerHTML is a prop that helps typography to render the html tags */}
                            <Typography variant='subtitle2' dangerouslySetInnerHTML={{ __html: dialog.data.text }} />


                            <a href={dialog.data.href} target='_blank'>
                                <ShowButton sx={{
                                    marginY: {
                                        xs: 3, sm: 0
                                    },
                                    width: 1
                                }} >
                                    مشاهده آنلاین

                                </ShowButton>

                            </a>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Avatar src={dialog.data.img} sx={{ width: 1, height: 300, boxShadow: ' rgba(0, 0, 0, 0.16) 0px 1px 4px;' }} variant='rounded' />
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default MyProjectsDialog;