import { useRef, useState, useCallback } from "react";
import { searchResults } from "../services/results";

export function useResults({ search }) {
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(null);
  const previousSearch = useRef(search);

  const getResults = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newResults = await searchResults({ search });
      setResults(newResults);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { results: results, getResults, loading };
}
