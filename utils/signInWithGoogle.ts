import { firebaseAuth, firebaseProvider } from "@/firebase";
import { login } from "@/redux/features/userSlice";
import { signInWithPopup } from "firebase/auth";

export const handleSignInWithGoogle = (dispatch: any) => {
  signInWithPopup(firebaseAuth, firebaseProvider)
    .then((result) => {
      const payloadData: User = {
        id: result.user.uid,
        displayName: result.user.displayName ?? "",
        photoUrl: result.user.photoURL ?? "",
        email: result.user.email ?? "",
      };
      dispatch(login(payloadData));
    })
    .catch((e) => console.log("FIREBASE AUTH ERROR", e));
};
