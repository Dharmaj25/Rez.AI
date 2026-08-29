import placeholderImage from "../../../../../assets/avatars/face7.jpg";

const Profile = ({ data }) => {
    const { profile_picture } = data.personal;

    return (
        <section className="flex justify-center p-4">
            <img
                className="w-32 h-32 md:w-60 md:h-60 rounded-full object-cover aspect-square"
                src={profile_picture || placeholderImage}
                alt="profile_picture"
            />
        </section>
    );
};
export default Profile;