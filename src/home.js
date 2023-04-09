import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import image from './images/App.png';

function Home() {
  let nav = useNavigate();

  function moveToSignIn() {
    nav('/login');
  }

  return (
    <div>
      <img src={image} alt='homeImage' />
      <div className='homeText'>
        <p>
          There are several websites where users can share their thoughts and
          ideas with others, but one platform that stands out is a website that
          allows users to write out their ideas and thoughts. This website
          provides a user-friendly interface that makes it easy for users to
          sign up and start writing their thoughts immediately. With a higher
          word limit, users have more space to articulate their ideas in greater
          detail and depth, allowing for more thorough exploration and analysis.
          The website offers a range of formatting options, such as bold,
          italic, underline, and bullet points, making it easy for users to
          organize and structure their ideas effectively. Once users have
          finished writing their ideas, they can publish them on the website for
          others to read and share. Furthermore, the website has a comment
          section where users can engage in discussions, share their opinions,
          and provide feedback to other users. This platform is an excellent
          opportunity for users to express their ideas, connect with like-minded
          individuals, and contribute to a community that values critical
          thinking and thoughtful reflection.
        </p>
      </div>
      <div className='homeBtn'>
        <button className='button-20' onClick={moveToSignIn}>
          Start Here!
        </button>
      </div>
    </div>
  );
}

export default Home;
