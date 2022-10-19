import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import Login from './pages/login'

export interface IAppProps {}

const App: FC<IAppProps> = ({}) => {
  useCallback(() => {}, [])
  useMemo(() => {}, [])
  useEffect(() => {}, [])

  return (
    <div className="App">
      <Login />
    </div>
  )
}

export default App
