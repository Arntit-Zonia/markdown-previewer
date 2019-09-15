import React, { useState } from "react";
import Previewer from "./Previewer";

const Editor = () => {
	const [input, setInput] = useState("");

	return (
		<div>
			<h1>Editor</h1>
			<textarea
				onChange={(e) => setInput(e.target.value)}
				value={input}
				className="m-3"
				id="editor"
				cols="50"
				rows="10"
			></textarea>
			<Previewer input={input} />
		</div>
	);
};

export default Editor;
