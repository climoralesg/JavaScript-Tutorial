/*Si recordamos, dijimos que JSDoc nos resultaría muy útil en el futuro para
entender y documentar especialmente nuestrasfunciones. Veamos de nuevo aquel ejemplo,
esta vez con una mirada más crítica.*/
/**
* Retorna los detalles del libro.
* @param {string} title - Título del libro.
* @param {string} author - Autor del libro.
* @returns {object} title, author, picture (referencia local), code
*/
function Book(title, author) {
    return {
        title: title,
        author: author,
        picture: "../images/" + author + "/" + title + ".jpg",
        code: 010203 + author + "/" + title
    }
}
