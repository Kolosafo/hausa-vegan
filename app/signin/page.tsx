"use client";
import React from "react";
import { firebaseAuth, firebaseProvider } from "@/firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { login } from "@/redux/features/userSlice";
const Page = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSignInWithGoogle = () => {
    signInWithPopup(firebaseAuth, firebaseProvider).then((result) => {
      const payloadData: User = {
        id: result.user.uid,
        displayName: result.user.displayName ?? "",
        photoUrl: result.user.photoURL ?? "",
        email: result.user.email ?? "",
      };
      dispatch(login(payloadData));
    });
  };
  return (
    <div>
      <p onClick={handleSignInWithGoogle} className="cursor-pointer">
        Sign in with google
      </p>
    </div>
  );
};

export default Page;
