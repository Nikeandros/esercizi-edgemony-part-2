
import React, { useState } from 'react';
import Layout from '../src/components/Layout';

const DynamicContent = () => {
  return <p>Questo è un contenuto dinamico!</p>;
};

function App() {
  const [text, setText] = useState("Testo iniziale");

  return (
    <Layout>
      <p>{text}</p>
      <button onClick={() => setText("Testo aggiornato!")}>Aggiorna Testo</button>
      <DynamicContent />
    </Layout>
  );
}

export default App;
