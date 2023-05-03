import axios from "axios";
import { useEffect, useState } from "react";


function BingSearch() {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const apiKey = '608b9f78adbc446ea1248a2a9f7f8e46';
        const query = 'Developers';
        const url = `https://api.bing.microsoft.com/v7.0/search?q=${query}`;

        axios.get(url, {
            headers: {
                'Ocp-Apim-Subscription-Key': apiKey
            }
        })
            .then(response => {
                setResults(response.data.webPages.value);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <header>
                <h1>Bing ft React</h1>
                <form >
                    <div>
                        <input
                            type="text"
                            name='query' placeholder='Ask me anything'
                        />
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
