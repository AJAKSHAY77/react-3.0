import { useEffect, useState } from "react";

const useonoffInternet = () => {

  const [onLine, setonLine] = useState(true);
  const online = (onlinefuntion = () => setonLine(true));
  const offline = (offlinefuntion = () => setonLine(false));
 

  useEffect(() => {
    window.addEventListener("online", online);
    window.addEventListener("offline", offline);

    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  }, []);
  return onLine;
};
export default useonoffInternet;
