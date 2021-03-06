import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from 'lib/styles/index';
import Button from '../common/button/Button';
import { authFormType } from 'types/style/auth';

/**
 * 회원가입 또는 로그인 폼을 보여줍니다.
 */

const AuthFormBlock = styled.div`
    h3 {
        margin: 0;
        color: ${palette.gray[8]};
        margin-bottom: 1rem;
    }
`;

/**
 * 스타일링된 input
 */
const StyledInput = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[5]};
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus {
        color: $oc-teal-7;
        border-bottom: 1px solid ${palette.gray[7]};
    }
    & + & {
        margin-top: 1rem;
    }
`;

/**
 * 폼 하단에 로그인 혹은 회원가입 링크를 보여줌
 */
const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    text-align: right;
    a {
        color: ${palette.gray[6]};
        text-decoration: None;
        &:hover {
            color: ${palette.gray[9]};
        }
    }
`;

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
`;

type textMapType = {
    [index: string]: string;
    login: string;
    register: string;
};

const textMap: textMapType = {
    login: '로그인',
    register: '회원가입'
};

/**
 * 에러를 보여줍니다
 */
const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const AuthForm = ({ type, form, onChange, onSubmit, error }: authFormType) => {
    const text = textMap[type];
    return (
        <AuthFormBlock>
            <h3>{text}</h3>
            <form>
                <StyledInput autoComplete="email" name="email" placeholder="아이디" onChange={onChange} value={form.email} />
                {type === 'register' && (
                    <StyledInput
                        autoComplete="user-name"
                        name="username"
                        placeholder="이름"
                        type="username"
                        onChange={onChange}
                        value={form.username}
                    />
                )}
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="비밀번호"
                    type="password"
                    onChange={onChange}
                    value={form.password}
                />
                {type === 'register' && (
                    <StyledInput
                        autoComplete="new-password"
                        name="confirmPassword"
                        placeholder="비밀번호 확인"
                        type="password"
                        onChange={onChange}
                        value={form.confirmPassword}
                    />
                )}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonWithMarginTop cyan fullWidth onClick={onSubmit} style={{ marginTop: '1rem' }}>
                    {text}
                </ButtonWithMarginTop>
            </form>
            <Footer>
                {type === 'login' ? <Link to="/forgot">비밀번호 찾기</Link> : <Link to="/login"></Link>}
                {type === 'login' ? <Link to="/register">회원가입</Link> : <Link to="/login">로그인</Link>}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;
