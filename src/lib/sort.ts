export function sortByDateDesc<T extends { sortDate: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
}
