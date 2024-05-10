import React from 'react'

export default function DoNotReRenderMe() {
	const count = React.useRef(0)

	React.useEffect(() => {
		count.current++
	})

	return <div>Do Not Render Me</div>
}
