import React, { useState } from 'react';

function Writingpage() {
  const [story, setStory] = useState('');
  return (
    <>
      <div className='story'>
        <div className='storyInput'>
          <input
            type='text'
            id='story'
            value={story}
            placeholder='Write your ideas here...'
            onChange={(e) => {
              setStory(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <article>
        <div className='scroll-bg'>
          <div className='scroll-div'>
            <div className='scroll-object'>{story}</div>
          </div>
        </div>
      </article>
    </>
  );
}

export default Writingpage;
