import profile from '../../assets/images/profile.png'
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 mx-4 border-b-2 border-gray md:gap-96">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;