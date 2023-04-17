import Link from 'next/link'
import styles from './page.module.scss'
import { delay } from './utils/delay'

const Home = async () => {
	await delay

	return (
		<div className={styles.container}>
			<h1>
				Hi,
				<br />
				I&apos;m <span>A</span>bdulramon.
			</h1>
			<p>Front End Developer / Next Js Expert</p>
			<Link href='/contact'>
				<button>
					<span className={styles.bg} />
					<span className={styles.dot} />
					Contact me!
				</button>
			</Link>
		</div>
	)
}

export default Home
