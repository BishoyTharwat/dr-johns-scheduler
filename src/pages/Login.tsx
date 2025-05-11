
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/" className="text-clinic-blue font-bold text-2xl">Dr. John's Clinic</Link>
            <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in to your account</h1>
            <p className="mt-2 text-sm text-gray-600">
              Access your appointments, medical records, and more
            </p>
          </div>
          <LoginForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
