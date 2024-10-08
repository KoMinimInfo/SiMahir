import Header from "../components/Common/Header";
import ProfileSection from "../components/ProfilePage/ProfileSection";
import Support from "../components/Common/FooterSection/Support";
import Copyright from "../components/Common/FooterSection/Copyright";

const ProfilePage = () => {
  return (
    <div>
      <Header isLoggedIn={true} />
      <ProfileSection />
      <Support />
      <Copyright inLogInPage={false} />
    </div>
  );
};

export default ProfilePage;
