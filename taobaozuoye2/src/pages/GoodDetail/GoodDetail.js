/*
 * @Author       : yfye
 * @Date         : 2020-09-27 10:13:21
 * @LastEditors  : yfye
 * @LastEditTime : 2020-10-24 16:45:04
 * @FilePath     : \react-website(1)(1)\src\pages\GoodDetail\GoodDetail.js
 */
import React, { Component } from 'react';
import { Button,Icon,Radio  } from 'antd';
import { Link } from 'react-router-dom';
import styles from '@/styles/common.css';
export default class GoodDetail extends Component {
    constructor(props) {
        super(props)
      this.state = {
        params: {}
        }
    }
   
  componentDidMount() {
    let goodList = JSON.parse(localStorage.getItem('goodList'));
    let flag =window.localStorage.getItem('flag');
    if (!flag) { 
        this.props.history.push('/login')
    }


      goodList.map(item=>{
       if(item.id==this.props.match.params.id){
        this.setState({
          params:item
        })
       }
      });
  }

  changeStatus = (params) => { 
    let data = params;
    data.checked=!this.state.params.checked
    this.setState({ params: data });
    
    let goodList = JSON.parse(localStorage.getItem('goodList'));
    goodList.map(item=>{
     if(item.id==this.props.match.params.id){
         item.checked=!item.checked
     }
    });
    window.localStorage.setItem('goodList',JSON.stringify(goodList))
  }


  render() {
    const { params } = this.state;
        return (            
          <div style={{ height: "100%" }}>
            <img src={params.img} style={{ width: "100%", marginBottom: "20px" }} />    
            <div>
              <h1 style={{textAlign:"center"}}> {params.title}</h1>
              <p style={{ fontSize:"24px"}}>价格:￥{params.price}</p>
            </div>

            <Button type="danger"  onClick={()=>this.props.history.push('/')} style={{marginTop:"20px",marginLeft:"20px",marginBottom:"40px"}}>返回</Button>
              <div className={styles.header} style={{zIndex:'9999'}}>
                <div className={`${styles.btnList} ${styles.btnGroup}`}>
                <Link to="/" ><div><img src={require('../../static/images/img1.png')} /></div>店铺</Link>
                <Link to="/"><div><img src={require('../../static/images/img4.png')} /></div>客服</Link>
                <a href="javascript:void(0)" onClick={()=>this.changeStatus(params)}><div><img src={params.checked ? require('../../static/images/img3.png') : require('../../static/images/img2.png')} /></div>{params.checked?'取消收藏':'收藏'}</a>              
                <Radio.Group style={{ marginTop: '10px' }}>
                  <Radio.Button value="加入购物车" style={{backgroundColor:'#ff9c03',
    color:'#fff'}}>加入购物车</Radio.Button>
                <Radio.Button value="立即购买"  style={{backgroundColor:'#fe5000',
    color:'#fff'}}>立即购买</Radio.Button>
             </Radio.Group>
               </div>
		         	</div>
          </div>
        )   
    }
}