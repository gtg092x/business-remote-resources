import Link from 'next/link';
import styled from 'styled-components'

const NavAnch = styled.a`
  margin: 0 12px;
`

const Nav = () => {
  return (
    <nav>
      <Link href="/">
        <NavAnch>Home</NavAnch>
      </Link>
      <Link href="/about">
        <NavAnch>About</NavAnch>
      </Link>
    </nav>
  )
}

export default Nav
