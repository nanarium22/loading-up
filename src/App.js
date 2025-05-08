import React, { useEffect, useState } from 'react';
import './App.css';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2秒間ローディング表示（実際はwindow.onloadなどにできます）

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="App">
        <h1>ようこそ！</h1>
        <p>ローディングの後に表示されるコンテンツです。</p>
      </div>
    </>
  );
}

export default App;
