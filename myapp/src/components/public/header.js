import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '@/styles/common.css';
class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 1
		};
	}

	componentDidMount() {
	}

	render() {
		const { current } = this.state;
		return (
			<div className={styles.header}>
				<div className={styles.btnList}>
				<Link onClick={() => { this.setState({ current: 1 }) }} to="/Home" className={current === 1 ? styles.active : ''}>React</Link>
				<Link onClick={() => { this.setState({ current: 2 }) }} className={current === 2 ? styles.active : ''} to="/doc/core">文档</Link>
				<Link onClick={() => { this.setState({ current: 3 }) }} to="/tuto" className={current === 3 ? styles.active : ''}>教程</Link>
				<Link onClick={() => { this.setState({ current: 4 }) }} className={current === 4 ? styles.active : ''} to="/blog" style={{marginRight:'0'}}>博客</Link>
				<Link onClick={() => { this.setState({ current: 5 }) }} className={current === 5 ? styles.active : ''} to="/comm" style={{marginRight:'0'}}>社区</Link>
		</div>
			</div>
		);
	}
}
export default Header;