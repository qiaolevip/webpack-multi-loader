/**
 * Created by happy on 5/2/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

import './style/common';
import './style/index';

const text = 'Webpack entry of Index Page!';
const app = document.getElementById('app');

@observer
class Clock extends React.Component {
  @observable date = new Date();

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  @action tick() {
    this.date = new Date();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>{this.date.toLocaleTimeString()}</div>
    );
  }
}

let tasks = localStorage.getItem('tasks');
@observer
class Task extends React.Component {
  @observable curTask = '';
  @observable tasks = tasks ? JSON.parse(tasks) : [];

  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    this.curTask = e.target.value;
  }

  addTask = () => {
    let { curTask, tasks } = this;
    if (curTask) {
      tasks = [...tasks, curTask];
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.curTask = '';
      this.tasks = tasks;
    }
  }

  render() {
    const { curTask, tasks } = this;
    return (
      <div>
        <h2>我的任务</h2>
        <div>
          <input type="text" placeholder="输入任务" value={curTask} onChange={this.handleChange} />
          <button onClick={this.addTask}>添加任务</button>
        </div>
        <ul style={{listStyleType: 'decimal'}}>
          {
            tasks.map((v, k) =>
              <li key={k}>{v}</li>
            )
          }
        </ul>
      </div>
    );
  }
}

const Welcome = (props) => {
  return <h1>Hello, {props.name} <Clock /></h1>;
};

const listItem = [
  'you are now ready to implement your client side application! Enjoy :-)😋😋😋😋😋',
  'It\'s good to run react in webpack server.',
  'Real-time to compiler the code.'
];

const App = () => {
  return (
    <div>
      <Welcome name="Happy" />
      <b>Congratulations</b>
      <ul>
        {
          listItem.map((v, k) =>
            <li key={k}>{v}</li>
          )
        }
      </ul>
      <p>{text}</p>
      <Task/>
      {/*<img src={require('images/bg-index.jpeg')} alt=""/>*/}
    </div>
  );
};
ReactDOM.render(<App />, app);

if (module.hot) {
  module.hot.accept();
}
