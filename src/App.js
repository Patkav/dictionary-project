import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword={"sunset"} />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by {""}
            <a
              href="https://www.shecodes.io/graduates/70979-patricia-kavanaugh"
              target="_blank"
              rel="noreferrer"
            >
              Patricia Kavanaugh
            </a>{" "}
            and is {""}
            <a
              href="https://github.com/Patkav/dictionary-project"
              target="_blanck"
              rel="noreferrer"
            >
              open-sourced on Github
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
