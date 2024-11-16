import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // Import React Query modules
import "./index.css";
import App from "./App.jsx";

// Create a QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Provide QueryClient to the app */}
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </StrictMode>
);
