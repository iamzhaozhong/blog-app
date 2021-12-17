import { NavLink } from 'react-router-dom';

export default function Nav () {
	return (
		<nav>
			<div className = 'nav'>
				<NavLink className='logo' to='/'>Blog-App</NavLink>
				<div className='links'>
					<NavLink className='link' to='/'>Posts</NavLink>
					<NavLink className='link' to='/add-post'>Add A Post</NavLink>
				</div>
			</div>
		</nav>
	)
}