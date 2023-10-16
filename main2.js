const kaued = document.querySelector;

function tocasomclap(){
    kaued('#som_tecla_clap').play();
}
function tocasompom () {
    kaued('#som_tecla_pom').play();
}
function tocasomtim () {
    kaued('#som_tecla_tim').play();
}
function tocasompuff () {
    kaued('#som_tecla_puff').play();
}

function tocasomsplash () {
    kaued('#som_tecla_splash').play();
}
function tocasomtoim () {
    kaued('#som_tecla_toim').play();
}
function tocasompsh () {
    kaued('#som_tecla_psh').play();
}
function tocasomtic () {
    kaued('#som_tecla_tic').play();
}
function tocasomtom () {
    kaued('#som_tecla_tom').play();
}
kaued('.tecla_pom').onclick = tocasompom;
kaued('.tecla_clap').onclick = tocasomclap;
kaued('.tecla_tim').onclick = tocasomtim;
kaued('.tecla_puff').onclick = tocasompuff;
kaued('.tecla_splash').onclick = tocasomsplash;
kaued('.tecla_toim').onclick = tocasomtoim;
kaued('.tecla_psh').onclick = tocasompsh;
kaued('.tecla_tic').onclick = tocasomtic;
kaued('.tecla_tom').onclick = tocasomtom;