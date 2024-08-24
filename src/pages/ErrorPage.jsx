import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>😔Sorry, an unexpected error has occurred.</p>
      <p className="er-p">Page {error.statusText || error.message} ⚠️</p>
    </div>
  );
}

export default ErrorPage;
