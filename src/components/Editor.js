import React, { useState, useEffect } from "react";
import Previewer from "./Previewer";
import defaultText from "../defaultText";

const Editor = () => {
	const [input, setInput] = useState(defaultText);

	return (
		<div style={{ whiteSpace: "pre-line" }}>
			<h1>Editor</h1>
			<textarea
				onChange={(e) => setInput(e.target.value)}
				value={input}
				className="m-3"
				id="editor"
				cols="50"
				rows="10"
			></textarea>
			<Previewer input={input} setInput={setInput} />
		</div>
	);
};

export default Editor;
