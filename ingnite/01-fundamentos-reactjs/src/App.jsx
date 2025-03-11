import { Header } from "./components/Header";
import { Post } from "./Post";

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Diego Fernandes"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla rerum rem quo, vero porro deserunt, obcaecati modi, esse sunt aperiam eum. A fugiat iusto itaque eum modi eius nihil aliquam?"
      />

      <Post
        author="Gabriel Buzzi"
        content="Um novo post muito legal!"
      />
    </div>
  )
}
