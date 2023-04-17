'use client'

import styles from './loading.module.scss'

const Loading = () => {
	return (
		<div className={styles.container}>
			<h1>A</h1>
			<h2>Abdulramon</h2>
			<p>Abdulramon is thinking</p>
			<div className={styles.subContainer}>
				<div className={styles.progress} />
			</div>
		</div>
	)
}

export default Loading
