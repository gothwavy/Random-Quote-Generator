function generateQuote(){
  let quotes = {
    "― Madeline Miller" : '“Bury us, and mark our names above. Let us be free.”',
    "― Aaron Lauritsen" : '“There is strange comfort in knowing that no matter what happens today, the Sun will rise again tomorrow.”',
    "― Alysha Speer" : '“You never really know what`s coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.”',
    "― Monique Duval" : '“She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky.”'
  }

  let authors = Object.keys(quotes);

  let author = authors[Math.floor(Math.random() * authors.length)];

  let quote = quotes[author];

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("author").innerHTML = author;
}