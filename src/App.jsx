import { useState } from "react";
import { Form } from "./components/Form";
import { Card } from "./components/Card";

const INITIAL_FEEDBACK = {
  name: "",
  color: "",
  error: "",
};

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [result, setResult] = useState(INITIAL_FEEDBACK);

  const handleSuccess = (name, color) => setResult({ name, color, error: "" });

  const handleError = (message) =>
    setResult({ name: "", color: "", error: message });

  const handleReset = () => setResult(INITIAL_FEEDBACK);

  return (
    <main>
      <h1>Descubre tu color de la suerte</h1>
      <Form
        onSuccess={handleSuccess}
        onError={handleError}
        onReset={handleReset}
      />
      {result.color && <Card name={result.name} color={result.color} />}
      {result.error && <p className="error-message">{result.error}</p>}
    </main>
  );
}

export default App;
