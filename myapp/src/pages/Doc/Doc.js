import React, { Component } from 'react'
import style from './index.css';
import { Link } from 'react-router-dom';
export default class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {       
        }
    }

    render() {  
        return (
            <div style={{ height: "100%" }}>
                <div className={style.left}>
                   {this.props.match.params.text}
                </div>
                <div className={style.right}>
            <ul>
                <Link to="/doc/core"><li>{1}、核心概念</li></Link>
                <Link to="/doc/guide"><li>{2}、高级指引</li></Link>
                <Link to="/doc/api"><li>{3}、API</li></Link>
                <Link to="/doc/hooks"><li>{4}、Hooks</li></Link>
            </ul>
        </div>
            </div>

        )
    }
}
