import React, { Component } from 'react';
import styles from '@/styles/common.css';
import { message } from 'antd';
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
      inputValuePassword: ""
    }
  }

  goLogin = () => {
    const { inputValue, inputValuePassword } = this.state;
    if (!inputValue || !inputValuePassword) {
      message.error("请将账号和密码补充完整");
    } else {
      localStorage.setItem('flag', true);
      this.props.history.push('/')
    }
  }

  change = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  changePassword = (e) => {
    this.setState({
      inputValuePassword: e.target.value
    })
  }

  render() {
    return (
      <div>
        <div className={styles.backNav}>
          <div className={styles.nav_logo}>
          </div><div className={styles.nav_arrow} onClick={() => this.props.history.push('/')}></div>
        </div>
        <div className={styles.logo}><div className={styles.tb_logo}></div></div>
        <div>
          <input type="text" className={styles.loginInput} placeholder="手机号/邮箱/会员名" autocapitalize="off" value={this.state.inputValue} onChange={this.change.bind(this)} />
          <input type="password" className={styles.loginInput} placeholder="请输入登录密码" value={this.state.inputValuePassword} onChange={this.changePassword.bind(this)} />
        </div>
        <div className={styles.fm_btn}>
          <button className={styles.fm_button} onClick={this.goLogin}>登录</button>
          <button className={styles.fm_button} onClick={this.goLogin}>注册</button>
        </div>
        <div style={{margin:"20px",display:"flex",justifyContent:"space-between"}}>
          <a href="">{`<<淘宝使用协议>>`}</a>
          <a href="">忘记密码,去找回</a>
        </div>
      </div>
    )
  }
}