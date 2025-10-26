// src/components/ThemeToggle.tsx

import "./ThemeToggle.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../features/theme/themeSlice";
import type { RootState } from "../../../app/store";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.current);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={handleToggle}
      className="theme-toggle"
      aria-label={`Switch to ${
        currentTheme === "light" ? "dark" : "light"
      } mode`}
    >
      <span className="theme-toggle__icon">
        {currentTheme === "light" ? "🌙" : "☀️"}
      </span>
    </button>
  );
}
