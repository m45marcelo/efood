import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import GlobalStyled from "./styles/global.ts";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyled/>
            <App />
        </ThemeProvider>
    </StrictMode>
);
