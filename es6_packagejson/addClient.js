import fs from 'fs';

export const createText = () => {
  return fs.writeFileSync('texto.txt', '1) Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, distinctio \n');
}

export const appendText = () => {
  return fs.appendFileSync('texto.txt', '2) Ex sit nobis deserunt modi, beatae corrupti soluta molestias nesciunt ipsum. Vero. \n');
}

export const addOp = (a, b) => {
  console.log(a + b);
}