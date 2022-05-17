// This page is just basically to
// test out the cloud functions
// and redux
import { NextPage } from "next";
import { useSelector, useDispatch } from "react-redux";
import { sendMail } from "../store/actions/test";

const Test: NextPage = () => {
  const dispatch = useDispatch();
  const test = useSelector((state: any) => state.test);
  const sendMailTest = () => {
    dispatch(sendMail());
  };

  return (
    <div>
      <h1>This is a test to send email</h1>
      <button onClick={sendMailTest}>
        {test.isLoading ? "Loading..." : "Send Mail"}
      </button>
      <h2>{test.success ? "Success" : test.failed ? "Failed" : "Not sent"}</h2>
      <h3>Message: {test.message}</h3>
    </div>
  );
};

export default Test;
