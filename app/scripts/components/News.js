import React, { Component } from 'react';
import news from '../data/news-mock.json'

class News extends Component {

  render() {
    console.log(news);
    return (
      <ul>
        {
          news.map((v, i) =>
            <li key={i}>{v.title}</li>
          )
        }
      </ul>
    );
  }
}

export default News;