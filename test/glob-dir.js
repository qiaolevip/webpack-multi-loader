/**
 * Created by happy on 5/3/18.
 */
const glob = require('glob');
const dirPath = '../src/*.{js,jsx}';

glob.sync(dirPath).forEach(function(v) {
  console.log(v.substring(v.lastIndexOf('/') + 1, v.lastIndexOf('.')));
});