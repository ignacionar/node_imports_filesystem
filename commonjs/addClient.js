const fs = require('fs');

module.exports = {
  createText: () => {
    return fs.writeFileSync('texto.txt', '1) Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, distinctio \n');
  },
  appendText: () => {
    return fs.appendFileSync('texto.txt', '2) Ex sit nobis deserunt modi, beatae corrupti soluta molestias nesciunt ipsum. Vero. \n');
  }
}