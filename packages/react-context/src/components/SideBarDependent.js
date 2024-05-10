import React from 'react'
import { useSideBar } from '../context/SideBarController'

export default function OtherComponent() {
	const { isSideBarOpen } = useSideBar()

	return <div>is side-bar open?: {isSideBarOpen ? 'yse' : 'no'}</div>
}
