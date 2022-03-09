import { userAtom } from 'theme/state/auth';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { userType } from 'types/auth';

const useHeader = () => {
    const [user] = useRecoilState<userType>(userAtom);
    const reset = useResetRecoilState(userAtom);

    const onLogout = () => {
        reset();
        localStorage.removeItem('user');
    };

    return { user, onLogout };
};

export default useHeader;
