/*
 * @Author       : yfye
 * @Date         : 2020-09-27 10:13:21
 * @LastEditors  : yfye
 * @LastEditTime : 2020-10-20 00:39:48
 * @FilePath     : \react-website(1)(1)\src\pages\Home\Home.js
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import style from './index.css';
import { Input, Carousel } from 'antd';
import goodList from '../goodlist';
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    goFind = () => {
        this.props.history.push('/FindSearch')
    }

    render() {
        return (
            <div style={{ width: '100%' }}>
                <div style={{ backgroundColor: 'rgb(255, 133, 42)' }}>
                    <div style={{ width: "100%", margin: "0 auto", padding: "4px" }}>
                        <img src="https://gw.alicdn.com/bao/uploaded/TB1FjNySpXXXXc8aXXXXXXXXXXX-200-200.png" style={{ width: '30px', marginRight: "16px" }} />
                        <Input placeholder="寻找宝贝店铺" style={{ width: "300px" }} onClick={this.goFind} />
                    </div>

                </div>
                <Carousel autoplay className={style.Carousel}>
                    <div>
                        <img src="https://img.alicdn.com/imgextra/i3/27/O1CN019CAYMI1C4PK6mp9qX_!!27-0-luban.jpg" />
                    </div>
                    <div>
                        <img src="https://img.alicdn.com/imgextra/i2/96/O1CN014g0ADB1Ca0eWkU60Z_!!96-0-luban.jpg" />
                    </div>
                    <div>
                        <img src="https://picasso.alicdn.com/imgextra/i3/382208/O1CNA1iyU1IP100ff4af62860b14de730004_!!382208-0-picassobanner.jpg" />
                    </div>
                </Carousel>

                <div className={style.goodList}>
                    {goodList.map((item, index) => {
                        return <div className={style.recommend_item} key={index}>
                            <Link className={`${style.recommend_img_wrapper} ${style.triggerClick}`} to={`/goodDetail/${item.id}`}>
                                <img className={`${style.recommend_img} ${style.lazyload}`} src={item.imgsrc} />
                            </Link>
                            <Link className={`${style.recommend_info} ${style.triggerClick}`} to={`/goodDetail/${item.id}`}>
                                <div className={`${style.recommend_title}`}>
                                    <span className={`${style.recommend_title_p}`}>{item.name}</span>
                                </div>
                                <div className={`${style.recommend_price_box}`}>
                                    <span className={`${style.recommend_sign} ${style.recommend_h}`}>￥</span>
                                    <span className={`${style.recommend_price}`}>{item.money}</span>
                                    <span className={`${style.recommend_payed}`}>{item.perple}人已购买</span>
                                </div>
                            </Link>
                        </div>
                    })}


                </div>
            </div>
        )
    }
}
