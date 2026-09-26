import { createTheme, alpha } from "@mui/material/styles";

// Оголошуємо кастомні кольори для TypeScript, якщо захочеш додати свої змінні
declare module "@mui/material/styles" {
  interface Palette {
    kanban: {
      columnBg: string;
      taskBg: string;
    };
    header: {
      background: string;
      text: string;
      border: string;
    };
  }
  interface PaletteOptions {
    kanban?: {
      columnBg: string;
      taskBg: string;
    };
    header?: {
      background: string;
      text: string;
      border: string;
    };
  }
}

export const createAppTheme = (mainColor: string) =>
  createTheme({
    palette: {
      mode: "light",
      primary: {
        main: mainColor,
        light: alpha(mainColor, 0.8),
        dark: alpha(mainColor, 0.9),
        contrastText: "#FFFFFF",
      },
      // common.white та common.black краще залишати чистими (#FFF та #000).
      // Якщо потрібна прозорість, використовується alpha() або кастомні поля,
      // інакше MUI поламає контраст тексту на кнопках та базових компонентах.
      common: {
        black: "#000000",
        white: "#FFFFFF",
      },
      header: {
        // Варіант 1: Чистий білий (Класичний SaaS)
        background: "#FFFFFF",

        // Варіант 2 (закоментовано): Матове скло (Glassmorphism), використовує alpha з MUI
        // background: alpha("#FFFFFF", 0.8),

        text: "#0F172A", // Колір тексту та іконок у хедері
        border: "#E2E8F0", // Колір нижньої лінії хедера (Slate 200)
      },
      kanban: {
        columnBg: "#F1F3F9", // Сучасний сіро-синій відтінок (Slate 100) для колонок
        taskBg: "#FFFFFF",
      },
      background: {
        paper: "#6FE6FB", // Нейтральний фон всього додатка
        default: "#FFFFFF",
      },
      text: {
        primary: "#0F172A", // Slate 900 (набагато приємніший за чистий чорний)
        secondary: "#64748B", // Slate 500
        disabled: "#94A3B8",
      },
      divider: "#E2E8F0", // Slate 200 (дуже м'які лінії)
      action: {
        hover: alpha(mainColor, 0.04),
        selected: alpha(mainColor, 0.08),
      },
    },
    shape: {
      borderRadius: 12, // Зберігаємо твої заокруглення, це сучасний стандарт
    },
    typography: {
      fontFamily: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        "sans-serif",
      ].join(","),
      h1: { fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em" },
      h2: { fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-0.01em" },
      h6: { fontSize: "1rem", fontWeight: 600, letterSpacing: "0" },
      subtitle1: { fontSize: "0.875rem", fontWeight: 500, color: "#64748B" },
      body1: { fontSize: "0.875rem", lineHeight: 1.5, color: "#334155" },
      body2: { fontSize: "0.75rem", lineHeight: 1.4, color: "#64748B" },
      button: { textTransform: "none", fontWeight: 600 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: "#FAFAFA",
            scrollbarColor: "#CBD5E1 transparent",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: "8px",
              backgroundColor: "#CBD5E1",
              minHeight: "24px",
              border: "2px solid #FAFAFA", // Створює ефект "відступу" скролбара
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none",
            boxShadow:
              "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)", // Tailwind Shadow-sm
          },
          elevation1: {
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)", // Tailwind Shadow-md
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true, // Відключає старі тіні Material Design
          disableRipple: true, // Робить інтерфейс більш "десктопним" і різким
        },
        styleOverrides: {
          root: {
            borderRadius: "8px",
            padding: "8px 16px",
            transition: "all 0.2s ease-in-out",
          },
          contained: {
            backgroundColor: mainColor,
            "&:hover": {
              backgroundColor: alpha(mainColor, 0.9),
              transform: "translateY(-1px)",
            },
          },
          outlined: {
            borderColor: "#E2E8F0",
            color: "#0F172A",
            "&:hover": {
              backgroundColor: "#F8FAFC",
              borderColor: "#CBD5E1",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: "12px",
            border: "1px solid #E2E8F0",
            boxShadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
            transition: "box-shadow 0.2s ease, border-color 0.2s ease",
            "&:hover": {
              boxShadow:
                "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)", // Tailwind Shadow-lg
              borderColor: "#CBD5E1",
            },
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          size: "small",
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            transition: "all 0.2s ease",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#E2E8F0",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#CBD5E1",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: mainColor,
              borderWidth: "1px",
              boxShadow: `0 0 0 3px ${alpha(mainColor, 0.15)}`, // Сучасне кільце фокусу
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: "6px", // Квадратніші чіпи для Kanban
            fontWeight: 500,
          },
          filled: {
            backgroundColor: "#F1F5F9",
            color: "#475569",
            "&:hover": {
              backgroundColor: "#E2E8F0",
            },
          },
        },
      },
    },
  });
