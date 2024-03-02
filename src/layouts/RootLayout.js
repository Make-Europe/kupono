import { NavLink, Outlet } from 'react-router-dom'  // this component wrapps all the other routes, home+about are rendered in outlet

export default function RootLayout() {
  return (
    <div className="root-layout">
        <header>
            <nav>
                    <NavLink to='/'>⌂</NavLink>
                    <NavLink to="contact">$</NavLink>
                    <NavLink to="help">?</NavLink>
                    <NavLink to="about">˽</NavLink>

                    <NavLink to="faq">⎗</NavLink>

                    <NavLink to="services">Services</NavLink>
            </nav>
            <h1>HourPay.</h1>
        </header>
        <main>
            <Outlet /> 
        </main>
    </div>
  )
}