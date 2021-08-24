let size = gets();
Let line = gets();

let worlds = [];
let newLine = "";

// continnua enquanto as palavras forem validas.

While ( size.length > 0 && line.length > 0)

  
if (size.length <= 50) {
  for (i = 0; i < size.length; i++) {
    
    words = line.split(" ");
    words.sort((a, b) => b.length - a.length || a.localeCompare(b));
    newLine = words.join(" ");
    console.log(size);
    console.log(words);
    console.log(newLine);
  }
}