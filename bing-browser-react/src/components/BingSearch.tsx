import { useResults } from "../hooks/useResults";
import { useSearch } from "../hooks/useSearch";
import { Results } from "./ResultCard";


function BingSearch() {

    const { search, updateSearch, error } = useSearch()
    const { results, getResults, loading } = useResults({ search })

    const handleSubmit = (event: any) => {
        event.preventDefault();
        getResults({ search });
    }

    const handleChange = (event: any) => {
        const newSearch = event.target.value;
        updateSearch(newSearch)
    }


    return (
        <div className="flex flex-col items-center justify-center overflow-hidden bg-cover bg-no-repeat"
        >
            <header className="py-4 items-center justify-center">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Bing ft</span> React.</h1>

                <form onSubmit={handleSubmit}>
                    <div className="relative ">
                        <input
                            value={search}
                            onChange={handleChange}
                            name='query'
                            placeholder='Ask me anything'
                            required
                            className="bg-gray-100 rounded-md pl-10 pr-4 py-2 w-full focus:outline-none focus:ring focus:ring-blue-500 focus:bg-white"
                        />
                        <button onClick={handleSubmit} className="absolute inset-y-0 left-0 flex items-center ml-3">
                            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                <path d="M15.5 14H14.71L14.43 13.73C15.42 12.55 16 10.99 16 9.25C16 5.13 12.87 2 8.75 2C4.63 2 1.5 5.13 1.5 9.25C1.5 13.38 4.63 16.5 8.75 16.5C10.5 16.5 12.06 15.92 13.24 14.93L13.5 15.21V16.5L18.5 21.5L19.5 20.5L15.5 16.5V14ZM3.5 9.25C3.5 6.07 6.07 3.5 8.75 3.5C11.93 3.5 14.5 6.07 14.5 9.25C14.5 12.43 11.93 15 8.75 15C5.57 15 3 12.43 3 9.25Z" fill="currentColor" />
                            </svg>
                        </button>
                    </div>
                </form>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </header>

            <main>
                {loading ? <p>Loading ...</p> :
                    <Results results={results} />
                }
            </main>

        </div>
    );


}

export default BingSearch;
