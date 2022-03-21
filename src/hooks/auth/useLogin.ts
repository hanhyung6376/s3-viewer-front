import { useEffect, useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';

import { loginAtom, userAtom } from 'state/auth';
import useInput from '../useInput';

import { login as loginApi } from 'lib/api/auth';

import { useInputsType } from 'types/hooks';
import { useRecoilState } from 'recoil';

const useLogin = () => {
    const [error, setError] = useState<null | string>(null);
    const { form, onChange, reset }: useInputsType = useInput(loginAtom);
    const [, setUser] = useRecoilState(userAtom);
    const navigate = useNavigate();

    const {
        data: auth,
        error: authError,
        mutate: loginQuery
    } = useMutation(loginApi, {
        onSuccess: () => checkSuccess()
    });

    const checkSuccess = () => {
        navigate('/main');
    };

    const onSubmit = (e: SyntheticEvent) => {
        const { email, password }: any = form;
        e.preventDefault();

        if ([email, password].includes('')) {
            setError('fill in the blank');
            return;
        }

        loginQuery({ email, password });
    };

    useEffect(() => {
        try {
            if (authError) {
                setError('register failed');
            }

            if (auth) {
                localStorage.setItem('s3-user', JSON.stringify(auth.data, ['token']));
                const { username, email } = auth.data;
                setUser({ email: email, username: username });
                setError('success');
                reset();
            }
        } catch {
            setError('register failed');
        }
    }, [auth, authError]);

    return { form, onSubmit, onChange, error };
};

export default useLogin;
