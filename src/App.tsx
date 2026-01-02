import { useState } from 'react';
import './App.css';

/**
 * App コンポーネントはシンプルなカウンターアプリです。
 * ボタンをクリックするたびにカウントが 1 増えます。
 */
export default function App() {
  // count という名前の状態を定義し、初期値を 0 に設定します。
  const [count, setCount] = useState<number>(0);

  // ボタンがクリックされたときに count を更新する関数
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="App">
      <h1>ようこそ！</h1>
      <p>このアプリは React と TypeScript の基本を学ぶためのサンプルです。</p>
      <p>ボタンをクリックした回数: <strong>{count}</strong></p>
      <button onClick={handleClick}>クリックして数を増やす</button>
    </div>
  );
}
