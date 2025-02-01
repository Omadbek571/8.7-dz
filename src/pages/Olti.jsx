import React from 'react';
import useModalStore from '../store/modal';

function Olti() {
    const { modalVal, openModal, closeModal } = useModalStore();

    return (
        <div className="flex items-center justify-center h-screen">
            {!modalVal && (
                <button
                    onClick={openModal}
                    className="p-4 bg-blue-600 text-white font-bold rounded-md w-48 h-16 flex justify-center items-center shadow-lg hover:bg-blue-700 transition">
                    Modalni ochish
                </button>
            )}

            {modalVal && (
                <div className="fixed inset-0 flex items-center justify-center ">
                    <div className="bg-white p-6 rounded-md w-80 text-center">
                        <h2 className="text-lg font-bold mb-4">Modal Oyna</h2>
                        <p>Bu modal oynaning mazmuni.</p>

                        <button
                            onClick={closeModal}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                            Yopish
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Olti;
