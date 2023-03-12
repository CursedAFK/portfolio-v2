import { Open_Sans } from 'next/font/google'
import './globals.scss'

interface Props {
  children: React.ReactNode
}

export const metadata = {
  title: 'AL | Front End Developer',
  description:
    'As a frontend developer, I specialize in creating responsive and user-friendly websites using HTML, CSS, and JavaScript. Browse my portfolio to see my latest projects and learn more about my skills and experience. Contact me to discuss your web development needs today.',
  icons: '/logo.png'
}

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans'
})

const RootLayout = ({ children }: Props) => {
  return (
    <html lang='en' className={`${openSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
