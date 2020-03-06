import React from 'react';
import ImageVideoDisplay from './ImageVideoAIDisplay';

export default function Category(props) {
  const categoryData = props.dummyData.filter(
    item => item.category === props.category
  );

  return (
    <div className='main-body'>
      <h2 className='category-heading'>{props.category}</h2>
      <ImageVideoDisplay
        category={props.category}
        categoryData={categoryData[0]}
        videoState={props.videoState}
      />
    </div>
  );
}
