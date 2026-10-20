import { useEffect, useState } from 'react';
import { getHealth } from '../services/api.js';

export default function HealthPage() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;
    getHealth()
      .then((data) => {
        if (!cancelled) setStatus(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section>
      <h1>API Health</h1>
      {error && <p role="alert">{error}</p>}
      {status && (
        <pre>{JSON.stringify(status, null, 2)}</pre>
      )}
      {!error && !status && <p>Loading…</p>}
    </section>
  );
}
