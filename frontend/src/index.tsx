import './index.scss'
import React from 'react'
import { render } from 'react-dom'
import App from './app/App'
import { Provider } from 'react-redux'
import store from './shared/lib/store/store'

document.documentElement.setAttribute('data-theme', 'light')
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
