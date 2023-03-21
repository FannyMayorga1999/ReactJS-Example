class human{
    constructor(){
        this.gender = 'female'
        
    }

    printGender(){
        console.log("🚀 ~ file: class_26_02_23.js:8 ~ human ~ constructor ~ this.gender:", this.gender)
    }
    
}


class person extends human{
    constructor(name){
        super();
        this.name = name;
    }


    printName(){
        console.log("🚀 ~ file: class_26_02_23.js:22 ~ person ~ constructor ~ this.name:", this.name)
    }
}

const nombrePersoan = new person('Fanny');
nombrePersoan.printName();
nombrePersoan.printGender();