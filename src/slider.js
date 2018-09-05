import React, { Component } from 'react';

class Slider extends Component {
  render() {
    return (
	    <div id="slider">
	    	<h1>БЫСТРАЯ ДОСТАВКА</h1>
	    	<div class="info">бетона, щебня, песка <br></br> и других нерудны материалов <br></br> по Москве и Московской области</div>
	    	<div>
	    	<button class="main-btn"> Подробнее о доставке </button>
	    	<div class="catalog">или перейти в каталог</div>
	    	</div>
	    </div>
    );
  }
}

export default Slider;