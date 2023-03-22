import React from 'react'
import $ from 'jquery'
import ragemp from '../../../modules/ragemp'

import './shop.css'

import { HiShoppingCart } from 'react-icons/hi'
import { MdInventory } from 'react-icons/md'

export default function Shop(props) {
	return (
		<div className="menu-shop">
			<div className="menu-shop-header">
				<button style={{marginRight: '10px'}} className="btn">
					<HiShoppingCart />
					История пополнения
				</button>
				<button className="btn">
					<MdInventory />
					Инвентарь
				</button>
				<section className="menu-shop-header-balance">
					<img src='./assets/donate.png' />
					<h1>85 728 592</h1>
				</section>
			</div>


			<div className="menu-shop-root menu-shop-roulette" style={{display: props.bodyNav !== 4 ? 'none' : 'block'}}>
				<div className="menu-shop-roulette-body">
					
				</div>
			</div>
		</div>
	)
}