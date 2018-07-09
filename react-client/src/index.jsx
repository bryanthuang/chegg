import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      currentValue: 0
    }
  }

  getData(currentValue) {
    console.log('current', currentValue)
    let newData = [];
    for(let i = currentValue; i < currentValue + 25; i++){
      newData.push(i)
    }
    currentValue += 25
    newData = this.state.items.concat(newData)
    this.setState({
      items: newData,
      currentValue: currentValue
    });
  }

  handleScroll() {
    this.getData(this.state.currentValue)

  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll.bind(this));
  }

  render () {
    return (<div>
      <button onClick={this.handleScroll.bind(this)}>Add Items</button>
      <h1>Item List</h1>
      <List items={this.state.items}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));