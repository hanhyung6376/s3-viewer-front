import theme from 'theme';
import { ThemeProvider } from 'styled-components';
import Routes from 'routes';
import './App.css';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Routes />
        </ThemeProvider>
    );
};

export default App;
