import React from 'react';

import { Link } from 'react-router-dom';
// <Link to="/">Home</Link>

import AdditionalRender from './helpers/AdditionalRender';
import FeaturedRender from './helpers/FeaturedRender';

function MainSection() {
  return (
    <div className = 'container container-main'>
      <div className = 'row'>
        <div className = 'container container-featured'>
          <div className = 'row row-featured'>
            <h2>Featured Projects</h2>
            <div className = 'col-md-6'>
              <FeaturedRender name = 'Tejuino' url = 'https://github.com/FSolM/Tejuino' colour = 'red' />
            </div>
            <div className = 'col-md-6'>
              <FeaturedRender name = 'Listing State' url = 'https://github.com/FSolM/listing-state' colour = 'blue' />
            </div>
            <div className = 'col-md-6'>
              <FeaturedRender name = 'Coming Soon' url = '#' colour = 'green' />
            </div>
            <div className = 'col-md-6'>
              <FeaturedRender name = 'Coming Soon' url = '#' colour = 'yellow' />
            </div>
          </div>
        </div>
      </div>
      <div className = 'row'>
        <div className = 'container container-additional-projects'>
          <div className = 'row row-additional-projects'>
            <h2>Additional Projects</h2>
            <div className = 'col-12'>
              <AdditionalRender name = 'cDate Formatting' description = "An npm module that helps in formatting JS' date object" url = 'https://github.com/FSolM/cdate-formatting' colour = 'red' />
            </div>
            <div className = 'col-12'>
              <AdditionalRender name = 'DnBot' description = 'A Telegram companion bot for DnD parties' url = 'https://github.com/FSolM/dn-bot' colour = 'blue' />
            </div>
            <div className = 'col-12'>
              <AdditionalRender name = 'React Bookstore' description = 'A Bookstore page project using React + Redux' url = 'https://github.com/FSolM/react-bookstore' colour = 'green' />
            </div>
            <div className = 'col-12'>
              <AdditionalRender name = 'Rails Network' description = 'A Social Network using Ruby on Rails' url = 'https://github.com/FSolM/rails-network' colour = 'yellow' />
            </div>
            <div className = 'col-12'>
              <AdditionalRender name = 'JS Battleship' description = 'A web-based Battleship game using JS' url = 'https://github.com/FSolM/JS-battleship' colour = 'red' />
            </div>
            <div className = 'col-12'>
              <AdditionalRender name = 'Using Bootstrap' description = 'A HTML mock up page using Bootstrap' url = 'https://github.com/FSolM/using-bootstrap' colour = 'blue' />
            </div>
          </div>
        </div>
      </div>
      <div className = 'row'>
        <div className = 'container container-extras'>
          <div className = 'row row-extras'>
            <div className = 'col-12'>
              <Link to = '/models'>3D Models</Link>
            </div>
            <div className = 'col-12'>
              <a href = 'https://github.com/FSolM/MicroverseProjects' target = '_blank' rel = 'noopener noreferrer'>Microverse Projects</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
