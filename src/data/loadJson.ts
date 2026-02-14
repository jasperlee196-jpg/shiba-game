// Minimal helper: load JSON using fetch (works well with Vite's /public folder).
// If using Phaser's built-in loader instead, you can use this.load.json(...) and cache.json.get(...).

export async function loadJson<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status} ${res.statusText}`);
  return (await res.json()) as T;
}
