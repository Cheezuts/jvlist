import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Logo from "../components/Logo";

const About = () => {
  const [console, setConsole] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    // You can use the console, name, detail, and status states to access the form data
    // For example, you can send a POST request to your API to add the game to the database
    // Don't forget to reset the form fields and display a success message after submission
  };

  return (
    <div>
      <Logo />
      <Navigation />
      <h1>Ajoute un jeu à ta liste </h1>
      <div id="message" className="text-center m-2 p-2">
        {message}
      </div>
      <form id="add-jeu-form" onSubmit={handleSubmit}>
        <label htmlFor="jeu-console" className="m-2 p-2 text-center">
          Console :
        </label>
        <select
          id="jeu-console"
          name="jeu-console"
          required
          className="m-2 p-2"
          value={console}
          onChange={(e) => setConsole(e.target.value)}
        >
          <option value="">-- Sélectionner une console --</option>
          <option value="ps1">PlayStation 1</option>
          <option value="ps2">PlayStation 2</option>
          <option value="n64">Nintendo 64</option>
        </select>

        <label htmlFor="jeu-name" className="m-2 p-2 text-center">
          Nom du jeu :
        </label>
        <input
          type="text"
          id="jeu-name"
          name="jeu-name"
          required
          placeholder="ex : Mario 64"
          className="m-2 p-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="jeu-detail" className="m-2 p-2 text-center">
          Détail :
        </label>
        <input
          type="text"
          id="jeu-detail"
          name="jeu-detail"
          required
          placeholder="ex : TBE"
          className="m-2 p-2"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />

        <label htmlFor="jeu-status" className="m-2 p-2 text-center">
          Statut :
        </label>
        <select
          id="jeu-status"
          name="jeu-status"
          required
          className="m-2 p-2 text-center"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="true">Obtenu</option>
          <option value="false">À obtenir</option>
          <option value="waiting">En attente</option>
        </select>

        <button type="submit" className="btn btn-primary m-2 p-2 text-center">
          Ajouter le jeu
        </button>
        <button className="btn btn-primary">Click me</button>
      </form>
    </div>
  );
};

export default About;
