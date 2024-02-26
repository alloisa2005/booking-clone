import { ThemeToggler } from './ThemeToggler'

const Header = () => {
  return (
    <header className='w-full max-w-[1450px] mx-auto px-5 flex items-center justify-between h-[60px]'>
      <h1>Next.js + Tailwind CSS</h1>

      <ThemeToggler />
    </header>
  )
}

export default Header