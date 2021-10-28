class Item{

    static lastItem = 0; // class variables, static is used to define a class variable that is shared by all instances of the class(obj/constructor).
    // The use of class Variables out of the constructor is to not change the value of the variable for all instances of the class.

    constructor(text){ // constructor is a special method that is called when a new object is created.
        this.id = Item.lastItem++;
        this.text = text;
        this.done = false
    }
}

export default Item;