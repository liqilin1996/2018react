/*
 * @Author       : yfye
 * @Date         : 2020-09-27 10:13:21
 * @LastEditors  : yfye
 * @LastEditTime : 2020-10-20 00:33:37
 * @FilePath     : \react-website(1)(1)\src\pages\GoodDetail\GoodDetail.js
 */
import React, { Component } from 'react';
import goodList from '../goodlist';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import styles from '@/styles/common.css';
export default class GoodDetail extends Component {
    constructor(props) {
        super(props)
      this.state = {
         img:""
        }
    }
   
    componentDidMount(){
      let img="";
      goodList.map(item=>{
       if(item.id==this.props.match.params.id){
         img=item.imgsrc
       }
      });
      this.setState({
        img
      })

    }


  render() {
        return (            
          <div style={{ height: "100%" }}>
              <img src={this.state.img} style={{width:"100%",marginBottom:"20px"}}/>
              <Button type="primary" onClick={()=>this.props.history.push('/')}>返回</Button>

              <div className={styles.header} style={{zIndex:'9999'}}>
                <div className={styles.btnList}>
                <Link  to="/" >店铺</Link>
                <Link to="/">客服</Link>
                <Link to="/" >收藏</Link>
                <Link to="/" style={{marginRight:'0'}}>加入购物车</Link>
                <Link to="/" style={{marginRight:'0'}}>购买</Link>
               </div>
		         	</div>
          </div>
        )   
    }
}