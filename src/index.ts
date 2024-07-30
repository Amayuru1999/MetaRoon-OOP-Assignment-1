import {Book} from "./Book";
import {LibraryCatalogue} from "./LibraryCatalogue";


const book1=new Book(1,"Madol Duwa","Martin Wickramasinghe","9789552000000");
const book2=new Book(2,"Giraya","Martin Wickramasinghe","9789552000001");

const libraryCatalogue = new LibraryCatalogue();

//Adding items to the library
libraryCatalogue.addItem(book1);
libraryCatalogue.addItem(book2);

//Displaying items in the library
libraryCatalogue.displayItems();