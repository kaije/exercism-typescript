export default class Words {
  count(input: string): Map<string, number> {
    const counts = new Map();
    const items = input.trim().toLowerCase();
    const itemArr = items.split(/\s/);
    itemArr.forEach((word) => counts.set(word, counts.get(word) + 1 || 1));

    return counts;
  }
}
