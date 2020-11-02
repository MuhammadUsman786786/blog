import React from 'react'

const PopularPosts = (props) => {
	const popularPostsList = [
		{title: 'Lorem', subtltle: 'Sed mattis nunc', imageUrl: '/images/workshop.jpg',},
		{title: 'Ipsum', subtltle: 'Praes tinci sed', imageUrl: '/images/gondol.jpg',},
		{title: 'Dorum', subtltle: 'Ultricies congue', imageUrl: '/images/skies.jpg',},
		{title: 'Mingsum', subtltle: 'Lorem ipsum dipsum', imageUrl: '/images/rock.jpg',},
	]
	return <div className="w3-card w3-margin">
		<div className="w3-container w3-padding">
			<h4>Popular Posts</h4>
		</div>
		<ul className="w3-ul w3-hoverable w3-white">
			{
				popularPostsList.map((item)=>{
					const {title,subtitle,imageUrl}=item||{}
					return 	<li className="w3-padding-16">
						<img src={ imageUrl } alt="Image" className="w3-left w3-margin-right" style={ {width: '50px'} }/>
						<span className="w3-large">{ title }</span><br/>
						<span>{ subtitle }</span>
					</li>
				})
			}
		</ul>
	</div>
}

export default PopularPosts

PopularPosts.propTypes = {}

PopularPosts.defaultProps = {}
