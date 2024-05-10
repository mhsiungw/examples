import React from 'react'
import SideBarDependent from './SideBarDependent'
import DoNotReRenderMe from './DoNotReRenderMe'

export default function Main() {
	return (
		<>
			<div>
				Main
				<DoNotReRenderMe/>
				<SideBarDependent />
			</div>
		</>
	)
}
