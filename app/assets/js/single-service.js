// function toggleModal() {
//     document.getElementById('modal').classList.toggle('hidden')
// }
function openModal() {
    document.getElementById('modal').classList.remove('hidden')
}
function closeModal() {
    document.getElementById('modal').classList.add('hidden')
}
function openModal1() {
    closeModal();
    document.getElementById('modal1').classList.remove('hidden')
}
function closeModal1() {
    document.getElementById('modal1').classList.add('hidden')
}