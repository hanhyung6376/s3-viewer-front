import AuthForm from 'component/auth/AuthForm';
import AuthTemplate from 'component/auth/AuthTemplate';
import { useRegister } from 'hooks/auth';
import { useRegisterType } from 'types/hooks';

const Login = () => {
    const { form, onSubmit, onChange, error }: useRegisterType = useRegister();
    return (
        <AuthTemplate>
            <AuthForm type={'register'} form={form} onChange={onChange} onSubmit={onSubmit} error={error} />
        </AuthTemplate>
    );
};

export default Login;
