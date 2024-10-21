import { useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { ListResponse } from "../../../shared/types/server";
import { getMedia } from "../services";
import type { Media } from "../types";

export function useGetMedia() {
  const searchParams = useSearch({ from: "/" });
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ListResponse<Media> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getMedia({ params: searchParams })
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [searchParams]);

  return {
    searchParams,
    loading,
    data,
    error,
  };
}
