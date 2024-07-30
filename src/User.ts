export class User{
    private name:string;
    private email:string;

    constructor(name: string, email: string){
        this.name = name;
        this.email = email;
    }

    public borrowBook(bookTitle: string):void{
        console.log(`${this.name} has borrowed the book ${bookTitle}`);
    }

    public manageLibrary():void{
        console.log(`${this.name} is managing the library`);
    }
}