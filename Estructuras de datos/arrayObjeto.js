class myArray{
    constructor(){
        this.length=0;
        this.data={};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length]=item;
        this.length++;
    }

    pop(){
        const lastItem=this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem;
    }

    delete (index){
        const item=this.data[index];
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index){
        for(i=index;i<this.length-1;i++){
            this.data[i]=this.data[i+1];
        }
        delete this.data[this.length-1];
        this.length--;
    }
}

const myArray = new myArray();
myArray.push("Jose");
