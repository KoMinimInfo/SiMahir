import Header from "../components/Common/Header";
import Title from "../components/LogInPage/Title";
import Form from "../components/LogInPage/Form";

const LogInPage = () => {
  return (
    <div>
      <Header />
      <div className="mt-20 flex h-[calc(100vh-80px)] flex-col items-center justify-center gap-5">
        <Title />
        <Form />
      </div>
    </div>
  );
};

export default LogInPage;
