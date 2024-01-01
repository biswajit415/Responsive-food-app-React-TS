import { useRouteError, isRouteErrorResponse } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();

  const isError = isRouteErrorResponse(err);

  return (
    <div>
      <h1>Oops...</h1>
      <h3>{isError ? err.status : 'Error occured'}</h3>
      <h3>{isError ? err?.statusText : null}</h3>
    </div>
  );
};

export default Error;
