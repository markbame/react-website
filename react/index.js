import React from 'react'
import ReactDOM from 'react-dom'
import common from './styles/common.scss'
import items from './styles/items.scss'
import { Provider } from 'react-redux'
import { store } from './central/central'
import Items from './router/itemsRoute'
if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(
  <Provider store={store}>
    <Items />
  </Provider>
, document.querySelector('#container'))
