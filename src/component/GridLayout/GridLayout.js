import React from 'react';
import ImageVideoGridDisplay from './ImageVideoGridDisplay';
import './gridLayout.css'

export default function GridLayout(props) {
  let displayData = [];

  props.dummyData.forEach(content => {
    content.data.forEach(item => displayData.push(item));
  });

  const header = props.videoState ? (
    <tr className='gridHeader'>
      <th>
        Video
      </th>
      <th>
        Video Name
      </th>
      <th>
        Video ID
      </th>
      <th>
        Length
      </th>
      <th>
        Resolution
      </th>
      <th>
        Created Date
      </th>
      <th>
        Modified Date
      </th>
    </tr>
  ) : (
      <tr className='gridHeader'>
        <th >
          Image
        </th>
        <th>
          Image Name
        </th>
        <th>
          Image ID
        </th>
        <th>
          Resolution
        </th>
        <th>
          Created Date
        </th>
        <th>
          Modified Date
        </th>
      </tr>
    );

  return (
    <div className='tableStyle'>
      <table
        className='gridLayout main-body'
      >
        <thead>{header}</thead>
        <tbody>{(displayData.map(data => (
          <ImageVideoGridDisplay
            content={data}
            key={data.video_id}
            modalState={props.videoState}
          />
        )))}</tbody>
      </table>
    </div>
  );
}
