function tambah(){
  val = document.getElementsByName('nilai')[0].value;
  document.getElementsByName('nilai')[0].value += "+";
}
function kurang(){
  val = document.getElementsByName('nilai')[0].value;
  document.getElementsByName('nilai')[0].value += "-";
}
function kali(){
  val = document.getElementsByName('nilai')[0].value;
  document.getElementsByName('nilai')[0].value += "*";
}
function bagi(){
  val = document.getElementsByName('nilai')[0].value;
  document.getElementsByName('nilai')[0].value += "/";
}
function clear(){
  val = document.getElementsByName('nilai')[0].value;
  document.getElementsByName('hasil')[0].value += hasil=false;
}
function hitung(){
  val = document.getElementsByName('nilai')[0].value;
  document.getElementsByName('hasil')[0].value = eval(val);
}
