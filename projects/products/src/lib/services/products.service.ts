import { Observable, of } from "rxjs";
import { Product } from "../classes/product";

export class ProductsService {

    products:Product[] = [
        { itemName: 'Mirinda', mrp: '20', manufacturer: 'Pepsi', category: 'Cool Drinks'},
        { itemName: '7up', mrp: '20', manufacturer: 'Pepsi', category: 'Cool Drinks'},
        { itemName: 'Samsung LED', mrp: '20000', manufacturer: 'SAMSUNG', category: 'TVs'},
        { itemName: 'Poco M3', mrp: '11000', manufacturer: 'Xiomi', category: 'Cool Drinks'},
        { itemName: 'Tinkle Digest', mrp: '20', manufacturer: 'Amar Chitra Katha', category: 'Books'},
        { itemName: 'Basmati', mrp: '80', manufacturer: 'Lalitha traders', category: 'Food'},
        { itemName: 'Mango', mrp: '150', manufacturer: 'Pranavi export & co', category: 'Food'},
        // { itemName: 'Mirinda', mrp: '20', manufacturer: 'Pepsi', category: 'Cool Drinks'},
        // { itemName: 'Mirinda', mrp: '20', manufacturer: 'Pepsi', category: 'Cool Drinks'}
    ]
    constructor() { }

    getProducts():Observable<any> {
        return of(this.products);
    }
}