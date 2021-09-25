import React, { useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [fullName, setFullName] = useState();
  const [country, setCountry] = useState();
  const [currency, setCurrency] = useState();
  const [loanAmount, setLoanAmount] = useState();
  const [loanDuration, setLoanDuration] = useState();
  const [loanActivation, SetLoanActivation] = useState();
  const [loading, setLoading] = useState(true);
  function signup(email, password, fullName, phone, country, currency) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then(function (response) {
        db.collection("users").doc(response.user.uid).set(
          {
            fullName,
            email,
            phone,
            country,
            currency,
            loanAmount: 0,
            loanDuration: "",
            loanActivation: "pending",
          },
          { merge: true }
        );
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(function (user) {
      setCurrentUser(user);

      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const [trueMessage, setTrueMessage] = useState("");

  if (currentUser) {
    // get user info
    db.collection("users")
      .doc(currentUser.uid)
      .onSnapshot((doc) => {
        setFullName(doc.data().fullName);
        setCountry(doc.data().country);
        setCurrency(doc.data().currency);
        setLoanAmount(doc.data().loanAmount);
        setLoanDuration(doc.data().loanDuration);
        SetLoanActivation(doc.data().loanActivation);
      });
  }

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    fullName,
    country,
    currency,
    loanAmount,
    loanDuration,
    loanActivation,
    trueMessage,
    setTrueMessage,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
