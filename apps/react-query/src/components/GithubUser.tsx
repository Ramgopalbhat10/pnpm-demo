import { useQuery } from "react-query";

function fetchUser(username: string) {
  return fetch(`https://api.github.com/users/${username}`).then((res) =>
    res.json()
  );
}

export function GithubUser({ username }: { username: string }) {
  const { isError, isLoading, data, error } = useQuery([username], () =>
    fetchUser(username)
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
