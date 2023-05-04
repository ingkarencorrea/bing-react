import { useEffect, useState, useRef } from "react";

export function useSearch() {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState('')
    const isFirstInput = useRef(true)

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === ''
            return
        }

        if (search.length < 3) {
            setError('Search term must be longer than 3 characters')
            return
        }

        setError('')
    }, [search])

    return { search, updateSearch, error, setError }
}