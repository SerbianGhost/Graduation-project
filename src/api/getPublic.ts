import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseInitialize"; 

export const getPublic = async (documentName: string) => {
    try {
      const docRef = doc(db, "public",documentName); // Ссылка на документ в коллекции
      const docSnap = await getDoc(docRef); // Получение документа из Firestore
      if (docSnap.exists()) {
        return docSnap.data(); // Возвращаем данные документа
      } else {
        throw new Error(`public not found`);
      }
    } catch (error) {
      console.error('Error getting public:', error);
      throw error;
    }
  }
