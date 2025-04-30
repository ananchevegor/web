import "../App.css";
import logo from "../images/LogoDreemKeeper.jpg";
import dashboardImage from "../images/maxresdefault.jpg"
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch("/status")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((s) => setStatus(s.response))
      .catch((e) => console.error(e));
  }, []);

  return (
    <div>

    <div className="main-card-layout">
      <div className="ad-text">Alle Finanzen. Ein Dashboard.</div>
      <div className="ad-subtext">Verbinde deine Bankkonten, analysiere automatisch deine Ausgaben, erstelle visuelle Auswertungen und erhalte smarte Prognosen für deine finanzielle Zukunft.</div>
      <img src={dashboardImage} alt="dashboard-image" />
    </div>
    </div>
    
  );
}

export default Home;
