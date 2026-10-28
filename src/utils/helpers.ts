export function text(t: string) {
  return { content: [{ type: "text" as const, text: t }] };
}

const STOPWORDS = new Set([
  "the", "and", "with", "for", "a", "an", "of", "to", "in", "on",
  "make", "create", "build", "give", "me", "screen", "page", "ui",
  "component", "using", "native", "base", "please",
]);

export function tokenize(query: string): string[] {
  return query
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((t) => t.length > 1 && !STOPWORDS.has(t));
}

/** Simple keyword scoring: how many query tokens hit the haystack. */
export function score(query: string, haystack: string[]): number {
  const tokens = tokenize(query);
  const hay = haystack.map((h) => h.toLowerCase());
  let total = 0;
  for (const t of tokens) {
    for (const h of hay) {
      if (h === t) total += 3;
      else if (h.includes(t) || t.includes(h)) total += 1;
    }
  }
  return total;
}