import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PublicIcon from '@mui/icons-material/Public';
import { grey } from '@mui/material/colors';
import { useMediaQuery } from '@mui/material';
import {useTheme} from '@mui/material/styles';
export const softSkillsData = () => {
    const theme = useTheme()
    const smallerThanLg = useMediaQuery(theme.breakpoints.down('lg'))
    const smallerThanSm = useMediaQuery(theme.breakpoints.down('sm'))
    return [
        {
            title: 'مدیریت زمان',
            icon: <AccessTimeIcon color={grey[700]} sx={{ color: grey[700], fontSize: 135 }} />,
            style: { boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', border: 1, borderColor: grey[200], borderRadius: 2, transition: '0.3s', ":hover": { boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;' }, mt: smallerThanSm && 5 }
        },
        {
            title: 'حل مسئله',
            icon: <LightbulbIcon color={grey[700]} sx={{ color: grey[700], fontSize: 135 }} />,
            style: { boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', border: 1, borderColor: grey[200], borderRadius: 2, transition: '0.3s', ":hover": { boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;' }, mt: smallerThanSm && 5 }
        },
        {
            title: 'زبان انگلیسی',
            icon: <PublicIcon color={grey[700]} sx={{ color: grey[700], fontSize: 135 }} />,
            style: { boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;', border: 1, borderColor: grey[200], borderRadius: 2, transition: '0.3s', ":hover": { boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;' }, mt: smallerThanLg && 5 }
        },

    ]
}