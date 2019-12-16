import React from 'react'
import Navbar from './components/navbar'

const Layout: React.FC = props => {
    return (
      <React.Fragment>
        <Navbar />
        {props.children}
      </React.Fragment>
    );
}

export default Layout