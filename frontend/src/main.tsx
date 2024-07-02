import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Ant Design
import { ConfigProvider } from "antd";
import frFR from "antd/locale/fr_FR";

// React Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider locale={frFR}>
        <App />
      </ConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
