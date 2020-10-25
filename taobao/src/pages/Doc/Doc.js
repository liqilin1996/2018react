/*
 * @Author       : yfye
 * @Date         : 2020-09-27 10:13:21
 * @LastEditors  : yfye
 * @LastEditTime : 2020-10-19 22:55:21
 * @FilePath     : \react-website(1)(1)\src\pages\Doc\Doc.js
 */
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
                  我的购物车
                </div>
            </div>

        )
    }
}
