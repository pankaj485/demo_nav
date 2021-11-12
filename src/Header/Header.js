import React from "react";
import "./header.css";

function Header() {
	return (
		<div className="header">
			<div className="line"></div>
			<h1>stay in touch with our updates & offers</h1>

			<div className="inputArea">
				<input
					className="inputField"
					type="text"
					name=""
					id=""
					placeholder="enter your e-mail id "
				/>
			</div>
		</div>
	);
}

export default Header;
