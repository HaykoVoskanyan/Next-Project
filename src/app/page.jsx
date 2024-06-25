import Results from "@@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || 'fetchTrending';

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(
      `https://api.themoviedb.org/3${
        genre === 'fetchTopRated' ? '/movie/top_rated' : '/trending/all/week'
      }?api_key=${API_KEY}&language=en-US&page=1`,
      {next:{revalidate:10000}}
    );

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    const results = data.results;

    return (
      <div>
        <Results results={results} />
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <p>Error fetching data. Please try again later.</p>
      </div>
    );
  }
}




  
   
