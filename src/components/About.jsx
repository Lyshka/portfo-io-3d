import React from 'react'
import Tilt from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from "../styles"
import {services} from "../constants"
import {fadeIn, textVariant} from "../utils/motion"
import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
	return (
		<Tilt className="xs:w-64 w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-3xl shadow-card"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450
					}}
					className="bg-tertiary rounded-3xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={title} className="w-16 h-16 object-contain" />
					
					<h3 className='text-white text-xl font-bold text-center'>
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	)
}

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>
					Introduction
				</p>

				<h2 className={styles.sectionHeadText}>
					Overview.
				</h2>
			</motion.div>

			<motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-lg max-w-3xl leading-8">
				I'm software developer with
				experience in <span className='font-bold'>TypeScript</span> and&nbsp;
				<span className='font-bold'>JavaScript</span>, and expertise in frameworks
				like <span className='font-bold'>React</span>, <span className='font-bold'>Node.js</span> and <span className='font-bold'>React Native</span>. I'm a quick learner and
				create efficient, scalable, and
				user-friendly solutions that solve
				problems. Let's work together
				to bring your ideas to life!
			</motion.p>

			<div className='mt-20 flex flex-wrap gap-10'>
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
  )
}

export default SectionWrapper(About, "about") 