import React from 'react'
import style from './aboutauthor.module.css'

const AboutAuthor = () => {
    return (
        <div className="about-author-container">
          <h1>About the Author</h1>
          <img
            src="https://placekitten.com/200/200" // Replace with the author's photo
            alt="Author"
            className="author-photo"
          />
          <p>
            Hi there! My name is [Author Name], and I'm a passionate [profession or role].
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel justo
            justo. Curabitur id felis elit. Nulla facilisi. Sed vehicula, ex ut
            tincidunt efficitur, justo odio eleifend dolor, a tincidunt risus sem
            in purus.
          </p>
          <p>
            In my free time, I enjoy [hobbies or interests]. I also love writing and
            sharing my knowledge with others. This blog is a platform where I
            explore various topics related to [specific areas of interest].
          </p>
          <p>
            Feel free to connect with me on social media or drop me an email at{' '}
            <a href="mailto:author@example.com">author@example.com</a>.
          </p>
        </div>
      );
    };

export default AboutAuthor