

function ListOfResults({ results }) {
    return (
        <ul className="py-4">
            {
                results?.map(result => (
                    <div className="p-4" key={result.id}>
                        <a
                            href={result.url}
                            className="group relative block rounded-3xl border-4 border-blue-800 bg-white pt-12 transition hover:bg-blue-50 sm:pt-16 lg:pt-24"
                        >
                            <span
                                className="absolute inset-0 -z-10 -translate-x-2 -translate-y-2 rounded-3xl bg-white ring-4 ring-blue-800"
                            ></span>

                            <span
                                className="absolute inset-0 -z-20 -translate-x-4 -translate-y-4 rounded-3xl bg-white ring-4 ring-blue-800"
                            ></span>

                            <div className="p-4 sm:p-6 lg:p-8">
                                <p className="text-lg font-bold">{result.name}</p>
                                <p className="mt-1 font-mono text-xs">{result.url}</p>
                                <p className="mt-1 font-mono text-sm">{result.snippet}</p>
                            </div>
                        </a>
                    </div>
                ))
            }
        </ul>









    )
}

function NoResults() {
    return (
        <p>No results found for this search</p>
    )
}

export function Results({ results }) {
    const hasResults = results?.length > 0

    return (
        hasResults
            ? <ListOfResults results={results} />
            : <NoResults />
    )
}