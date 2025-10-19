'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import RollHistory from './components/rollHistory';

export default function Home() {
  const [roll, setRoll] = useState<number | null>(null);
  const [name, setName] = useState('');

  const handleRoll = async () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setRoll(result);

    if (name) {
      const { error } = await supabase.from('rolls').insert([{ name, result }]);
      if (error) {
        console.error('Error saving roll:', error.message);
      }
    }
  };

  return (
    <main style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>🎲 Dice Roller</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ fontSize: '1rem', padding: '8px', marginBottom: '1rem' }}
      />
      <br />
      <button onClick={handleRoll} style={{ fontSize: '1.2rem', padding: '10px 20px' }}>
        Roll the Dice
      </button>
      {roll !== null && (
        <h2 style={{ marginTop: '2rem' }}>You rolled a: {roll}</h2>
      )}
      <RollHistory></RollHistory>
    </main>
  );
}
