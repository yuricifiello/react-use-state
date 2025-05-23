import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import languages from "./data/languages";

console.log(languages);

export default function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Learn Web development</h1>

      <div className="mb-4">
        {languages.map((language) => (
          <button
            key={language.id}
            className={`btn me-2 ${
              selectedLanguage.id === language.id
                ? "btn-warning"
                : "btn-primary"
            }`}
            onClick={() => handleLanguageChange(language)}
          >
            {language.title}
          </button>
        ))}
      </div>

      <div className="card">
        <div className="card-body">
          <h3>{selectedLanguage.title}</h3>
          <p>{selectedLanguage.description}</p>
        </div>
      </div>
    </div>
  );
}
