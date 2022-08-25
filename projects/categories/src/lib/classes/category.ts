// export const CATEGORIES_CONST = {                          //  THIS IS HOW DECLARE "CONST"
//     FOOD: 'food items',
//     TOYS: 'kids play things',
//     BOOKS: 'novels & stuff',
//     ELECTRONICS: 'electronic goods'
// }

export enum CATEGORIES_ENUM {                                // THIS IS HOW WE DECLARE ENUM
    FOOD = 'food items',
    TOYS = 'kids play things',
    BOOKS = 'novels & stuff',
    ELECTRONICS = 'electronic goods'
}

export interface Category {
    categoryName:string,
    belongsTo:CATEGORIES_ENUM,    
    isGstApplicable:boolean,
    isPerishable:boolean    
}