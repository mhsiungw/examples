import React from 'react'
import OtherComponent from './OtherComponent'
import DoNotReRenderMe from './DoNotReRenderMe'

export default function Main({ isSideBarOpen }) {
	return (
		<>
			<div>
				Main
				<DoNotReRenderMe/>
				<OtherComponent isSideBarOpen={isSideBarOpen} />
			</div>
		</>
	)
}
