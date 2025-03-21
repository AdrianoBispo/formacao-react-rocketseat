import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className="{styles.wrapper">
        <Sidebar />

        <main>
          <Post 
            author="Diego Fernandes"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla rerum rem quo, vero porro deserunt, obcaecati modi, esse sunt aperiam eum. A fugiat iusto itaque eum modi eius nihil aliquam?"
          />

          <Post
            author="Gabriel Buzzi"
            content="Um novo post muito legal!"
          />
        </main>
      </div>
    </div>
  )
}
