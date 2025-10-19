'use client'
import { useState } from 'react';

export default function Home() {
  const [roll, setRoll] = useState<number | null>(null);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setRoll(randomNumber);
  };

  return (
    <main style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>🎲 Dice Roller</h1>
      <button onClick={rollDice} style={{ fontSize: '1.2rem', padding: '10px 20px' , cursor: 'pointer', textDecoration: 'underline'}}>
        Roll the Dice
      </button>
      {roll !== null && (
        <h2 style={{ marginTop: '2rem' }}>You rolled a: {roll}</h2>
      )}
    </main>
  );
}
