// This page is just basically to
// test out the cloud functions
// and redux
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import { checkLogin, pingServer } from "../store/actions/test";

const Test: NextPage = () => {
  const dispatch = useDispatch();
  const test = useSelector((state: any) => state.test);
  const pingServerTest = () => {
    dispatch(pingServer());
  };

  const loginCheck = () => {
    dispatch(checkLogin());
  };

  return (
    <div>
      <h1>This is a test to ping server</h1>
      <button onClick={pingServerTest}>
        {test.isLoading ? "Loading..." : "Ping Server"}
      </button>
      <h2>
        {test.success ? "Success" : test.failed ? "Failed" : "Not pinged"}
      </h2>
      <h3>Message: {test.message}</h3>

      <br />
      <h1>Check Login</h1>
      <button onClick={loginCheck}>Check</button>
      <h2>{test.success ? "Success" : !test.id ? "Failed" : "Not sent"}</h2>
      <h3>Message: {test.message}</h3>
    </div>
  );
};

export default Test;
