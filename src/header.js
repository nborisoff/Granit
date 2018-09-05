import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
		<header id="header">
			<div class="logo"></div>
			<div class="text-logo">Доставка нерудных материалов</div>
			<div class="main-text-logo">GRANIT</div>
			<div class="contact">8 800 342-13-33</div>
			<div class="contact-info">Бесплатный звонок по России</div>
	        <button class="header-btn"> Обратный звонок </button>
		</header>
    );
  }
}

export default Header;