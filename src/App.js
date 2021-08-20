import TopBar from "./components/TopBar";
import './App.css'
import {createTheme, CssBaseline, MuiThemeProvider} from "@material-ui/core";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MovieDetailContainer from "./containers/MovieDetailContainer";

function App() {
    const theme = createTheme({
        overrides: {
            MuiCssBaseline: {
                '@global': {
                    'a': {
                        textDecoration: 'none',
                    },
                },
            },
            MuiCircularProgress: {
                'width': '500px'

            }
        },
        typography: {
            fontFamily: [
                "'Noto Sans KR'",
                "sans-serif"
            ].join(','),
        },
        shadows: ["none"],
        palette: {
            primary: {
                main: '#F3F6FA',
            },
            secondary: {
                main: '#3C64B1',
            },

        },
    })
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>

            <BrowserRouter>
                <Switch>
                    <Route path='/movie/:movieId' exact component={MovieDetailContainer}/>
                </Switch>

            </BrowserRouter>

        </MuiThemeProvider>
    );
}

export default App;
