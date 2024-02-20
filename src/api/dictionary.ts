import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseInitialize";
import { Locale } from "@/src/i18n.config";



export const getDictionary = async (locale: Locale) => {
  try {
    const docRef = doc(db, "dictionaries", locale); // Ссылка на документ в коллекции
    const docSnap = await getDoc(docRef); // Получение документа из Firestore
    if (docSnap.exists()) {
      return docSnap.data(); // Возвращаем данные документа
    } else {
      throw new Error(`Dictionary for locale "${locale}" not found`);
    }
  } catch (error) {
    console.error('Error getting dictionary:', error);
    throw error;
  }
}

