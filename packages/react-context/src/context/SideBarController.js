import React from 'react'
import SideBarContext from '.'

export const useSideBar = () => React.useContext(SideBarContext)

export default function SideBarController({ children }) {
	const [isSideBarOpen, setIsSideBarOpen] = React.useState(false)

	const toggle = () => setIsSideBarOpen(!isSideBarOpen)

	return <SideBarContext.Provider value={{ isSideBarOpen, toggle }}>{children}</SideBarContext.Provider>
}