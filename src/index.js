/**
 * Created by happy on 5/2/18.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import './style/common.styl';
import './style/index.styl';

const text = 'Webpack entry of Index Page!';
const app = document.getElementById('app');

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>{this.state.date.toLocaleTimeString()}</div>
    );
  }
}

class Task extends React.Component {
  constructor(props) {
    super(props);
    let tasks = localStorage.getItem('tasks');
    tasks = tasks ? JSON.parse(tasks) : [];
    this.state = {
      curTask: '',
      tasks
    };

    this.handleChange = this.handleChange.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  handleChange(event) {
    this.setState({curTask: event.target.value});
  }

  addTask() {
    let { curTask, tasks } = this.state;
    if (curTask) {
      tasks = [...tasks, curTask];
      localStorage.setItem('tasks', JSON.stringify(tasks));
      this.setState(prevState => ({
        tasks,
        curTask: ''
      }));
    }
  }

  render() {
    const { curTask, tasks } = this.state;
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
      <Welcome name="Joe" />
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
    </div>
  );
};
ReactDOM.render(<App />, app);

if (module.hot) {
  module.hot.accept();
}
