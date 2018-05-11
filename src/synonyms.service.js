let cnt = 1;

export const getMockSynonyms = seed => {
  return Promise.resolve([`${seed}-${cnt++}`, `${seed}-${cnt++}`]);
  // return Promise.reject(new Error('☹ Somethig went wrong with the synonyms service ☹'));
};

export default async (seed) => {
  const url = `https://api.datamuse.com/words?rel_syn=${seed}`;
  const response = await fetch(url);
  const json = await response.json();
  return json.map(({ word }) => word);
};
