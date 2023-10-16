function tocasomclap(){
    document.querySelector('#som_tecla_clap').play();
}
function tocasompom () {
    document.querySelector('#som_tecla_pom').play();
}
function tocasomtim () {
    document.querySelector('#som_tecla_tim').play();
}
document.querySelector('.tecla_pom').onclick = tocasompom;
document.querySelector('.tecla_clap').onclick = tocasomclap;
document.querySelector('.tecla_tim').onclick = tocasomtim;
