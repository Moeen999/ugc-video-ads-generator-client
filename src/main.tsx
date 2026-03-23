import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/react";
import { dark } from "@clerk/themes";

const phublishable_Key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!phublishable_Key) {
  throw new Error("Key not found!");
}

createRoot(document.getElementById("root")! as HTMLElement).render(
  <BrowserRouter>
    <ClerkProvider
      publishableKey={phublishable_Key}
      appearance={{
        theme: dark,
        variables: {
          colorPrimary: "#4f39f6",
          colorTextOnPrimaryBackground: "#ffffff",
        },
      }}
    >
      <App />
    </ClerkProvider>
  </BrowserRouter>,
);
