import { ErrorMessage, Field, Form, Formik } from "formik";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { useAddBillMutation } from "../redux/features/bill/billApi";
import { billValidationSchema } from "../utils/validationSchema";
const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    paidAmount: "",
};

export default function AddBillingModal({
    setIsOpen,
}: {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
    const [addBill] = useAddBillMutation();

    const navigate = useNavigate();

    const submitHandler = async (
        values: typeof initialValues,
        { setSubmitting }: { setSubmitting: (arg: boolean) => void }
    ) => {
        try {
            console.log("first");
            const { data } = (await addBill(values)) as {
                data: { success: boolean };
            };
            console.log(data);
            setSubmitting(false);
            setIsOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
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
                            type="text"
                            name="paidAmount"
                            placeholder="mount"
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
                            Add bill
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
