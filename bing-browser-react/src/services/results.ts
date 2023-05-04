import axios from "axios";

const API_KEY = "608b9f78adbc446ea1248a2a9f7f8e46";

export const searchResults = async ({ search }) => {
  if (search === "") return null;

  try {
    const url = `https://api.bing.microsoft.com/v7.0/search?q=${search}`;

    let localResults = null;

    await axios
      .get(url, {
        headers: {
          "Ocp-Apim-Subscription-Key": API_KEY,
        },
      })
      .then((response) => {
        localResults = response.data.webPages.value;
      })
      .catch((error) => {
        throw new Error("Error fetching results");
      });

    return localResults?.map((result) => ({
      id: result.id,
      url: result.url,
      name: result.name,
      snippet: result.snippet,
    }));
  } catch (e) {
    throw new Error("Error searching");
  }
};
