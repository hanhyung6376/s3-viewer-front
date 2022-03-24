import styled from 'styled-components';
import Button from '../button/Button';
import palette from 'lib/styles';
import { useMainType } from 'types/hooks';

const Fullscreen = styled.div`
    position: fixed;
    z-index: 30;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AskModalBlock = styled.div`
    width: 320px;
    background: white;
    padding: 1.5rem;
    border-radius: 4px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
    h2 {
        margin-top: 0;
        margin-bottom: 1rem;
    }
    p {
        margin-bottom: 3rem;
    }
    .buttons {
        display: flex;
        justify-content: flex-end;
    }
`;

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

const ButtonWithMarginTop = styled(Button)`
    margin-top: 1rem;
`;

const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`;

const RegistrationModal = ({ visible, onChange, form, onSubmit, error }: useMainType) => {
    if (!visible) return null;
    return (
        <Fullscreen>
            <AskModalBlock>
                <h2>Registration</h2>
                <StyledInput name="appName" placeholder="앱 이름" type="appName" onChange={onChange} value={form.addApp} />
                <StyledInput name="accessKey" placeholder="Access Key" type="accessKey" onChange={onChange} value={form.accesskey} />
                <StyledInput name="secretKey" placeholder="Secret Key" type="secretKey" onChange={onChange} value={form.secretkey} />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonWithMarginTop cyan fullWidth onClick={onSubmit} style={{ marginTop: '1rem' }}>
                    ADD
                </ButtonWithMarginTop>
            </AskModalBlock>
        </Fullscreen>
    );
};

export default RegistrationModal;
