import {
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase.config";

export default function usePage() {
  const createMyPage = async (
    email,
    Link,
    ServiceMain,
    basicPrice,
    basicText,
    expertPrice,
    expertText,
    proPrice,
    proText
  ) => {
    try {
      const docRef = await updateDoc(doc(db, "users", email), {
        Link,
        ServiceMain,
        basicPrice,
        basicText,
        expertPrice,
        expertText,
        proPrice,
        proText,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  /** email, Link(소개글), SNSLink(회사링크) */
  const createMyPageAD = async (email, Link, SNSLink, UsedSNS) => {
    try {
      const docRef = await updateDoc(doc(db, "users", email), {
        Link,
        SNSLink,
        UsedSNS,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return { createMyPage, createMyPageAD };
}
