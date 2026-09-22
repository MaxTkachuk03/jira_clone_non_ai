import { CssBaseline, ThemeProvider } from "@mui/material";
import type React from "react";
import { useMemo } from "react";
import { createAppTheme } from ".";

interface ThemeProps {
  children: React.ReactNode;
}

export const AppTheme = ({ children }: ThemeProps) => {
  const theme = useMemo(() => createAppTheme("#fff"), []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
