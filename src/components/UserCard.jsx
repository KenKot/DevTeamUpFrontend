const UserCard = ({ user }) => {
  const { about, firstName, lastName, photoUrl, skills, _id } = user;
  console.log(user);

  console.log("PROPS: ", about, firstName, lastName, photoUrl, skills, _id);
  return (
    <div className="card bg-base-300 w-96 shadow-xl">
      <figure>
        <img src={photoUrl} alt="User Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>
        <p></p>
        <p>{about}</p>
        <div className="card-actions justify-center m-4">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
