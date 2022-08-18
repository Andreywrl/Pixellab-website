import { Box, Modal, Typography } from '@mui/material';
import { createContext, useState } from 'react';

export const ModalContext = createContext({});

function ModalProvider({ children }) {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState({ title: 'default', text: 'default' })
    const handleChange = () => setOpen(!open);

    return (
        <Box>
            <Modal
                open={open}
                onClose={handleChange}
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                    overflow: 'visible'
                }}>
                    <Typography variant='h6' component='h2'>
                        {content.title}
                    </Typography>
                    <Typography sx={{
                        overflow: 'visible',
                        mt: 2,
                    }}>
                        {content.text}
                    </Typography>
                </Box>
            </Modal>
            <ModalContext.Provider value={{
                handleChange,
                setContent
            }}>
                {children}
            </ModalContext.Provider>
        </Box>
    )
}

export default ModalProvider;