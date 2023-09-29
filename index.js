let prev = document.getElementById('preview');
let edit = document.getElementById('editor');

function change() {
    let result = prev.innerHTML = marked.parse(edit.value);
    return result
}
