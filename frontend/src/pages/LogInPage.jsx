import Header from "../components/Common/Header";
import Title from "../components/LogInPage/Title";
import Form from "../components/LogInPage/Form";
import Copyright from "../components/Common/FooterSection/Copyright";
import VectorBackground from "../components/LogInPage/VectorBackground";

const LogInPage = () => {
  return (
    <div className="relative flex h-screen flex-col items-center justify-center gap-5 overflow-hidden">
      <Header isSignUp={true} />
      <div className="mx-4 space-y-5 rounded-lg bg-white px-4 py-6">
        <Title />
        <Form />
      </div>
      <div className="absolute bottom-0 -z-10">
        <Copyright />
      </div>
      <VectorBackground />
    </div>
  );
};

export default LogInPage;
