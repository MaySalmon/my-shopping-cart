export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageurl: string;

    constructor(id, name, description='this is a item description' ,price = 0,imageurl='https://6lli539m39y3hpkelqsm3c2fg-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/Rubiks_Cube_shutterstock_271810067-675x380.jpg'){
        this.id=id;
        this.name= name;
        this.description=description;
        this.price=price;
        this.imageurl=imageurl;
    }
}

