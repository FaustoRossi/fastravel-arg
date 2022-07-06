import React from "react";
import Image from "next/image";
const Portfolio = () => {
	return (
		<div className="max-w-[1240px] mx-auto py-16 text-center">
			<h1 className="font bold text-2xl p-4">Próximas Aventuras</h1>
			<div className="grid grid-rows-none md:grid-cols-5 p-4 md:gap-4">
				<div className="w-full h-full col-span-2 md:col-span-3 row-span-2">
					<Image
						src="https://images.unsplash.com/photo-1493724798364-c4ca5e3f5fd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80"
						alt="fitz roy"
						layout="responsive"
						width="677"
						height="451"
					/>
				</div>
				<div className="w-full h-full">
					<Image
						src="https://images.unsplash.com/photo-1615801626707-07127ff4604a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=943&q=80"
						alt="pampa"
						layout="responsive"
						width="215"
						height="217"
						object="cover"
					/>
				</div>
				<div className="w-full h-full">
					<Image
						src="https://images.pexels.com/photos/12045526/pexels-photo-12045526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt="iguazu"
						layout="responsive"
						width="215"
						height="217"
						object="cover"
					/>
				</div>
				<div className="w-full h-full">
					<Image
						src="https://images.unsplash.com/photo-1582637980978-209a19493322?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
						alt="perito moreno"
						layout="responsive"
						width="215"
						height="217"
						object="cover"
					/>
				</div>
				<div className="w-full h-full">
					<Image
						src="https://images.unsplash.com/photo-1575819453111-abb276cd4973?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
						layout="responsive"
						width="215"
						height="217"
						object="cover"
						alt="fitz roy"
					/>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
