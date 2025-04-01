import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const itemsCol = collection(db, "users", userId, "items");
  const q = query(itemsCol);
  const snapshot = await getDocs(q);
  const items = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));
  return items;
}

export async function addItem(userId, item) {
  const itemsCol = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCol, item);
  return docRef.id;
}
