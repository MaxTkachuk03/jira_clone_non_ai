import { createTheme } from "@mui/material/styles";

export const createAppTheme = (mainColor: string) =>
  createTheme({
    palette: {
      mode: "light", // Можна зробити динамічним, якщо потрібна темна тема
      primary: {
        main: mainColor,
        // MUI автоматично згенерує light/dark версії, якщо ти не передаси їх,
        // але light можна задати трохи прозорішим для hover-ефектів
      },
      common: {
        black: "#27444EC1",
        white: "#7CD4F17E",
      },
      background: {
        default: "#F7F8FA", // Дуже світлий сірий для загального фону додатку (як у Linear)
        paper: "#FFFFFF", // Чисто білий для колонок та карток
      },
      text: {
        primary: "#111827", // Майже чорний (сірий відтінок) для заголовків — виглядає сучасніше за чистий #000
        secondary: "#6B7280", // М'який сірий для підзаголовків та описів карток
      },
      divider: "#E5E7EB", // Світло-сірий для ледь помітних бордерів між картками
    },
    shape: {
      borderRadius: 12, // Сучасні заокруглення (замість стандартних 4px в MUI)
    },
    typography: {
      fontFamily: [
        "Inter", // Стандарт де-факто для сучасних SaaS-інтерфейсів
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        "sans-serif",
      ].join(","),
      h6: {
        fontWeight: 600, // Жирні заголовки для назв колонок
        fontSize: "1rem",
      },
      body1: {
        fontSize: "0.875rem", // Зменшений базовий шрифт для більшої щільності даних (Kanban любить щільність)
      },
      body2: {
        fontSize: "0.75rem",
      },
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none", // Прибирає стандартний оверлей в MUI
            boxShadow:
              "0px 1px 3px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.1)", // Дуже м'яка тінь у стилі Tailwind
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none", // Відключаємо автоматичний CAPS LOCK на кнопках
            fontWeight: 500,
            borderRadius: 8,
            boxShadow: "none", // Плоскі кнопки без тіней виглядають сучасніше
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },
      // Якщо будеш використовувати Card для тасок
      MuiCard: {
        styleOverrides: {
          root: {
            border: "1px solid #E5E7EB", // Легкий бордер замість сильної тіні
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.03)",
            transition: "box-shadow 0.2s ease-in-out, transform 0.2s ease",
            "&:hover": {
              boxShadow:
                "0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.06)",
              transform: "translateY(-2px)", // Легкий ефект підняття картки при наведенні
            },
          },
        },
      },
    },
  });
