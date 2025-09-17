import { Check } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Link, createTheme } from "@mui/material";
import { useEffect, useState } from "react";

export default function AcceptTerms() {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAccept = () => {

        const date = new Date();

        localStorage.setItem('spitha_terms_accepted', JSON.stringify(date));

        handleClose();
    };

    useEffect(() => {
        const isTermsAccepted = JSON.parse(localStorage.getItem('spitha_terms_accepted'));
        if (!isTermsAccepted) {
            handleOpen();
        };
    }, []);

    const styles = createTheme({
        dialogTitle: {
            display: 'flex',
            alignItems: 'center',
        }
    });

    return (
        null
    );
};