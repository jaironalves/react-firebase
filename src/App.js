import React from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import NavBar from "./components/NavBar"

import theme from "./MuiTheme"

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <NavBar />
  </MuiThemeProvider>
)

export default App
