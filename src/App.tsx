import * as React from 'react';
import './App.css';

import logo from './logo.svg';

interface IState {
  data: string;
}

class App extends React.Component<{}, IState> {

  public componentDidMount() {
    this.loadData();
  }

  public async loadData() {
    const res = await fetch("/api/test");
    const data  = await res.json();
    this.setState({ data })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React {this.state.data}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
