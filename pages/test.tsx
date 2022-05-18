// This page is just basically to
// test out the cloud functions
// and redux
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import { checkLogin, pingServer } from "../store/actions/test";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { useState } from "react";

const Test: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const test = useSelector((state: any) => state.test);

  const [userInSession] = useAuthState(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithEmailAndPassword, loginUser, loginLoading, loginError] =
    useSignInWithEmailAndPassword(auth);

  const pingServerTest = () => {
    dispatch(pingServer());
  };

  const loginCheck = () => {
    dispatch(checkLogin());
  };

  const signup = () => {
    createUserWithEmailAndPassword(email, password);
  };

  const login = () => {
    signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    auth.signOut();
  };

  return (
    <div>
      <h1>{`This is a test to ping server - Hello, ${userInSession}`}</h1>
      <button onClick={pingServerTest}>
        {test.isLoading ? "Loading..." : "Ping Server"}
      </button>
      <h2>
        {test.success ? "Success" : test.failed ? "Failed" : "Not pinged"}
      </h2>
      <h3>Message: {test.message}</h3>

      <br />
      <h1>
        Signup and Login -{" "}
        {loading ? "Signup Loading" : loginLoading ? "Login Loading" : ""}
      </h1>
      <h3 style={{ color: "red" }}>
        {error
          ? "Signup error - " + error
          : loginError
          ? "Login Error - " + loginError
          : ""}
      </h3>
      <h2>{`User - ${user?.user.uid || loginUser?.user.uid}`}</h2>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={login}>
          Login
        </button>
        <button type="button" onClick={signup}>
          Signup
        </button>
      </form>

      <br />
      <h1>Check Login</h1>
      <button onClick={loginCheck}>Check</button>
      <h2>{test.success ? "Success" : !test.id ? "Failed" : "Not sent"}</h2>
      <h3>Message: {test.message}</h3>

      <br />
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Test;
