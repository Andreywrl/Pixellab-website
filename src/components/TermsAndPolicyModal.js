import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useEffect, useState } from 'react';

import PDFTermosDeUso from '../assets/PDF/Termos e Condições - PixelLb.pdf';
import PDFPoliticasDePrivacidade from '../assets/PDF/Política Privacidade - PixelLb.pdf';

const styles = {
    dialog: {
        height: '85vh'
    },
};

export default function useTermsAndPolicyModal(doc) {


    const [open, setOpen] = useState(true);
    const [currentDoc, setCurrentDoc] = useState({});

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const data = {
        termosDeUso: {
            title: 'Termos e Condições de Uso',
            pdf: PDFTermosDeUso
        },
        politicasPrivacidade: {
            title: 'Políticas de Privacidade',
            pdf: PDFPoliticasDePrivacidade
        },
    };

    useEffect(() => {

        handleOpen();
        doc === 1 ? setCurrentDoc(data.termosDeUso) : setCurrentDoc(data.termosDeUso);

    }, []);

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={styles.dialog}
            >
                <DialogTitle>
                    {currentDoc.title}
                </DialogTitle>
                <DialogContent>
                    <iframe src={currentDoc.pdf} title={currentDoc.title} />
                </DialogContent>
                <DialogActions>
                    <Button variant='contained' color='secondary' onClick={handleClose}>
                        Fechar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}