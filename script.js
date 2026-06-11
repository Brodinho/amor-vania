
const titulo='❤️ Vanderci & Vânia ❤️';
let ti=0;
(function t(){if(ti<titulo.length){document.getElementById('typing').innerHTML+=titulo[ti++];setTimeout(t,120)}})();

const fotos=['fotos/capa.jpg','fotos/conversivel.png','fotos/coracao.png','fotos/ferrari.jpeg','fotos/traidores.jpg'];
let i=0;
setInterval(()=>{i=(i+1)%fotos.length;document.getElementById('slide').src=fotos[i]},4000);

const inicio=new Date('2026-01-01');
function atualizar(){
 let hoje=new Date();
 let dias=Math.floor((hoje-inicio)/(1000*60*60*24));
 let anos=Math.floor(dias/365);
 let meses=Math.floor((dias%365)/30);
 let resto=(dias%365)%30;
 document.getElementById('contador').innerHTML=`${anos} anos • ${meses} meses • ${resto} dias ❤️`;
}
atualizar();

const texto=`Minha querida Vânia,

Quando olho para nossa caminhada, vejo a mão de Deus guiando cada passo.

Você trouxe luz aos meus dias, esperança aos meus sonhos e felicidade ao meu coração.

Seu sorriso ilumina minha vida.
Seu abraço me fortalece.
Sua companhia transforma momentos simples em lembranças inesquecíveis.

Obrigado por cada conversa, cada passeio, cada conquista e cada demonstração de amor.

Que continuemos construindo uma história repleta de cumplicidade, respeito, fé e felicidade.

Eu te amo hoje, amanhã e para sempre.

Com todo meu amor,

Vanderci ❤️`;
let p=0;
(function escrever(){
 if(p<texto.length){
  document.getElementById('carta').innerHTML+=texto[p++];
  setTimeout(escrever,30);
 }
})();

setInterval(()=>{
 const h=document.createElement('div');
 h.className='heart';
 h.innerHTML='❤️';
 h.style.left=Math.random()*100+'vw';
 document.body.appendChild(h);
 setTimeout(()=>h.remove(),8000);
},350);
