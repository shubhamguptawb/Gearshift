import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBeJg5crF7u6qmTkz0VIBtcAK6HzS7aXpU",
    authDomain: "gearshift-951e1.firebaseapp.com",
    projectId: "gearshift-951e1",
    storageBucket: "gearshift-951e1.appspot.com",
    messagingSenderId: "146422264336",
    appId: "1:146422264336:web:7e43c9d9f7e550ebddd095"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export async function getDocumentListFromFirebase(required_value: string) {
    try {
        const querySnapshot = await getDocs(collection(db, required_value));
        let array: any[] = []
        querySnapshot.forEach((doc) => {
            array.push(doc.data())
        });
        return {
            success: true,
            data: array,
            error: null
        }
    } catch (error) {
        return {
            success: false,
            error: error,
            data: null
        }
    }
}