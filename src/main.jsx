import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import Navbar from "./Navbar.jsx";
import MainArticle from "./MainArticle.jsx";
import NewsletterForm from "./NewsletterForm.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <Navbar />
    <MainArticle />
    <NewsletterForm />
  </StrictMode>,
);
