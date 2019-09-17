import React, { useState } from "react";
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
				cols="70"
				rows="10"
			></textarea>
			<h2 className="mb-3">Previewer</h2>
			<Previewer input={input} />
		</div>
	);
};

export default Editor;
