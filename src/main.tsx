import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { ToastContainer, Bounce } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store/store.tsx';
import 'react-toastify/dist/ReactToastify.css';
import '@mantine/core/styles.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <ModalsProvider>
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Bounce}
          />
          <Provider store={store}>
            <App />
          </Provider>
      </ModalsProvider>
    </MantineProvider>
  </React.StrictMode>,
)
