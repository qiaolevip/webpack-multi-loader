/**
 * Created by happy on 5/2/18.
 */
import './style/common.styl';
import './style/index.styl';

const text = 'Webpack entry of Index Page!';
const app = document.getElementById('app');
const h1 = document.createElement('h1');
h1.innerText = text;
app.appendChild(h1);
console.log(text);
console.log(text);

if (module.hot) {
  module.hot.accept();
}
