//será importado sem o default pq ajuda na parte do autoimport do vscode e na responsividade (mas os itens da pasta pages não podem ser exportados assim)
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR'; //para ver os formatos https://date-fns.org/v2.21.1/docs/format
import Link from 'next/Link';
import styles from './styles.module.scss';

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="PodCastr" />
        </a>
      </Link>

      <p>O Melhor para você ouvir</p>

      <span>{currentDate} </span>
    </header>
  );
}
