import React, { useState, useEffect } from "react";
import Previewer from "./Previewer";
import defaultText from "../defaultText";

const Editor = () => {
	const [input, setInput] = useState(defaultText);

	return (
		<div className="text-center mb-3">
			<h1>Editor</h1>
			<textarea
				onChange={(e) => setInput(e.target.value)}
				value={input}
				className="mb-3"
				id="editor"
				cols="50"
				rows="10"
			></textarea>
			<h2 className="mb-3">Previewer</h2>
			<Previewer input={input} setInput={setInput} />
		</div>
	);
};

export default Editor;
