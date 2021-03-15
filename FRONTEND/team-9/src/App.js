import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState, useEffect } from "react"
import { Modal, Button } from "react-bootstrap"
function App() {
	const [query, setQuery] = useState("")
	const [getData, setData] = useState(false)
	const [show, setShow] = useState(true)
	const [emergency, bypass] = useState(false)

	useEffect(async () => {
		const URL = "https://api.askdata.com/smartinsight/data/nl/result"
		const token = "6c84080a-8de0-40aa-bff0-d0d70e57e2c0"
	}, [emergency])

	useEffect(async () => {
		const URL = ""
		const data = await fetch(URL, {
			method: "POST",
			body: JSON.stringify({ query }),
		})
	}, [getData])
	return (
		<>
			<div className="App flex d-flex flex-column justify-content-center">
				<div>
					Common data retrieval solutions work by highly technical mean, but by
					leveraging the power of <strong>ASKDATA</strong> we can request higly
					sturctured data with the ease of a gogle search and the clarity of a
					powerpoint.
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
			<Modal
				show={show}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				variant="dark"
				className="bg-dark-gray"
			>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						Modal heading
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>Your Data</h4>
					<p>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
						dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
						ac consectetur ac, vestibulum at eros.
					</p>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setShow(false)}>New Search</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default App
