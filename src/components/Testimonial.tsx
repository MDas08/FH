'use client'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class Testimonial extends Component {
	render() {
		return (
			<>
			<h1 className='text-slate-50 rounded-lg bold-32 lg:bold-64 text-center my-5'>Become a <span className='text-teal-20'>heathier version</span> of you <br/>just like our customers</h1>
			
			<div className="w-full inline-flex flex-nowrap">
				<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll text-center text-slate-400 text-s">
					<li>
						<img src="/testimonial/person1.jpg" alt="person1" className='max-h-64' />
						<p>As someone who has struggled with joint pain for years, finding the right solution was a game-changer.</p>
					</li>
					<li>
						<img src="/testimonial/person2.jpg" alt="person2" className='max-h-64' />
						<p>This app has been a lifesaver for my arthritis. The daily tracking tools help me monitor my pain levels, and the exercise routines are tailored to my specific needs.</p>
					</li>
					<li>
						<img src="/testimonial/person3.jpg" alt="person3" className='max-h-64' />
						<p>Living with chronic joint pain is challenging, but this app has made a significant difference in my daily life.</p>
					</li>
					<li>
						<img src="/testimonial/person4.jpg" alt="person4" className='max-h-64' />
						<p>I've tried several apps for joint pain management, and this one stands out. The user-friendly interface makes it easy to log my symptoms</p>
					</li>
				</ul>
				<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll text-center text-slate-400 text-s" aria-hidden="true">
				<li>
						<img src="/testimonial/person1.jpg" alt="person1" className='max-h-64' />
						<p>As someone who has struggled with joint pain for years, finding the right solution was a game-changer.</p>
					</li>
					<li>
						<img src="/testimonial/person2.jpg" alt="person2" className='max-h-64' />
						<p>This app has been a lifesaver for my arthritis. The daily tracking tools help me monitor my pain levels, and the exercise routines are tailored to my specific needs.</p>
					</li>
					<li>
						<img src="/testimonial/person3.jpg" alt="person3" className='max-h-64' />
						<p>Living with chronic joint pain is challenging, but this app has made a significant difference in my daily life.</p>
					</li>
					<li>
						<img src="/testimonial/person4.jpg" alt="person4" className='max-h-64' />
						<p>I've tried several apps for joint pain management, and this one stands out. The user-friendly interface makes it easy to log my symptoms!</p>
					</li>
				</ul>
			</div>
			</>
		);
	}
};
