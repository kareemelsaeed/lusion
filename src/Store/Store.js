import { createContext } from "react";

const Store = createContext({
    storeProduct: [],
    storeItems: [],
    storeBestSell:[],
    storeAdd: ()=>{},
    storeCart: [],
    storeDecreas: ()=>{},
    storeDel: ()=>{},
    storeTotalPrice: ()=>{},
    storePrice: 0 ,
    storeUsers: [],
})

export default Store;