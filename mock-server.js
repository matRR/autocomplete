export default function getItems(search) {
  console.log(`Fatching ${search}`);
  return new Promise((resolve, reject) => {
    // simulates that first query may completes after second query
    window.setTimeout(() => {
      resolve([
        search, 
        'Item 2', 
        `Item random ${Math.random()}`, 
        `Item 2 random ${Math.random()}`
      ]);
    }, 500 + (Math.random() * 500));
  });
}