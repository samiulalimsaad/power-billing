import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/features/auth/authApi";
import { signUpValidationSchema } from "../utils/validationSchema";

const initialValues = {
    fullName: "",
    email: "",
    password: "",
    phone: "",
};
const Register = () => {
    const [register] = useRegisterMutation();

    const navigate = useNavigate();

    const submitHandler = async (
        values: typeof initialValues,
        { setSubmitting }: { setSubmitting: (arg: boolean) => void }
    ) => {
        try {
            console.log("first");
            const { data } = (await register(values)) as {
                data: { success: boolean };
            };
            console.log(data);
            if (data.success) {
                setTimeout(() => {
                    navigate("/");
                }, 2000);
            }
            setSubmitting(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="hero min-h-screen bg-base-content text-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card w-full  shadow-2xl bg-base-100 text-base-content">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={signUpValidationSchema}
                        onSubmit={submitHandler}
                    >
                        {({ isSubmitting }) => (
                            <Form className="card-body">
                                <div className="text-center ">
                                    <h1 className="text-2xl font-bold text-slate-800">
                                        Register
                                    </h1>
                                </div>
                                <div className="divider"></div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            full Name
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
                                        name="fullName"
                                        placeholder="fullName"
                                        className="input input-bordered"
                                        required
                                    />
                                    <label className="label">
                                        <span className="label-text text-error">
                                            <ErrorMessage
                                                name="fullName"
                                                component="div"
                                            />
                                        </span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Email
                                        </span>
                                    </label>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="email"
                                        className="input input-bordered"
                                        required
                                    />
                                    <label className="label">
                                        <span className="label-text text-error">
                                            <ErrorMessage
                                                name="email"
                                                component="div"
                                            />
                                        </span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Phone
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
                                        name="phone"
                                        placeholder="phone"
                                        className="input input-bordered"
                                        required
                                    />
                                    <label className="label">
                                        <span className="label-text text-error">
                                            <ErrorMessage
                                                name="phone"
                                                component="div"
                                            />
                                        </span>
                                    </label>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Password
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered"
                                        required
                                    />
                                    <label className="label">
                                        <span className="label-text text-error">
                                            <ErrorMessage
                                                name="password"
                                                component="div"
                                            />
                                        </span>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={isSubmitting}
                                    >
                                        Register
                                    </button>
                                </div>

                                <div className="divider">Or</div>
                                <div className="form-control  text-center">
                                    <Link
                                        className="link text-primary"
                                        to="/login"
                                    >
                                        Login
                                    </Link>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Register;
