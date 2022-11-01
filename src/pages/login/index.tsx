import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import { ILoginRequest, login, getUserData } from '../../api/user'
// import { useAppDispatch } from '../../hooks/reduxHooks'
// import { doLogin } from '../../store/slices/authSlice'

import '../../styles/login.css'

export interface ILoginProps {}

const initValues: ILoginRequest = {
  name: 'admin',
  password: 'some-test-pass'
}

const Login: FC<ILoginProps> = ({}) => {
  // const dispatch = useAppDispatch()

  // useCallback(() => {}, [])
  // useMemo(() => {}, [])
  // useEffect(() => {}, [])

  const login = () => {
    // dispatch(doLogin(initValues))
    //   .unwrap()
    //   .then(() => {})
    //   .catch(err => {
    //     console.log('🚀TCL: >> login >> err', err)
    //   })
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
