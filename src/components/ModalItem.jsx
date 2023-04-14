
const ModalItem = ({ setShowModal, children }) => {
    return (
        <div className="fixed inset-0 z-10">
            <div className="fixed inset-0 w-full h-full bg-black opacity-40"
                onClick={() => setShowModal(false)}>
            </div>
            <div className="flex max-h-screen px-4 py-8">
                <div className="relative w-4/6 p-4 mx-auto bg-white rounded-md shadow-lg overflow-auto">
                        <div className="flex justify-center">
                            <div className="mb-3 w-full">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ModalItem
