import { useResults } from "../hooks/useResults";
import { useSearch } from "../hooks/useSearch";


function BingSearch() {

    const { search, updateSearch } = useSearch()
    const { results, getResults } = useResults({search})

    const handleSubmit = (event : any) => {
        event.preventDefault();
        getResults({search});
    }

    const handleChange = (event : any) => {
        const newSearch = event.target.value;
        updateSearch(newSearch)
    }
        

    return (
        <div>

            <header>
                <h1>Bing ft React</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            value={search}
                            onChange={handleChange}
                            name='query' 
                            placeholder='Ask me anything'
                            required
                        />
                        <button onClick={handleSubmit} >Search</button>
                    </div>
                </form>
            </header>

            <main>
                <ul>
                    {results.map(result => (
                        <li key={result.id}>
                            <a href={result.url}>{result.name}</a>
                            <p>{result.snippet}</p>
                        </li>
                    ))}
                </ul>
            </main>

        </div>
    );


}

export default BingSearch;
