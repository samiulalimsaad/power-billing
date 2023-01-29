import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Dispatch, Fragment, ReactNode } from "react";

export default function Modal({
    children,
    title,
    isOpen,
    setIsOpen,
}: {
    children: ReactNode | ReactNode[];
    title: string;
    isOpen: boolean;
    setIsOpen: Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => null}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto backdrop-blur-[2px]">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-semibold leading-6 text-gray-900 text-center"
                                >
                                    {title}
                                </Dialog.Title>
                                <button
                                    className="btn btn-sm btn-circle btn-outline absolute right-2 top-2"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <XMarkIcon className="h-5 w-5" />
                                </button>
                                <div className="divider"></div>
                                <div className="mt-2">{children}</div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
