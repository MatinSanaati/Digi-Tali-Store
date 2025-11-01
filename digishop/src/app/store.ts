// src/app/store.ts
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import themeReducer from "../features/theme/themeSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // استفاده از localStorage

// تنظیمات redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "theme"], // فقط این ریدوسرها پرسیست میشن
};

// ترکیب ریدوسرها
const rootReducer = combineReducers({
  cart: cartReducer,
  theme: themeReducer,
});

// ایجاد persistedReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// پیکربندی store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // این اکشن‌ها رو از چک سریالایز خارج میکنیم
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// ایجاد persistor برای PersistGate
export const persistor = persistStore(store);

// تایپ‌ها
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
