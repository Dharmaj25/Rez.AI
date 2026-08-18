import placeholderImage from "../../../../../assets/avatars/face7.jpg";

const Profile = ({ data }) => {
    const { profile_picture } = data.personal;

    return (
        <section className="flex justify-center">
            <img className="rounded-full" src={profile_picture || placeholderImage} alt="profile_picture" height="20%" width="auto" />
        </section>
    )
}

export default Profile;