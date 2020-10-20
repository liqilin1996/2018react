import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }
  
    render() {
     
        return (
              <div style={{textAlign:"center"}}>
                  <h2>React</h2><p>用于构建用户界面的 JavaScript 库</p><div>
                  <Link to="/doc/core"><button>快速开始</button></Link>
                  <Link to="/tuto"> <button>入门教程</button></Link>
                  </div>
                </div>
        )
    }
}
