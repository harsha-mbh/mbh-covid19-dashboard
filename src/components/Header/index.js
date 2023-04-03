import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {HiMenu} from 'react-icons/hi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './index.css'

class Header extends Component {
  state = {showMenu: false}

  onClickMenuIcon = () => this.setState({showMenu: true})

  render() {
    const {match} = this.props
    const {path} = match
    const styleHome = path === '/' ? 'highlight' : ''
    const styleAbout = path === '/about' ? 'highlight' : ''
    const {showMenu} = this.state
    return (
      <>
        <nav className="nav-container">
          <div className="nav-content-container">
            <Link to="/" className="nav-link">
              <h1 className="logo-heading">
                COVID19<span className="logo-span-text">INDIA</span>
              </h1>
            </Link>

            <ul className="nav-menu-desktop">
              <Link to="/" className="nav-link">
                <li className={`nav-menu-item ${styleHome}`}>Home</li>
              </Link>
              <Link to="/about" className="nav-link">
                <li className={`nav-menu-item ${styleAbout}`}>About</li>
              </Link>
            </ul>
            <button
              type="button"
              className="menu-btn-mobile"
              onClick={this.onClickMenuIcon}
            >
              <HiMenu className="header-icon" />
            </button>
          </div>
        </nav>
        {showMenu && (
          <div className="nav-menu-container-mobile">
            <div className="nav-content-container">
              <ul className="nav-menu-mobile">
                <Link to="/" className="nav-link">
                  <li className={`nav-menu-item ${styleHome}`}>Home</li>
                </Link>
                <Link to="/about" className="nav-link">
                  <li className={`nav-menu-item ${styleAbout}`}>About</li>
                </Link>
              </ul>
              <button type="button" className="close-btn">
                <AiOutlineCloseCircle className="header-icon" />
              </button>
            </div>
          </div>
        )}
      </>
    )
  }
}

export default withRouter(Header)
