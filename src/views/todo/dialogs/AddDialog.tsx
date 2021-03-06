import React from 'react';
import ReactDOM from 'react-dom';

import { Modal, Button } from 'antd';

class App extends React.Component {
  public state = { visible: false };

  public callbackFunction = () => {
    console.log('inner callbackFunction');
  };

  public showModal = () => {
    this.setState({
      visible: true,
    });
  };

  public handleOk = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({
      visible: false,
    });
    this.callbackFunction && this.callbackFunction()
  };

  public handleCancel = (e: React.MouseEvent<HTMLElement>) => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="addDialog">
        {/* <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button> */}
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default App

// export default function Re () {
//   const mountNode = document.createElement('div');
//   document.body.appendChild(mountNode);
//   const ComponentConstructor: any = ReactDOM.render(<App />, mountNode);
//   console.log(ComponentConstructor)
//   ComponentConstructor.showModal()
// }


