import { useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { userAtom } from 'state/auth';
import { tokenRefresh } from 'lib/api/auth';
import { useQuery } from 'react-query';

const useAuth = () => {
    const [user, setUser] = useRecoilState(userAtom);
    const reset = useResetRecoilState(userAtom);
    const { data, error } = useQuery('token', tokenRefresh, {
        retry: false
    });

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
