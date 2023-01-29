import { ErrorMessage, Field, Form, Formik } from "formik";
import { Dispatch, SetStateAction } from "react";
import { billInterface } from "../interfaces/bill.interface";
import {
    useAddBillMutation,
    useEditBillMutation,
} from "../redux/features/bill/billApi";
import { billValidationSchema } from "../utils/validationSchema";
const initialValues: billInterface = {
    fullName: "",
    email: "",
    phone: "",
    paidAmount: 0,
};

export default function AddBillingModal({
    setIsOpen,
    bill,
}: {
    bill?: billInterface;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
    const [addBill] = useAddBillMutation();
    const [editBill] = useEditBillMutation();

    const submitHandler = async (
        values: billInterface,
        { setSubmitting }: { setSubmitting: (arg: boolean) => void }
    ) => {
        try {
            if (bill?._id) {
                await editBill({ id: bill._id, data: values });
            } else {
                await addBill(values);
            }
            setSubmitting(false);
            setIsOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Formik
            initialValues={bill?._id ? bill : initialValues}
            validationSchema={billValidationSchema}
            onSubmit={submitHandler}
        >
            {({}) => (
                <Form>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <Field
                            type="text"
                            name="fullName"
                            placeholder="full Name"
                            className="input input-bordered w-full "
                            required
                        />
                        <label className="label">
                            <span className="label-text text-error">
                                <ErrorMessage name="fullName" component="div" />
                            </span>
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <Field
                            type="email"
                            name="email"
                            placeholder="email"
                            className="input input-bordered w-full "
                            required
                        />
                        <label className="label">
                            <span className="label-text text-error">
                                <ErrorMessage name="email" component="div" />
                            </span>
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <Field
                            type="text"
                            name="phone"
                            placeholder="phone number"
                            className="input input-bordered w-full "
                            required
                        />
                        <label className="label">
                            <span className="label-text text-error">
                                <ErrorMessage name="phone" component="div" />
                            </span>
                        </label>
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Payable Amount</span>
                        </label>
                        <Field
                            type="number"
                            name="paidAmount"
                            placeholder="amount"
                            min={0}
                            className="input input-bordered w-full "
                            required
                        />
                        <label className="label">
                            <span className="label-text text-error">
                                <ErrorMessage
                                    name="paidAmount"
                                    component="div"
                                />
                            </span>
                        </label>
                    </div>

                    <div className="form-control w-full my-4">
                        <button
                            className="btn btn-block btn-success"
                            type="submit"
                        >
                            {bill?._id ? "Update bill" : "Add bill"}
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
