import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import { ILoginRequest, login, getUserData } from '../../api/user'
import '../../styles/login.css'

export interface ILoginProps {}

const initValues: ILoginRequest = {
  name: 'admin',
  password: 'some-test-pass'
}

const Login: FC<ILoginProps> = ({}) => {
  useCallback(() => {}, [])
  useMemo(() => {}, [])
  useEffect(() => {}, [])

  const login = () => {
    console.log('🚀TCL: >> login >> login')
  }

  return (
    <div className="login">
      <div className="login_btn">
        <button onClick={login}>Click me to login Admin</button>

        <button className="login_guest"> Click me to login Guest</button>
      </div>
    </div>
  )
}

export default Login
