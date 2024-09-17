import Header from "../components/Common/Header";
import Title from "../components/SignUpPage/Title";
import Form from "../components/SignUpPage/Form";
import Copyright from "../components/Common/FooterSection/Copyright";
import VectorBackground from "../components/SignUpPage/VectorBackground";

const SignUpPage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <Header inLogInPage={true} />
      <div className="mx-4 mb-4 mt-24 space-y-5 rounded-lg bg-white px-4 py-6">
        <Title />
        <Form />
      </div>
      <Copyright />
      <VectorBackground />
    </div>
  );
};

export default SignUpPage;
