/**
 * Created by happy on 5/2/18.
 */
import './style/common.styl';
import './style/login.styl';

const text = 'Webpack entry of Login Page!';
const app = document.getElementById('app');
const h1 = document.createElement('h1');
h1.innerText = text;
app.appendChild(h1);
console.log(text);

if (module.hot) {
  module.hot.accept();
}
