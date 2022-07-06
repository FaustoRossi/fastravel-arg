import React from "react";
import Hero from "./Hero";

const Contact = () => {
	return (
		<div className="max-w-[1240px] mx-auto p-4 h-screen">
			<h1 className="text-2xl font-bold text-center p-4">
			Contacto
			</h1>
			<form className="max-w-[600px] mx-auto">
				<div className="grid grid-cols-2 gap-2">
					<input
						className="border shadow-lg p-3"
						type="text"
						placeholder="Nombre"
					/>
					<input
						className="border shadow-lg p-3"
						type="email"
						placeholder="Email"
					/>
				</div>
				<input
					className="border shadow-lg p-3 w-full my-4"
					type="text"
					placeholder="Asunto"
				/>
				<textarea
					className="border shadow-lg p-3 w-full"
					cols="30"
					rows="10"
					placeholder="Mensaje"
				></textarea>
				<button className='border shadow-lg p-3 w-full mt-2'>Enviar</button>
			</form>
		</div>
	);
};

export default Contact;
