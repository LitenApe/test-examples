import { useState } from "react";

export default function ShowHideAlert() {
  const [show, setShow] = useState(false);

  // essentially mimicking a http request
  function clickHandler() {
    setTimeout(() => {
      setShow(prev => !prev)
    }, 1);
  }

  return (
    <>
      <button onClick={clickHandler}>Click Me</button>
      {show && <div role="alert">Alert</div>}
    </>
  )
}
