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
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae maximus sapien. Sed convallis tortor in erat luctus lacinia. Nulla non sollicitudin eros, in accumsan ante.</p>
					</li>
					<li>
						<img src="/testimonial/person2.jpg" alt="person2" className='max-h-64' />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae maximus sapien. Sed convallis tortor in erat luctus lacinia. Nulla non sollicitudin eros, in accumsan ante.</p>
					</li>
					<li>
						<img src="/testimonial/person3.jpg" alt="person3" className='max-h-64' />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae maximus sapien. Sed convallis tortor in erat luctus lacinia. Nulla non sollicitudin eros, in accumsan ante.</p>
					</li>
					<li>
						<img src="/testimonial/person4.jpg" alt="person4" className='max-h-64' />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae maximus sapien. Sed convallis tortor in erat luctus lacinia. Nulla non sollicitudin eros, in accumsan ante.</p>
					</li>
				</ul>
				<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll text-center text-slate-400 text-s" aria-hidden="true">
					<li>
						<img src="/testimonial/person1.jpg" alt="person1" className='max-h-64' />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae maximus sapien. Sed convallis tortor in erat luctus lacinia. Nulla non sollicitudin eros, in accumsan ante.</p>
					</li>
					<li>
						<img src="/testimonial/person2.jpg" alt="person2" className='max-h-64' />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae maximus sapien. Sed convallis tortor in erat luctus lacinia. Nulla non sollicitudin eros, in accumsan ante.</p>
					</li>
					<li>
						<img src="/testimonial/person3.jpg" alt="person3" className='max-h-64' />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae maximus sapien. Sed convallis tortor in erat luctus lacinia. Nulla non sollicitudin eros, in accumsan ante.</p>
					</li>
					<li>
						<img src="/testimonial/person4.jpg" alt="person4" className='max-h-64' />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae maximus sapien. Sed convallis tortor in erat luctus lacinia. Nulla non sollicitudin eros, in accumsan ante.</p>
					</li>
				</ul>
			</div>
			</>
		);
	}
};
