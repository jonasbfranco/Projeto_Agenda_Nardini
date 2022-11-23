export default async (req, res) => {

    const result = await fetch("http://localhost:5000/contatos?_expand=unidade")
    //.then((req) => req.json())
    //.then((data) => console.log(data))
    //.then((data) => mostrarContatos(data))
    const json = await result.json();

    //console.log(json)

    function mostrarContatos(contatos) {
        const htmlContatos = contatos.map(
            (contato) => `
              <h2>${contato.nome}</h2>
              <h4>${contato.setor}</h4>  
              <h4>${contato.ramal}</h4> 
              <h4>${contato.email}</h4>
              <h4>${contato.unidade.nome}</h4>
            `
        )
    }
    
    res.status(200).json({ 
        list: json
     })

    //res.status(200).json({ name: 'John Doe' })
    //document.getElementById('app').innerHTML = htmlContatos;
  }
  