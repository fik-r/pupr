import { useEffect, useState } from "react";
import classnames from "classnames";

const ToastError = (msg) => {
  return {
    id: Math.random(),
    value: msg,
  };
};

const ToastSuccess = (msg) => {
  return {
    id: Math.random(),
    value: msg,
  };
};

const FrToast = (props) => {
  const { error = { id: 0, value: "" }, success = { id: 0, value: "" } } =
    props;
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const alertTimeout = 5000;
  useEffect(() => {
    setMessage(error.value);
    setIsError(true);
    setIsSuccess(false);
    setTimeout(() => {
      setIsError(false);
      setIsSuccess(false);
      setMessage("");
    }, alertTimeout);
    return () => {
      clearTimeout();
    };
  }, [error.id]);

  useEffect(() => {
    setMessage(success.value);
    setIsSuccess(true);
    setIsError(false);
    setTimeout(() => {
      setIsError(false);
      setIsSuccess(false);
      setMessage("");
    }, alertTimeout);
    return () => {
      clearTimeout();
    };
  }, [success.id]);

  return (
    <>
      {message && (
        <div
          className={classnames(
            "fixed top-0 right-0 rounded-[5px] m-5 w-auto alert text-white",
            isSuccess ? "alert-success" : "",
            isError ? "alert-error" : ""
          )}
        >
          <div>
            {isSuccess && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            {isError && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
            <span>{message}</span>
          </div>
        </div>
      )}
    </>
  );
};

export { FrToast, ToastError, ToastSuccess };
