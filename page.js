"use client";
import { useState } from "react";
import "./style.css"; // Importamos los estilos

export default function BreakingBadQuotes() {
  const [quote, setQuote] = useState(null);

  // Función para obtener una nueva frase de la API
  const fetchQuote = async () => {
    const res = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const data = await res.json();
    setQuote(data[0]); // Guardamos la primera frase obtenida
  };

  return (
    <div className="container">
      <h1 className="title">
        <span className="br">Br</span>eaking
        <span className="ba">Ba</span>dCamJuan
      </h1>

      <div className="quote-box">
        {quote ? (
          <p className="quote-text">
            "{quote.quote}" <br />
            <span className="quote-author">- {quote.author}</span>
          </p>
        ) : (
          <p className="placeholder">Haz clic para obtener una frase.</p>
        )}
      </div>

      <button onClick={fetchQuote} className="button">
        Obtener Frase
      </button>
    </div>
  );
}
