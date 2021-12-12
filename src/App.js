import React, { Component } from 'react';
import Layout from './components/SideBar/Layout';
import { IntlProvider } from 'react-intl';
import './styles/App.scss';

class App extends Component {
  // state = {
  //   currentZoom: 'Days',
  //   messages: [],
  // };

  // addMessage(message) {
  //   const maxLogLength = 5;
  //   const newMessate = { message };
  //   const messages = [newMessate, ...this.state.messages];

  //   if (messages.length > maxLogLength) {
  //     messages.length = maxLogLength;
  //   }
  //   this.setState({ messages });
  // }

  // logDataUpdate = (type, action, item, id) => {
  //   let text = item && item.text ? ` (${item.text})` : '';
  //   let message = `${type} ${action}: ${id} ${text}`;
  //   if (type === 'link' && action !== 'delete') {
  //     message += ` ( source: ${item.source}, target: ${item.target} )`;
  //   }
  //   this.addMessage(message);
  // };

  // handleZoomChange = (zoom) => {
  //   this.setState({
  //     currentZoom: zoom,
  //   });
  // };

  render() {
    // const { currentZoom, messages } = this.state;
    const locale = 'en';
    const messages = {};
    return (
      <IntlProvider locale={locale} messages={messages[locale]}>
        <Layout />
      </IntlProvider>
    );
  }
}

export default App;
