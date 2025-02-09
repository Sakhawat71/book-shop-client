import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './features/auth/authSlice';


const persistConfig = {
    key: 'auth',
    storage,
    // whitelist: ["token"], 
};

const persistedReducer = persistReducer(persistConfig , authReducer);

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth : persistedReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor  = persistStore(store);