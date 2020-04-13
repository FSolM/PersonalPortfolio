import React from 'react';

import Tejuino from '../../assets/images/projects/Logo-Tejuino.png';
import ListingState from '../../assets/images/projects/Logo-ListingState.png';
import NoImage from '../../assets/images/NoImage.png';

function FeaturedRender (props) {
  const getThumbnail = () => {
    switch (props.name) {
      case 'Tejuino':
        return Tejuino;
      case 'Listing State':
        return ListingState;
      case 'Coming Soon':
        return NoImage;
      default:
        console.error("Couldn't find the thumbnail. How did this happened? We're smarter than this!");
        return NoImage;
    }
  };

  return (
    <a href = { props.url } target = '_blank' rel = 'noopener noreferrer'>
      <div className = { `container container-featured-project colour-${props.colour}` }>
        <div className = 'row row-featured-project'>
          <div className = 'col-12'>
            <img src = { getThumbnail() } alt = { props.name } />
          </div>
          <div className = 'col-12'>{ props.name }</div>
        </div>
      </div>
    </a>
  );
}

export default FeaturedRender;
