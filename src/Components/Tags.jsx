import React from 'react'

const Tags = (props) => {
	const tags = [
		{id: '1', title: 'Travel', isActive: true},
		{id: '2', title: 'New York', isActive: false},
		{id: '3', title: 'London', isActive: false},
		{id: '4', title: 'IKEA', isActive: false},
		{id: '5', title: 'NORWAY', isActive: false},
		{id: '6', title: 'DIY', isActive: false},
		{id: '7', title: 'Ideas', isActive: false},
		{id: '8', title: 'Baby', isActive: false},
		{id: '9', title: 'Family', isActive: false},
		{id: '10', title: 'News', isActive: false},
		{id: '11', title: 'Clothing', isActive: false},
		{id: '12', title: 'Shopping', isActive: false},
		{id: '13', title: 'Sports', isActive: false},
		{id: '14', title: 'Games', isActive: false},
	]
	
	return <div className="w3-card w3-margin">
		<div className="w3-container w3-padding">
			<h4>Tags</h4>
		</div>
		<div className="w3-container w3-white">
			<p>
				{ tags.map((item) => {
					const classNames=item.isActive?'w3-black':'w3-light-grey'
					return <span
						key={item.id}
						className={`w3-tag w3-small w3-margin-bottom ${classNames}`}
						style={{paddingTop:5,paddingBottom:5,paddingLeft:6,paddingRight:6}}>
						{ item.title }
					</span>
				})
				}
			</p>
		</div>
	</div>
}

export default Tags

Tags.propTypes = {}

Tags.defaultProps = {}
