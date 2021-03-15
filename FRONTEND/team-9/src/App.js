import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState, useEffect } from "react"
function App() {
	const [query, setQuery] = useState("")
	const [getData, setData] = useState(false)
	useEffect(async () => {
		const URL = ""
		const data = await fetch(URL, {
			method: "POST",
			body: JSON.stringify({ query }),
		})
	}, [getData])
	return (
		<div className="App flex d-flex flex-column justify-content-center">
			<div>
				Common data retrieval solutions work by highly technical mean, but by
				leveraging the power of ASKDATA we can request higly sturctured data
				with the ease of a gogle search and the clarity of a powerpoint.
				<br />
				<br />
				simply type your question and marvel at the results
			</div>
			<div className="">
				<form
					onSubmit={(e) => {
						setData(!getData)
					}}
					className="d-flex m-2"
				>
					<input
						type="text"
						value={query}
						onChange={(e) => {
							setQuery(e.target.value)
						}}
						className="p-2 mr-2 flex-grow-1"
					></input>
					<input type="submit" value="search" />
				</form>
			</div>
		</div>
	)
}

export default App
