/** Data layer — keep Supabase / DB access here, not in routes or controllers. */
export async function getHealthStatus() {
  return {
    ok: true,
    service: 'lazy-guy-api',
    timestamp: new Date().toISOString(),
  };
}
