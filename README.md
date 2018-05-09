# webpack-multi-loader

This webpack project teach you how to use webpack loader in Webpack.

####[Demo](https://qiaolevip.github.io/webpack-multi-loader/docs/)

## Get the kit

```
$ git clone https://github.com/qiaolevip/webpack-multi-loader.git
```

## Installation

Install all dependencies. 

```
$ npm install
```

Install Mobx

```
$ npm i -S mobx mobx-react babel-plugin-transform-decorators-legacy
```

# .babelrc
```json
{
  "presets": [
    "react",
    "es2015",
    "stage-1"
  ],
  // or "presets": ["env", "react", "stage-0"]
  "plugins": ["transform-decorators-legacy"]
}
```


## Development

Builds the application and starts a webserver with livereload. By default the webserver starts at port 1337.

```
$ npm start
```

## Build

Builds a minified version of the application in the dist folder.

```
$ npm run build
```

### Build Performance
https://webpack.js.org/guides/build-performance/

### DllPlugin
https://doc.webpack-china.org/plugins/dll-plugin/