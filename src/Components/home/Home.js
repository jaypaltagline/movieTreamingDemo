import React from 'react';
import seriesImg from '../../Asserts/images/series-img.jpg';
import moviesImg from '../../Asserts/images/movies-img.jpg';
import './Home.css';

function Home() {
  return (
    <section className="main">
      <div className="title-bg">
        <div class="container">
          <div class="row">
            <div className="col-12">
              <h1>Popular Titles</h1>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div className="col-12">
            <div className="loading">Loading...</div>
            <div className="loading">Oops, something went wrong....</div>

            <div className="popular-main">
              <div className="popular-boxs">
                <div className="img"><img src={seriesImg} /></div>
                <h3>Popular Series</h3>
              </div>
              <div className="popular-boxs">
                <div className="img"><img src={moviesImg} /></div>
                <h3>Popular Movies</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
