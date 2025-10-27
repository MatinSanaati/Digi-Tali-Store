// src/app/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import themeReducer from "../features/theme/themeSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // لوکال استوریج

// تنظیمات redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "theme"], // پرسیست کردن cart و theme
};

// ترکیب ردیوسرها
const rootReducer = combineReducers({
  cart: cartReducer,
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
