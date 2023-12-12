import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meanings);
  return (
    <div className="Meaning">
      <h3>{props.meanings.partOfSpeech}</h3>
      <p>
        <strong>Definition:</strong>
        {props.meanings.definition}
        <br />
        <strong>Example:</strong>
        <em>{props.meaning.example}</em>
        <Synonyms synonyms={props.meanings.synonyms} />
      </p>
    </div>
  );
}
