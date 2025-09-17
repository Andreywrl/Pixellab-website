import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const iconStyle = {
    fontSize: {
        xs: '1em',
        sm: '1.25em'
    }
}

export const IconsButtons = [
    {
        title: 'Instagram',
        icon: <InstagramIcon sx={iconStyle} />,
        link: 'https://www.instagram.com/spitha.digital/',
    },
    {
        title: 'LinkedIn',
        icon: <LinkedInIcon sx={iconStyle} />,
        link: 'https://br.linkedin.com/company/spitha-digital',
    },
]