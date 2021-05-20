import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { GlobaStyle } from './styles/Global';
import { createServer, Model } from 'miragejs';

createServer({

  models: {
    appointment: Model,
  },

  seeds(server) {
    server.db.loadData({
      appointments: [
        {
          id: 1,
          qrCode: '123456QRCODE',
          userName: 'Roberto Almeida',
          userRole: 'Analista de Marketing',
          userLocation: 'Av Santos Dumont Km 4,5 - Lauro de Freitas',
          type: 'Entrada',
          createdAt: new Date('2021-02-19 09:00:00')
        }        
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/appointments', () => {
      return this.schema.all('appointment')
    })

    this.post('/appointments', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('appointments', data);
    })
  }
})


ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobaStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
