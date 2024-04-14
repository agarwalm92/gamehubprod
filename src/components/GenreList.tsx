import useGetGenres from "../hooks/useGetGenres";

const GenreList = () => {
  const { data } = useGetGenres();
  return (
    <ul>
      {data.map((g) => (
        <li key={g.id}>{g.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
