import { React, useState, useEffect } from 'react';
import EverythingCard from './Card';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

function TopHeadline() {
    const params = useParams();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  function handlePrev() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  let pageSize = 12;

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    const categoryParam = params.category || "general";
    console.log(categoryParam)
    fetch(`https://news-portal-5.onrender.com/top-headlines/${categoryParam}?page=${page}&pageSize=${pageSize}`)

      .then(response => {
        if (response.ok) {
            console.log(response)
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(myJson => {
        if (myJson.success) {
            // console.log(myJson.data.articles[0].title)
            // console.log(myJson.data.articles[0].urlToImage)
          setTotalResults(myJson.data.totalResults);
          setData(myJson.data.articles);
        } else {
          setError(myJson.message || 'An error occurred');
        }
      })
      .catch(error => {
        console.error('Fetch error:', error);
        setError('Failed to fetch news. Please try again later.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page , params.category]);

  return (
    <>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <div className='my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3 '>
        {!isLoading ? data.map((element, index) => (
          <EverythingCard
            title={element.title}
            description={element.description}
            imgUrl={element.urlToImage}
            publishedAt={element.publishedAt}
            url={element.url}
            author={element.author}
            source={element.source.name}
            key={index}
          />
        )) : <Loader />}
      </div>
      {!isLoading && data.length > 0 && (
  <div className="pagination flex justify-center gap-14 my-10 items-center mt-10  p-4 rounded-md">
    <button 
      disabled={page <= 1} 
      className='pagination-btn text-center text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md transition-colors duration-200'
      onClick={handlePrev}
    >
      &larr; Prev
    </button>
    <p className='font-semibold text-black opacity-80'>
      {page} of {Math.ceil(totalResults / pageSize)}
    </p>
    <button 
      className='pagination-btn text-center text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md transition-colors duration-200'
      disabled={page >= Math.ceil(totalResults / pageSize)} 
      onClick={handleNext}
    >
      Next &rarr;
    </button>
  </div>
)}

    </>
  );
}

export default TopHeadline;
