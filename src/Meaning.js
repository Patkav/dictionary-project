import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meanings);
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>
      <p>
        <div className="definition">{props.meanings.definition}</div>

        <div className="example">{props.meanings.example}</div>
        <Synonyms synonyms={props.meanings.synonyms} />
      </p>
    </div>
  );
}
