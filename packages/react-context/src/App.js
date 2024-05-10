import React from 'react'
import Main from './components/Main'
import SideBar from './components/SideBar'

export default function App () {
	const [isSideBarOpen, setIsSideBarOpen] = React.useState(false)

	const handleSideBarToggle = () => {
		setIsSideBarOpen(!isSideBarOpen)
	}

	return (	
		<div className='flex'>
			<SideBar isSideBarOpen={isSideBarOpen} onToggle={handleSideBarToggle}/>
			<Main isSideBarOpen={isSideBarOpen}/>
		</div>
	)
};