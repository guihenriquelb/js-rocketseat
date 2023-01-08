/* Buscando e contando dados em arrays

    Buscando no Array de Livros por Categoria abaixo, faça os seguintes desafios

    * Contar o númmero de categorias e o número de livros em cada categoria
    * Contar o número de autores
    * Mostrar livros do autor Augusto Cury
    * Trnasformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor

*/ 


const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da babilônia",
                author: "George S. Clason", 
            },
            {   
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",

            },
        ],
    }, 
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

// Contar o númmero de categorias e o número de livros em cada categoria
const totalCategories = booksByCategory.length

console.log(totalCategories)

for(let category of booksByCategory){
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

// Contar o número de autores
function countAuthors() {
    let authors = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }

    console.log('Total de autores: ', authors.length)
}

/* 
    * Mostrar livros do autor Augusto Cury
    * Trnasformar a função  em uma função que irá receber o nome do autor e devolver os livros desse autor
*/
function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
           if(book.author === author) {
            books.push(book.title)
           }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor('Augusto Cury')