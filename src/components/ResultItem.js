import React from 'react';

const ResultItem = (data) => {
  return (
    <div className='item'>
      <img src={data.results.images.downsized.url} />
    </div>
  )
};

export default ResultItem;