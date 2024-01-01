interface UserProp {
  location: string;
  name: string;
}

export const User = (props: UserProp) => {
  const { name, location } = props;
  return (
    <div>
      <h2>{name}</h2>
      <h1>{location}</h1>
    </div>
  );
};
