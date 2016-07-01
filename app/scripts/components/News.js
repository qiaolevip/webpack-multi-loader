import React, { Component } from 'react';
import news from '../data/news-mock.json'

import styles from '../../css/style.css';
import '../../stylus/news.styl'

class News extends Component {

  render() {
    return (
      <ul className="news-container">
        {
          news.map((v, i) =>
            <li key={i} className={i == 1 ? styles.specialNews : ''}>{v.title}</li>
          )
        }
      </ul>
    );
  }
}

export default News;