import { useState } from "react";
import { EmailPop } from "../../styles/contact.style";

const EmailPopComponent = ({ show, setShow }) => {
  const [value, setValue] = useState("srinath@kubeed.com");
  const handleClick = () => {
    navigator.clipboard.writeText("srinath@kubeed.com");
    setValue("Email Copied!");
    setTimeout(() => {
      setValue("srinath@kubeed.com");
      setShow(!show);
    }, 1500);
  };
  return (
    <EmailPop.Wrapper show={show}>
      <EmailPop.Text type="text">{value}</EmailPop.Text>
      <EmailPop.Copy onClick={handleClick} title="Click to Copy Email" />
      <EmailPop.Close
        onClick={() => setShow(false)}
        title="Close this window"
      />
    </EmailPop.Wrapper>
  );
};

export default EmailPopComponent;
