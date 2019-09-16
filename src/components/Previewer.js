import React, { useEffect } from "react";
import marked from "marked";

const Previewer = ({ input, setInput }) => {
	function markdownText() {
		const rawMarkup = marked(input, { sanitize: true });
		return { __html: rawMarkup };
	}

	return (
		<div
			style={{ width: 500, height: "auto", border: "1px solid black" }}
			id="preview"
			className="m-auto"
			dangerouslySetInnerHTML={markdownText()}
		></div>
	);
};

export default Previewer;
