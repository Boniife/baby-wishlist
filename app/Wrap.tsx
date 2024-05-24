'use client'
import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import Navbar from './Navbar/page'

const Wrap = ({children}:any) => {
  return (
    <Provider store={store}>
          {children}
        </Provider>
  )
}

export default Wrap