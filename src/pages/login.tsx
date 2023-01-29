import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { loginValidationSchema } from "../utils/validationSchema";

const initialValues = {
    email: "",
    password: "",
};

const Login = () => {
    const [login] = useLoginMutation();

    const navigate = useNavigate();

    const submitHandler = async (
        values: typeof initialValues,
        { setSubmitting }: { setSubmitting: (arg: boolean) => void }
    ) => {
        try {
            const { data } = (await login(values)) as {
                data: { success: boolean };
            };
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
        <div className="hero min-h-screen bg-base-content text-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 text-base-content">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={loginValidationSchema}
                        onSubmit={submitHandler}
                    >
                        {({ isSubmitting }) => (
                            <Form className="card-body">
                                <h1 className="text-2xl font-semibold text-center">
                                    Login
                                </h1>
                                <div className="divider"></div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Email
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
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
                                            Password
                                        </span>
                                    </label>
                                    <Field
                                        type="text"
                                        name="password"
                                        placeholder="password"
                                        className="input input-bordered"
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
                                        className="btn btn-primary"
                                        disabled={isSubmitting}
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                </div>
                                <div className="divider">OR</div>
                                <div className="form-control  text-center">
                                    <Link
                                        className="link text-primary"
                                        to="/register"
                                    >
                                        Register
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

export default Login;
