import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { loginAtom } from 'theme/state/auth';
import useInput from '../useInput';

import { login as loginApi } from 'lib/api/auth';

import { useInputsType } from 'types/hooks';

const useLogin = () => {
    const [error, setError] = useState<null | string>(null);
    const { form, onChange, reset }: useInputsType = useInput(loginAtom);

    const { data: auth, error: authError, mutate: loginQuery } = useMutation(loginApi);

    const onSubmit: () => void = () => {
        const { email, password }: any = form;

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
                console.log(auth);
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
