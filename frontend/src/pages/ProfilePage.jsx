import Header from "../components/Common/Header";
import ProfileSection from "../components/ProfilePage/ProfileSection";
import Copyright from "../components/Common/FooterSection/Copyright";

const ProfilePage = () => {
  return (
    <div>
      <Header isLoggedIn={true} />
      <ProfileSection />
      <Copyright inLogInPage={false} />
    </div>
  );
};

export default ProfilePage;
