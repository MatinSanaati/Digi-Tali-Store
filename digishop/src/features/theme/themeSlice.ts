// src/features/theme/themeSlice.ts

import { createSlice, type PayloadAction, } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface ThemeState {
  current: Theme;
}

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  // تشخیص خودکار بر اساس سیستم (اختیاری)
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
};

const initialState: ThemeState = {
  current: getInitialTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.current = state.current === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.current);
      document.documentElement.setAttribute("data-theme", state.current);
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.current = action.payload;
      localStorage.setItem("theme", state.current);
      document.documentElement.setAttribute("data-theme", state.current);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
