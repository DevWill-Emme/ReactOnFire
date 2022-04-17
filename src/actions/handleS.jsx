import firebase from "../firebase-config"
import {addDoc, collection, doc, getFirestore, setDoc} from "firebase/firestore"

const db = getFirestore(firebase)

export const dbAdd = async (collections,
                            dataToAdd = {},
                            id) => {
    if (id) {
        return await setDoc(doc(db, collections, id), dataToAdd)
            .then(() => console.log("success to add"))
            .catch(err => console.log(err.message))
    } else {
        return await addDoc(collection(db, collections), dataToAdd)
            .then(() => console.log("success to add"))
            .catch(err => console.log(err.message))
    }
}