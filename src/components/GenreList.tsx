import useGetGenres from "../hooks/useGetGenres";

const GenreList = () => {
  const { genres } = useGetGenres();
  return (
    <ul>
      {genres.map((g) => (
        <li>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
