import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css";
import { NavLink,Outlet } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<div>
			<div className="navheader">
			<h3>Maitreya Gottimukkula</h3>
            <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
			<nav ref={navRef} className="navbar">
				<NavLink onClick={showNavbar} to='/' activeStyle={{ color: "#f2e85e" }}>Home</NavLink>
				<NavLink onClick={showNavbar} to='/about'>About</NavLink>
				<NavLink onClick={showNavbar} to='/skills'>Skills</NavLink>
				<NavLink onClick={showNavbar} to='/works'>Works</NavLink>
                <NavLink onClick={showNavbar} to='/contact'>Contact</NavLink>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			</div>
			<Outlet />
		</div>
		
		
	);
}

export default Navbar;