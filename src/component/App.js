import '../styles/App.css';

function App() {
  //#region Question 1
  //Écrivez une fonction findLargestNumber qui prend en entrée un tableau de nombres et renvoie le plus grand nombre. Utilisez la 
  //fonction Math.max() et l'opérateur de diffusion (...) pour trouver le plus grand nombre.
  const tableauDeNombres = [61, 25, 43, 24, 35, 64]

  function findLargestNumber(numbers) {
    var _result = Math.max(...numbers)
    console.log(_result)
    return _result;
  }
  console.log("Question 1")
  findLargestNumber(tableauDeNombres);
  //#endregion

  //#region Question 2
  // Écrivez une fonction sortWords qui prend en entrée un tableau de mots et renvoie les mots triés alphabétiquement. Utilisez 
  // la méthode sort() et la syntaxe de fonction flèche pour trier les mots.
  const tableauDeMots = ['bonjour', 'salut', 'hello', 'hola', 'ciao', 'ni hao'];
  function sortWords(words) {
    var _result = words.sort();
    console.log(_result)
    return _result;
  }
  console.log("Question 2")
  sortWords(tableauDeMots);
  //#endregion

  //#region Question 3
  //Écrivez une fonction countOccurrences qui prend en entrée une chaîne de caractères et un caractère, et renvoie le nombre de fois que le caractère 
  // apparaît dans la chaîne. Utilisez la méthode includes() et une boucle for-of pour compter les occurrences du caractère.
  function countOccurrences(_chaine, _caractere) {
    let count = 0;
    for (let letter of _chaine) {
      if (letter.includes(_caractere)) {
        count++;
      }
    }
    console.log(count)
  }
  console.log("Question 3")
  countOccurrences("Bonjour", "o");
  //#endregion

  //#region Question 4
  function flattenArray(_tableau) {
    console.log(_tableau.flat())
  }
  console.log("Question 4")
  flattenArray([[1, 2], [3, 4], [5, 6]])
  //#endregion

  //#region Question 5
  function removeDupes(_tableau) {
    console.log(Array.from(new Set(_tableau)));
  }
  console.log("Question 5")
  removeDupes([1, 2, 2, 3, 3, 3])
  //#endregion

  //#region Question 6
  function swapVariables(x, y) {
    console.log([y, x]);
  }
  console.log("Question 6")
  swapVariables(1, 2)

  //#endregion

  //#region Question 7
  function parseObject(_Object) {
    console.log([...Object.values(_Object)]);
  }
  console.log("Question 7")
  parseObject({ a: 1, b: 2, c: 3 });
  //#endregion

  //#region Question 8
  function mergeObjects(_objet1, _objet2) {
    console.log({ ..._objet1, ..._objet2 });
  }
  console.log("Question 8")
  mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 })
  //#endregion

  //#region Question 9
  function sumArray(tableau) {
    console.log(tableau.reduce((acc, val) => acc + val, 0));
  }
  console.log("Question 9")
  sumArray([1, 2, 3, 4])
  //#endregion

  //#region Question 10
  function sortObject(_Object) {
    let array = [];
    for (const key in _Object) {
      array.push({ [key]: _Object[key] })
    }
    console.log(array.sort((a, b) =>
      a[Object.keys(a)[0]] - b[Object.keys(b)[0]]
    ))
  }
  console.log("Question 10")
  sortObject({ b: 2, a: 1, c: 3 });
  //#endregion

  return (
    <div className="App">
    </div>
  );
}

export default App;
