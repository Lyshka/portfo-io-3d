import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import {styles} from "../styles"
import {navLinks} from "../constants"
import {logo, menu, close} from "../assets"
import useOutside from '../hook/useOutside'

const Navbar = () => {
	const [active, setActive] = useState("")
	const {ref, isShow, setIsShow} = useOutside(false)

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
				<Link
					to={"/"}
					className="flex items-center gap-2"
					onClick={() => {
						setActive("")
						window.scrollTo(0,0)
					}}
				>
					<img
						className='sm:w-24 sm:h-24 w-28 h-28 object-contain'
						src={logo}
						alt="logo"
					/>

					<p className='text-white text-lg font-bold cursor-pointer flex'>
						Alexei &nbsp;
						<span className='sm:block hidden'>
							| Lyshka
						</span>
					</p>
				</Link>

				<ul className='list-none hidden sm:flex flex-row gap-10'>
					{navLinks.map(({id, title}) => (
						<li
							key={id}
							className={`${active === title ? "text-white" : "text-secondary"} hover:text-white text-lg font-medium cursor-pointer`}
							onClick={() => setActive(title)}
						>
							<a href={`#${id}`}>
								{title}
							</a>
						</li>
					))}
				</ul>

				<div ref={ref} className='sm:hidden flex flex-1 justify-end items-center'>
					<img
						src={isShow ? close : menu}
						alt="menu"
						className='w-7 h-7 object-contain cursor-pointer'
						onClick={() => setIsShow(prv => !prv)}
					/>

					<div className={`${!isShow ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl mt-5`}>
						<ul className='list-none flex justify-end items-start flex-col gap-4'>
							{navLinks.map(({id, title}) => (
								<li
									key={id}
									className={`${active === title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-base`}
									onClick={() => {
										setActive(title)
									}}
								>
									<a href={`#${id}`}>
										{title}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
  )
}

export default Navbar