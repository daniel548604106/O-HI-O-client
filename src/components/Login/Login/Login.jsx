import { apiPostLogin } from 'api/index';
import Cookie from 'js-cookie';
import notify from 'lib/notification';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeLoginModal } from 'store/index/indexAction';
import { setUserLoggedIn } from 'store/user/userAction';

import classes from './Login.module.scss';

const Login = ({ setLoginState }) => {
  const dispatch = useDispatch();
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const { data } = await apiPostLogin({ account, password });
      Cookie.set('me', data.user);
      Cookie.set('token', data.token);
      dispatch(closeLoginModal());
      dispatch(setUserLoggedIn(data));

      notify('登入成功！');
    } catch (error) {
      notify('登入失敗！請重新再登入一次');
    }
  };
  return (
    <div>
      <div className={classes.signupLayout}>
        <h2>用 O-HI-O 帳號登入</h2>
        <div className={classes.field}>
          <label htmlFor="account">帳號</label>
          <input
            onChange={(e) => setAccount(e.target.value)}
            className={classes.inputField}
            type="text"
          />
        </div>
        <div className={classes.field}>
          <label htmlFor="password">密碼</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className={classes.inputField}
            type="password"
          />
        </div>
        <button className={classes.forgetPassword} onClick={() => setLoginState('resetPassword')}>
          忘記密碼
        </button>
        <div onClick={() => handleLogin()} className={classes.loginBtn}>
          登入
        </div>
        <p className={classes.login}>
          還不是會員嗎？ <span onClick={() => setLoginState('signup')}>立刻註冊新帳號</span>
        </p>
        <button className={classes.prevPage} onClick={() => setLoginState('welcome')}>
          回上一頁
        </button>
      </div>
    </div>
  );
};

Login.propTypes = {
  setLoginState: PropTypes.func,
};

export default Login;
