import { useState, useEffect, SyntheticEvent } from 'react';
import { useMutation } from 'react-query';
import useInputs from 'hooks/useInput';
import { addApp } from 'lib/api/s3';
import { addAppState } from 'state/s3';
import { useInputsType } from 'types/hooks';

const useAddApp = () => {
    const { form, onChange, reset }: useInputsType = useInputs(addAppState);
    const [error, setError] = useState<null | string>(null);

    const { data: s3, error: s3Error, mutate: addAppQuery } = useMutation(addApp);

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const { appName, accessKey, secretKey } = form;

        if ([appName, accessKey, secretKey].includes('')) {
            setError('fill in the blank');
        }

        addAppQuery({ appName, accessKey, secretKey });
    };

    useEffect(() => {
        try {
            if (s3Error) {
                setError('app registration fail');
            }

            if (s3) {
                reset();
            }
        } catch {
            setError('app registration fail');
        }
    }, [s3, s3Error]);

    return { form, onChange, onSubmit, error };
};

export default useAddApp;
