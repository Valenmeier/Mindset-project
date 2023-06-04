import { Link, useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  
  return (
    <div>
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error.statusText || error.message}</p>
      <Link to="/">Volver al home</Link>
    </div>
  );
};

export default NotFound;
