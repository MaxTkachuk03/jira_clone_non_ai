import { CssBaseline, ThemeProvider } from "@mui/material";
import type React from "react";

interface ThemeProps {
  children: React.ReactNode;
}

export const AppTheme = ({ children }: ThemeProps) => {
  return (
    <ThemeProvider theme>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
