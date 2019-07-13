import React from 'react';
import ReactDOM from 'react-dom';

class MainWindow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Hello World
      </div>
    );
  }
}

const mainWndComponent = ReactDOM.render(
  <MainWindow />,
  document.getElementById('content')
);
