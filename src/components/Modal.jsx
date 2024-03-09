const Modal = ({ children }) => {
	return (
		<div className="absolute top-0 left-0 h-[100vh] w-full bg-[rgba(0,0,0,0.5)] z-40 flex items-center justify-center">
			{children}
		</div>
	);
};

export default Modal;
