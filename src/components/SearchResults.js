import React from 'react';
import ResultItem from './ResultItem';

const SearchResults = (props) => {
  const resultItems = props.searchResults.map((data) => {
    return <ResultItem key={data.id} results={data} />
  });

  return (
    <div className="paging1">{resultItems}</div>
  );
};

export default SearchResults;