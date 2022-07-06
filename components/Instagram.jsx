import React from "react";
import Ig1 from "../public/assets/Ig1.jpg";
import Ig2 from "../public/assets/Ig2.jpg";
import Ig3 from "../public/assets/Ig3.jpg";
import Ig4 from "../public/assets/Ig4.jpg";
import Ig5 from "../public/assets/Ig5.jpg";
import Ig6 from "../public/assets/Ig6.jpg";
import InstagramImage from "./InstagramImage";

const Instagram = () => {
	return (
		<div className="max-w-[1240px] mx-auto text-center py-24">
			<p className="text-2xl font-bold">Mas aventuras en Instagram</p>
			<p className="pb-4 font-bold">@Fastrvl</p>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
				<InstagramImage socialImg={Ig1} />
				<InstagramImage socialImg={Ig2} />
				<InstagramImage socialImg={Ig3} />
				<InstagramImage socialImg={Ig4} />
				<InstagramImage socialImg={Ig5} />
				<InstagramImage socialImg={Ig6} />
			</div>
		</div>
	);
};

export default Instagram;
