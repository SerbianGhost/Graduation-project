import { getFirestore} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Получение экземпляра Firestore
export const db = getFirestore(app);