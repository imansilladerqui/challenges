export default function contains(store, product) {
  return new RegExp(`:"${product}"`, 'i').test(JSON.stringify(store));
}
