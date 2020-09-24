export function saveToStorage(listKey, value) {
  localStorage.setItem(listKey, JSON.stringify(value));
}

export function getItem(listKey) {
  const value = localStorage.getItem(listKey);

  if (value === null) {
    return [];
  }
  return JSON.parse(value);
}
