import React from "react";
import marked from "marked";

const Previewer = ({ input }) => {
	function markdownText() {
		const rawMarkup = marked(input, { sanitize: true });
		return { __html: rawMarkup };
	}

	return (
		<div
			style={{
				width: 700,
				height: "auto",
				border: "1px solid black",
				borderRadius: 15,
				textAlign: "left",
				padding: 10,
				margin: "auto"
			}}
			id="preview"
			dangerouslySetInnerHTML={markdownText()}
		></div>
	);
};

export default Previewer;
