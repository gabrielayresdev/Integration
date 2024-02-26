import React from "react";
import api from "../services/api";
import { AxiosRequestConfig } from "axios";

type Method = "get" | "post" | "delete" | "put";

function useFetch<T>(
  url: string,
  method: Method,
  options: (RequestInit & AxiosRequestConfig<RequestInit>) | undefined
) {
  const [data, setData] = React.useState<T | null>(null);
  const [error, setError] = React.useState<Error | null>(null);
  const [loading, setLoading] = React.useState(false);
  const optionsRef = React.useRef(options);
  optionsRef.current = options;

  React.useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    async function request() {
      setLoading(true);
      setError(null);
      try {
        const result = await api[method](`/${url}`, {
          signal: signal,
          ...optionsRef.current,
        }).catch(function (error) {
          if (error.response) {
            const err = new Error(error.response.data);
            err.name = error.response.status;
            throw err;
          }
        });

        if (result) {
          const json = (await result.data) as T;
          if (!signal.aborted) setData(json);
        }
      } catch (err) {
        if (!signal.aborted && err instanceof Error) setError(err);
      } finally {
        setLoading(false);
      }
    }

    request();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, error, loading };
}

export default useFetch;
