const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.DB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    authors: ["J.K. Rowling"],
    description: "Turning the envelope over, his hand trembling, Harry saw a purple wax seal bearing a coat of arms; a lion, an eagle, a badger and a snake surrounding a large letter 'H'. Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. An incredible adventure is about to begin!",
    image: "http://books.google.com/books/content?id=39iYWTb6n6cC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    href: "http://books.google.com/books?id=39iYWTb6n6cC&dq=harry+potter&hl=&cd=8&source=gbs_api"
  },
  {
    title:  "The Da Vinci Code",
    authors: ["Dan Brown"],
    description: "MORE THAN 80 MILLION COPIES SOLD Nominated as one of America’s best-loved novels by PBS’s The Great American Read While in Paris, Harvard symbologist Robert Langdon is awakened by a phone call in the dead of the night. The elderly curator of the Louvre has been murdered inside the museum, his body covered in baffling symbols. As Langdon and gifted French cryptologist Sophie Neveu sort through the bizarre riddles, they are stunned to discover a trail of clues hidden in the works of Leonardo da Vinci—clues visible for all to see and yet ingeniously disguised by the painter. Even more startling, the late curator was involved in the Priory of Sion—a secret society whose members included Sir Isaac Newton, Victor Hugo, and Da Vinci—and he guarded a breathtaking historical secret. Unless Langdon and Neveu can decipher the labyrinthine puzzle—while avoiding the faceless adversary who shadows their every move—the explosive, ancient truth will be lost forever.",
    image: "http://books.google.com/books/content?id=ohZ1wcYifLsC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    href: "http://books.google.com/books?id=ohZ1wcYifLsC&printsec=frontcover&dq=da+vinci+code&hl=&cd=1&source=gbs_api"
  }
  
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
