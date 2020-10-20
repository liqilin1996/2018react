import React, { Component } from "react";
import Header from "@/components/public/header";
import styles from "@/styles/common.css";
import {withRouter  } from 'react-router-dom';
class Include extends Component {
  constructor(p) {
    super(p);
    this.state = {
    };
  }


  render() {
    const { children } = this.props;
    return (
      <div>
        <div className={styles.header}>
            <Header {...this.props}/>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    );
  }
}
export default withRouter(Include);
