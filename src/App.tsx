import { useState } from 'react';

function App() {
  const [response, setResponse] = useState('');

  const handleClick = async () => {
    setResponse("⏳ Ждём ответ от Claude 3...");
    // Тут будет запрос к AWS Bedrock, если захочешь
    // Пример: const res = await fetch(...);
    // setResponse(await res.text());
  };

  return (
    <div className="card">
      <h1>AI Recipe Generator</h1>
      <p>Нажми, чтобы получить рецепт от Claude 3:</p>
      <button onClick={handleClick}>🍽️ Сгенерировать</button>
      <pre>{response}</pre>
    </div>
  );
}

export default App;
