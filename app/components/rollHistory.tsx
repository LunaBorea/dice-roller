import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

type Roll = {
  id: string;
  name: string;
  result: number;
  created_at: string;
};

export default function RollHistory() {
  const [rolls, setRolls] = useState<Roll[]>([]);

  useEffect(() => {
    const fetchRolls = async () => {
      const { data, error } = await supabase
        .from('rolls')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (!error && data) setRolls(data);
    };

    fetchRolls();
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>🧾 Recent Rolls</h2>
      <ul>
        {rolls.map((roll) => (
          <li key={roll.id}>
            {roll.name} rolled a {roll.result} at {new Date(roll.created_at).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
}