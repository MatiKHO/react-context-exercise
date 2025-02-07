import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from "react-router";

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
  </StrictMode>
);
