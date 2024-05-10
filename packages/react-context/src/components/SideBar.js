import React from 'react'

export default function SideBar({ isSideBarOpen, onToggle }) {
	return <div className={`bg-slate-500 h-screen`} onClick={onToggle}>
		{isSideBarOpen ? 'SideBar' : 'Open'}
		</div>
}