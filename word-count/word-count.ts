export default class Words {
  count(input: string): Map<string, number> {

    const counts = new Map();
    let items = input.trim().toLowerCase();
    let itemArr = items.split(' ');
    itemArr.forEach( (word) => counts.set(word, counts.get(word) + 1 || 1));

    return counts;
  }
}
