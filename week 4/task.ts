function toArray<T>(...args: T[]): T[]{
    return args;
}

const num = toArray(1, 5, 17, 18, 27, 52, 67);
const str = toArray('I am', 'doing', 'homework')
const bls = toArray(true, false)

console.log(num)
console.log(str)
console.log(bls)


function parseInput(input: string): number;
function parseInput(input: string, radix: number): number;

function parseInput(input: string, radix?: number): number { 
     return parseInt(input, radix);
}


interface Book {
  isbn: string;
  title: string;
  author: string;
  pages: number;
  inStockCount: number;
}

type BookCatalogItem = Omit<Book, 'inStockCount'>;

type LibraryCatalog = Record<Book["isbn"], BookCatalogItem>