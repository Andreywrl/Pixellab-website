import { Grid } from '@mui/material';
import { ContactForm } from './ContactForm';
import { Contacts } from './Contacts';

export default function Forms() {

    return (
        <Grid
            container
            justifyContent='center'
           >
            <Contacts />
            <ContactForm />
        </Grid>
    )
}