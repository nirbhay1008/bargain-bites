import { firestore } from "../firebase.config";
import { doc , setDoc } from "firebase/firestore";

// saving new items
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "fooditems", `${Date.now()}`), data, {
    merge: true,
  });
};
