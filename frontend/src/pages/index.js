import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home( {list} ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Agenda Nardini -  <a href="#">Testes</a>
        </h1>
        
        <br></br>
        
        <div id=''></div>

        <div>
          <ul>
          {list.map((contato) => 
              <>
                <li>Nome: {contato.nome}</li>
                <li>Setor: {contato.setor}</li>
                <li>Ramal: {contato.ramal}</li>
                <li>E-mail: {contato.email}</li>
                <li>Unidade: {contato.unidade.nome}</li>
                <br></br>
              </>
          )}


          {/* {list.map(
            contato =>`
            <h2>${contato.nome}</h2>
            <h4>${contato.setor}</h4>  
            <h4>${contato.ramal}</h4> 
            <h4>${contato.email}</h4>
            <h4>${contato.unidade.nome}</h4>
          `
          )} */}
          </ul>
        </div>


      </main>

      
    </div>
  )
}


 
export async function getServerSideProps(){
  const res = await fetch('http://localhost:3000/api/agenda');
  const json = await res.json();
  return {
    props: {
      list: json.list
    }
  };
}