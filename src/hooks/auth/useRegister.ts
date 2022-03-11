import { useEffect, useState, SyntheticEvent } from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { registerAtom } from 'state/auth';
import useInput from '../useInput';
import { register as registerApi } from 'lib/api/auth';

import { useInputsType } from 'types/hooks';

const useRegister = () => {
    const [error, setError] = useState<null | string>(null);
    const { form, onChange, reset }: useInputsType = useInput(registerAtom);
    const navigate = useNavigate();

    const { data: auth, error: authError, mutate: registerQuery } = useMutation(registerApi);

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const { email, username, password, confirmPassword }: any = form;

        if ([email, password, username, confirmPassword].includes('')) {
            setError('fill in the blank');
            return;
        }

        if (password !== confirmPassword) {
            setError('Not same password');
            return;
        }

        registerQuery({ email, username, password });
    };

    useEffect(() => {
        console.log('---------------------------------------------------------------------');
        if (authError) {
            setError('register failed');
        }

        if (auth) {
            setError('success');
            reset();
            navigate('/');
        }
    }, [auth, authError]);

    return { form, onSubmit, onChange, error };
};

export default useRegister;
