import AuthForm from 'component/auth/AuthForm';
import AuthTemplate from 'component/auth/AuthTemplate';
import { useLogin } from 'hooks/auth';
import { useLoginType } from 'types/hooks';

const Login = () => {
    const { form, onSubmit, onChange, error }: useLoginType = useLogin();
    return (
        <AuthTemplate>
            <AuthForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} error={error} />
        </AuthTemplate>
    );
};

export default Login;
