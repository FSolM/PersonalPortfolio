import React from 'react';

function AdditionalRender (props) {
  return (
    <a href = { props.url } target = '_blank' rel = 'noopener noreferrer'>
      <div className = { `container container-project colour-${props.colour}` }>
        <div className = 'row row-project'>
          <div className = 'col-12'>{ props.name }</div>
          <div className = 'col-12'>{ props.description }</div>
        </div>
      </div>
    </a>
  );
}

export default AdditionalRender;
