import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwC3C6XKM2iYiBz7XKSZQD9WiVu9v-awmUMQ&usqp=CAU" />
      <h1>{`${status}:${statusText}`}</h1>
    </div>
  );
};
export default Error;
