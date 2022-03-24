import { useState } from 'react';
import { useQuery, useMutation } from 'react-query';
import { appList, addApp } from 'lib/api/s3';
import useInput from 'hooks/useInput';
import { addAppState } from 'state/s3';

const useMain = () => {
    const [app, setApp] = useState<null | string[]>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const { form, onChange, reset } = useInput(addAppState);
    const { isLoading, error } = useQuery('bucket-list', appList, {
        onSuccess: (data) => setApp(data.data.app)
    });

    const { mutate: AppMutate } = useMutation(addApp, {
        onSuccess: () => onSuccess()
    });

    const onSuccess = () => {
        reset();
        setVisible(false);
    };

    const onSubmit = () => {
        const { appName, accessKey, secretKey }: any = form;
        AppMutate({ appName, accessKey, secretKey });
    };

    const onCancel = () => {
        setVisible(false);
    };

    const onVisible = () => {
        setVisible(true);
    };

    return { app, isLoading, error, form, onChange, onSubmit, visible, onVisible, onCancel };
};

export default useMain;
