import DesignServicesIcon from '@mui/icons-material/DesignServices';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GoogleIcon from '@mui/icons-material/Google';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';

const IconTheme = { color: '#FF006B', fontSize: '2.5em' };

export const IncludedContent = [
    {
        key: 1,
        icon: <DesignServicesIcon sx={IconTheme} />,
        title: 'Design Personalizado',
        description: 'Sites construídos com a identidade do seu negócio em mente'
    },
    {
        key: 2,
        icon: <AccountTreeIcon sx={IconTheme} />,
        title: 'Desenvolvido com UX/UI',
        description: 'Sites que entendem e resolvem as dificuldades da sua empresa e de seus clientes'
    },
    {
        key: 3,
        icon: <GoogleIcon sx={IconTheme} />,
        title: 'Otimizado para pesquisas',
        description: 'Melhora o posicionamento do site nas buscas, aumentando o número de visitas'
    },
    {
        key: 4,
        icon: <DevicesOtherIcon sx={IconTheme} />,
        title: 'Otimização para dispositivos',
        description: 'Sites bonitos e funcionais em qualquer tela'
    },
    {
        key: 5,
        icon: <AlternateEmailIcon sx={IconTheme} />,
        title: 'Email Corporativo',
        description: 'Email personalizado com o nome e domínio de sua empresa. Protege sua marca e transmite credibilidade aos clientes'
    },
    {
        key: 6,
        icon: <FingerprintIcon sx={IconTheme} />,
        title: 'Certificado SSL',
        description: 'Processo que assegura ao visitante do site que apenas dados permitidos por ele são coletados/armazenados'
    },
    {
        key: 7,
        icon: <StorageIcon sx={IconTheme} />,
        title: 'Hospedagem',
        description: 'Espaço dedicado em nossos servidores, utilizado para armazenar os arquivos e o código de sua página'
    },
    {
        key: 8,
        icon: <LanguageIcon sx={IconTheme} />,
        title: 'Registro de Domínio',
        description: 'Endereço digital profissional e de fácil memorização, permitindo que seus clientes o encontrem rapidamente na internet'
    }
]