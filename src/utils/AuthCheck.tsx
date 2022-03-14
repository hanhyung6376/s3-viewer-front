import { CheckProps } from 'types';
import { useAuth } from 'hooks/auth';

const AuthCheck = ({ children }: CheckProps) => {
    useAuth();
    return children;
};

export default AuthCheck;
