import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { userAtom } from 'state/auth';
import { tokenRefresh } from 'lib/api/auth';
import { useQuery } from 'react-query';

const useAuth = () => {
    const [user, setUser] = useRecoilState(userAtom);
    const reset = useResetRecoilState(userAtom);
    const navigate = useNavigate();
    const { data, error } = useQuery('token', tokenRefresh, {
        retry: false,
        onSuccess: () => checkSuccess(),
        onError: () => checkFailure()
    });

    const checkSuccess = () => {
        navigate('/main');
    };

    const checkFailure = () => {
        navigate('/login');
    };

    useEffect(() => {
        try {
            if (error) {
                reset();
            }
            if (data) {
                const { email, username } = data.data;
                setUser({ email: email, username: username });
            }
        } catch {
            reset();
        }
    }, [data, error]);

    return user.email;
};

export default useAuth;
