import React from 'react'
import Main from './components/Main'
import SideBar from './components/SideBar'
import SideBarController from './context/SideBarController'

export default function App() {
	return (
		<div className='flex'>
			<SideBarController>
				<SideBar/>
				<Main/>
			</SideBarController>
		</div>
	)
}
