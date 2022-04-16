import {initializeApp} from "firebase/app";
import fireConfig from "../firebase-config";
import {addDoc, collection, doc, getFirestore, setDoc} from "firebase/firestore"

const db = getFirestore(initializeApp(fireConfig))

export const dbAdd = async (collections,
                            dataToAdd = {},
                            id = false) => {
    if (id !== false) {
        return await setDoc(doc(db, collections, id), dataToAdd)
        .then(() => console.log("success to add"))
        .catch(err => console.log(err.message))
    } else {
        return await addDoc(collection(db, collections), dataToAdd)
        .then(() => console.log("success to add"))
        .catch(err => console.log(err.message))
    }
}

export const setupContent = (gateway, periphericos) => {

}