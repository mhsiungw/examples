import React from 'react'

export default function OtherComponent({ isSideBarOpen }) {
	return <div>
		is side-bar open?: { isSideBarOpen ? 'yse' : 'no' }
	</div>
}