import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "@phosphor-icons/react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time
                title="15 de junho às 08:13h"
                dateTime="2023-06-15 08:13:30"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp /> <span>Aplaudir</span>
          </button>
        </footer>
      </div>
    </div>
  );
}