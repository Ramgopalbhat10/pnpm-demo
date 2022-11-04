import { GithubUser } from "./components/GithubUser";

function App() {
  return (
    <>
      <h2>React Query</h2>
      <p>Github user: uidotdev</p>
      <GithubUser username="uidotdev" />
    </>
  );
}

export default App;
