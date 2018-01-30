import Wrapper from './Wrapper'
import Nav from './Nav'
import NavItem from './NavItem'

const Header = Wrapper
Header.Nav = Nav
Header.NavItem = NavItem

// const Header = {
//   ...Wrapper,
//   Nav,
//   NavItem,
// }

export default Header
