// material-ui
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import styled from 'styled-components';

// styles
const LoaderWrapper = styled.div({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1301,
    width: '100%'
});

// ==============================|| LOADER ||============================== //

export interface LoaderProps extends LinearProgressProps {}

const Loader = () => (
    <LoaderWrapper>
        <LinearProgress color="primary" />
    </LoaderWrapper>
);

export default Loader;
