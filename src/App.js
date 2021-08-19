import TopBar from "./components/TopBar";
import './App.css'
import {createTheme, MuiThemeProvider} from "@material-ui/core";

function App() {
    const theme = createTheme({
        typography: {
            fontFamily: [
                "'Noto Sans KR'",
                "sans-serif"
            ].join(','),
        },
        shadows: ["none"],
        palette: {
            primary: {
                main: 'rgba(60, 100, 177, 0.06)',
            },
            secondary: {
                main: 'rgba(60, 100, 177)',
            },

        },
    })
    return (
        <div>
            <MuiThemeProvider theme={theme}>
                <TopBar/>

            </MuiThemeProvider>
        </div>

    );
}

export default App;
