import React, { useEffect, useState } from 'react';
import images from './data';
import { SRLWrapper } from 'simple-react-lightbox';
import Button from '@material-ui/core/Button';

import VisibilityIcon from '@material-ui/icons/Visibility';
const options = {
	// settings: {
	// 	overlayColor: 'rgb(25, 136, 124)',
	// 	autoplaySpeed: 1500,
	// 	transitionSpeed: 900
	// },
	// buttons: {
	// 	backgroundColor: 'red',
	// 	iconColor: 'rgba(126, 172, 139, 0.8)'
	// },
	// caption: {
	// 	captionColor: '#a6cfa5',
	// 	captionFontFamily: 'Raleway, sans-serif',
	// 	captionFontWeight: '300',
	// 	captionTextTransform: 'uppercase'
	// },
	// progressBar: {
	// 	height: '20px',
	// 	fillColor: 'blue',
	// 	backgroundColor: 'white'
	// }
};

const Protfollio=()=> {
	const [tag, setTag] = useState('all design');
	const [filteredImages, setFilteredImages] = useState([]);

	useEffect(
		() => {
			tag === ('all design') ? setFilteredImages(images) : setFilteredImages(images.filter(image => image.tag === tag));
		},
		[tag]
	);

	return (
		<div className="App resume contact">
			<div className="tags">
				<TagButton name="all design" tagActive={tag === 'all design' ? true : false}  handleSetTag={setTag} /> /
				<TagButton name="Ui/Ux Design" tagActive={tag === 'Ui/Ux Design' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="graphic design" tagActive={tag === 'graphic design' ? true : false} handleSetTag={setTag} /> /
			</div>
			<SRLWrapper options={options}>
				<div className="container-protfollio">
					{filteredImages.map(image => (
						<div key={image.id} className="image-card">
							<a href={`/images/${image.imageName}`}>
								<img className="image" src={`/images/${image.imageName}`} alt="" />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
			<Button style={{margin:"5%"}} variant="contained" color="primary" size="large" endIcon={<VisibilityIcon/>}>
  			<a href="https://www.behance.net/ahsanfe" style={{textDecoration:"none", color:"white"}}>show more</a>
			</Button>
		</div>
	);
}

const TagButton = ({ name, handleSetTag, tagActive }) => {
	return (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
	);
};

export default Protfollio;