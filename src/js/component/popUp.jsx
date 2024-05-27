export const PopUp = () => {
	const { store, actions } = useContext(Context);
	const [show, setShow] = useState(false)

	return (
		<div className="container">
			

			{show ? <div style={{
				width: "50%",
				position: "absolute",
				left: "25%",
				right: "50%",
				top: "20%",
				bottom: "80%",
				zIndex: "99",
				display: `${show ? "visible" : "none"}`,
			}}>
				<div className="bg-white d-flex flex-column p-3 ">
					<FormController />
					<button
						className="btn btn-danger"
						onClick={() => setShow(false)}
					>
						CANCEL
					</button>

				</div>
			</div>
           

 : ''}
 </div>
    )}
