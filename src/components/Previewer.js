import React from "react";
import marked from "marked";

const Previewer = (props) => {
	function markdownText() {
		const rawMarkup = marked(props.input, { sanitize: true });
		return { __html: rawMarkup };
	}

	return (
		<div
			style={{ width: 500, height: 300, border: "1px solid black" }}
			id="preview"
			className="m-auto"
			dangerouslySetInnerHTML={markdownText()}
		></div>
	);
};

export default Previewer;
