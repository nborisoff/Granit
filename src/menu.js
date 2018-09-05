import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
		<nav id="menu">
	        <ul>
	          	<li><a href="#service">Главная</a> </li>
	            <li><a href="#portfolio">Каталог</a> </li>
	            <li><a href="#about">Услуги</a> </li>
	            <li><a href="#team">Доставка</a> </li>
	            <li><a href="#blog">О компании</a> </li>
	            <li><a href="#contact">Контакты</a> </li>
	       	</ul>
	    </nav>
    );
  }
}

export default Menu;