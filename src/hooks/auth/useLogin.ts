import { useState, SyntheticEvent } from 'react';
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

    const { mutate: loginQuery } = useMutation(loginApi, {
        onSuccess: (data) => checkSuccess(data),
        onError: (data) => onError(data)
    });

    const checkSuccess = (authData: any) => {
        localStorage.setItem('s3-user', JSON.stringify(authData.data, ['token']));
        const { username, email } = authData.data;
        setUser({ email: email, username: username });
        setError('success');
        reset();
        navigate('/main');
    };

    const onError = (authData: any) => {
        setError('register failed');
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

    return { form, onSubmit, onChange, error };
};

export default useLogin;
