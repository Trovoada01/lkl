
//Criar uma arrey para armazenar os dados 
let banco = [];

//getBanco -> faz a leitura dos dados no LocalStoraga convertendo o formato JSON para o
const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? [];
//setBanco -> grava os dados convertendo array para o localstorage
const setBanco = () => localStorage.setItem('todoList', JSON.stringify(banco));

// Criar uma Função anonima / arrow function
const inputItem = (tarefa, status, indice) => {
    const intem = document.createElement('label');
    intem.classList.add('todo_item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <section>${tarefa} </section>
        <input type="button" value="x" data-indice=${indice}
    `;
    document.getElementById('todoList').appendChild(item);

}

const atualizaView = () => {
    limpaTela();
    const banco = getBanco();
    banco.foreach ((item, indice) => inputItem(intem.tarefa, item.status, indice)); 
}

const limpaTela =() =>{
    const lista = document.getElementById('todoList')
    while (lista.firstChild){
        lista.removeChild(lista.lastChild);

    }
};

const insereItem = (event) =>{
    const tecla = event.key;
    const valor = event.target.value;

    if (tecla === 'Enter'){
        const banco = getBanco();
        banco.push({'tarefa':valor, 'status': ''});
        setBanco(banco);
        atualizaView();
        event.target.value = '';
    }

}

const atualizaItem = () => {
    const banco = getBanco();
    banco[indice].status = banco[indice].status ===''? 'cheked' : '';
    setBanco(); 
    atualizaView(); 

}

const removeItem = (indice) =>{
    const banco = getBanco();
    banco.splice(indice, 1);
    setBanco();
    atualizaView();
}

document.getElementById('newItem').addEventListener('keypress', insereItem);
document.getElementById('todoList').addEventListener('click', removeItem)
atualizaView();