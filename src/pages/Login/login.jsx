import { useFetchAndLoads } from '@/hooks';
import { Button } from '@mui/material/Button';
import { login } from '../../services/public.service';

const Login = () => {
    const { loader, callEndpoint } = useFetchAndLoads();

    const handleClick = async () => {
        const user = await callEndpoint(login());

    };

    return (
        <>
            <Button variant="text" onClick={handleClick}/>
        </>
    )
}