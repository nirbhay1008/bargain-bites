import { firestore } from "../firebase.config";
import { doc , getDocs,
  orderBy,
  query,
  setDoc, collection} from "firebase/firestore";

// saving new items
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// get all food-items
export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "foodItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};

