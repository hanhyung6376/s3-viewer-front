import theme from 'theme';
import { ThemeProvider } from 'styled-components';
import Routes from 'routes';
import './App.css';
import AuthCheck from './utils/AuthCheck';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AuthCheck>
                <Routes />
            </AuthCheck>
        </ThemeProvider>
    );
};

export default App;
