import { db } from "..";
import { getDocs, collection, query, where } from "firebase/firestore"
import { createAdapterProdFromFirestore } from "../../../adapter/productAdapter";

export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId
            ? query(collection(db, "products"), where("country", "==", categoryId))
            : collection(db, "products")

        getDocs(collectionRef).then(response => {
            const adaptedProducts = response.docs.map(doc => {
                return createAdapterProdFromFirestore(doc)
            })
            resolve(adaptedProducts)
        }).catch(error => {
            reject(error)
        })
    })
}