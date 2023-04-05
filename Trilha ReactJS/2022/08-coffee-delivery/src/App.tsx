import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ShopProvider } from "./contexts/ShopContext";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (  
    <ThemeProvider theme={defaultTheme}>
        <BrowserRouter basename="/coffee-delivery">
          <ShopProvider>
              <Router />
          </ShopProvider>
        </BrowserRouter>
        <GlobalStyle />
    </ThemeProvider>
  )
}
