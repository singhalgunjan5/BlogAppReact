import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RightSideProvider from './components/RightSideContext.jsx';
const sensitiveInformation2 = "My_Sensitive_Information2" //Doing this to solve the issue of having sensitive information in previous commits

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RightSideProvider>
    <App />
</RightSideProvider>
  </React.StrictMode>,
)
