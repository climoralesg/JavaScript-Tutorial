class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) { // se convierte en el addres hash
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length; // charCodeAt genera un numero
        }
        console.log(hash);
        return hash;
    }

    set(key, value){
        const address =this.hashMethod(key);
        if(!this.data[address]){
            this.data[address]=[];
        }
        this.data[address].push([key,value]);
        return this.data;
    }
    get(key){
        const address=this.hashMethod(key);
        const currentBucket=this.data[address];
        if(currentBucket){
            for (let i=0;i < currentBucket.length;i++){
                if(currentBucket[i][0]=== key){
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;

    }

}

const myHashTable = new HashTable(50)
myHashTable.set("Diego", 1990);
myHashTable.set("Mariana", 1998);
myHashTable.set("Adriana", 2000);
myHashTable.get("Diego");
