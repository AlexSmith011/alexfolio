export function sortByDateDesc<T extends { sortDate: string; order?: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => {
    // 1. If both items have a custom order, sort by that ascending (1, 2, 3...)
    if (a.order !== undefined && b.order !== undefined) {
      return a.order - b.order;
    }
    // 2. If only one has an order, push it to the top
    if (a.order !== undefined) return -1;
    if (b.order !== undefined) return 1;

    // 3. Fallback to original date descending sort if no order is specified
    return b.sortDate.localeCompare(a.sortDate);
  });
}
