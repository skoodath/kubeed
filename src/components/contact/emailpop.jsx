import { useRef, useState } from "react";
import { EmailPop } from "../../styles/contact.style";

const EmailPopComponent = ({ show, setShow }) => {
  const inputRef = useRef(null);
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
      <EmailPop.Text type="text" value={value} readOnly ref={inputRef} />
      <EmailPop.Copy onClick={handleClick} title="Click to Copy Email" />
    </EmailPop.Wrapper>
  );
};

export default EmailPopComponent;
