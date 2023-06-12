import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.tsx";
import { loadAllUsers } from "./features/users/userSlice.tsx";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import apiProducts from "./features/apiSlice.tsx";
import App from "./App.tsx";
import "./index.css";
store.dispatch(loadAllUsers());
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ApiProvider api={apiProducts}>
                <App />
            </ApiProvider>
        </Provider>
    </React.StrictMode>
);
