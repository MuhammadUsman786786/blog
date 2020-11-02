import BlogItem from "./Components/BlogItem";
import UserItem from "./Components/UserItem";
import PopularPosts from "./Components/PopularPosts";
import Tags from "./Components/Tags";

function App() {
	return (
		<div>
			<div className="w3-content" style={ {maxWidth: '1400px'} }>
				<header className="w3-container w3-center w3-padding-32">
					<h1><b>MY BLOG</b></h1>
					<p>Welcome to the blog of <span className="w3-tag">unknown</span></p>
				</header>
				<br/>
				<div className="w3-row">
					<div className="w3-col l8 s12">
						<BlogItem
							title={'TITLE HEADING'}
							imageUrl={'/images/woods.jpg'}
							description={'Title description, '}
							time={'April 7, 2014'}
							body={'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem\n' +
							'euismod\n' +
							'placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non\n' +
							'congue ullam corper. Praesent tincidunt sed\n' +
							'tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non\n' +
							'fringilla.'}
							commentsCount={0}
						/>
						<hr/>
						<BlogItem
							title={'BLOG ENTRY 1'}
							imageUrl={'/images/bridge.jpg'}
							description={'Title description, '}
							time={'April 2, 2015'}
							body={'Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem\n' +
							'euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed\n' +
							'ultricies mi non congue ullam corper. Praesent tincidunt sed\n' +
							'tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam\n' +
							'non\n' +
							'fringilla.'}
							commentsCount={2}
						/>
					</div>
					<div className="w3-col l4">
						<UserItem/>
						<hr/>
						<PopularPosts/>
						<hr/>
						<Tags/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App
