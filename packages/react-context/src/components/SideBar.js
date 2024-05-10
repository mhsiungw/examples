import React from 'react'
import { useSideBar } from '../context/SideBarController'

export default function SideBar() {
	const {toggle, isSideBarOpen} = useSideBar()

	return (
		<div className={`bg-slate-500 h-screen`} onClick={toggle}>
			{isSideBarOpen ? 'SideBar' : 'Open'}
		</div>
	)
}
