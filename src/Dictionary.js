import React, { useState } from "react";
import axios from "axios";
import Photos from "./Photos";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data);
  }

  function handleSheCodesResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    // documentation : https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "4e73714c1tadb83363cf2o8c24a08c12";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  let sheCodesApiKey = "4e73714c1tadb83363cf2o8c24a08c12";
  let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${sheCodesApiKey}`;
  axios.get(sheCodesApiUrl).then(handleSheCodesResponse);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up ?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunset, beach, wine, yoga...
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
