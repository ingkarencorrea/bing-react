import { useEffect, useState } from "react";

export function useSearch() {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        if (search.length < 3) {
            setError('Search term must be longer than 3 characters')
            return
        }

        setError('')
    }, [search])

    return { search, updateSearch, error, setError }
}