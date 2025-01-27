// license: cc-by ZryDys/CJ 2024 
// goal: ensures const ui,uv,uo,ue,ua defined and set to defaults or URL !
// usage: <script src="params-cj.js">cc-by ZryDys/CJ 2024 ensures u* set by url or default</script> 

console.log( 'loading: params-cj.js' );

let ui,uv,uo,ue,ua; //vars
const umsg={
	 'MD.jpg' : 'game Merge with Darkness by (QR in image)', //just MD js search txt in a string?
	'Jelly_Fish' : ' Jelly_Fish @Pr',
	'cubdiv' : ' cubdiv @A',
}; 


ur = { 'i': ui, 'v': uv, 'o': uo, 'e': ue, 'a': ua };  //key 
urdef = { 'i': 'ui', 'v': 'v', 'o': 'Jelly_Fish','e': 'cubdiv', 'a': 'ua' };  //key  & bg=e/py.png
urk		=[ 'i', 'v', 'o', 'e', 'a' ]; //Object.keys(ur)
urv		=[ undefined, undefined, undefined, undefined, undefined ]; //Object.values(ur)

const u_ = new URLSearchParams(document.location.search); //only used once // js document.location.search fro POST?
urk.forEach( i=>  ur[i]=u_.get(i)  ); //null if not param
console.log( ur );
// urk.forEach( i=>    =  ur[i]?   : ''  )  ;  // infos  #txt+i  #img+i  #txtv 
 

urk.forEach( i=>   ur[i] =  ur[i]?  ur[i].replace(/\+/g," ")  :  urdef[i] )  ;  //defaults

document.getElementById("cc").innerHTML = `Browser code rights CC-BY-NC-SA-ND ZryDys.Github.io/ ${ur.v} &url`; //protected against copyrighte infringments

/*   let  q = u_.get("q");  // js URLSearchParams(  get() with default value ?
  let  c = u_.get("c");    c = c? c.replace(/\+/g," ")  : '0xaa55dd'  ;  //cj or + esp
  
  // scan any val with DB:



both plant mvpc usan y keyr solo 2 lins


  
var q,bg; //trans vars outside funct
//=============================================================
function cj2_params() { //cj CC-BY @2024  ZryDys & CrlHyn

    const params = new URLSearchParams(document.location.search);
    q = params.get("q"); //if (q) { q= q.replace(/ /g,"+") } else {q='esch4cc.jpg'} ; // o
    q = q? q.replace(/ /g,"+")  : 'esch4cc.jpg'  ;
    bg = params.get("bg");if (bg) { } else {bg='sail.jpeg'} ; 
    document.getElementById("bq").innerHTML = q; // <p id=bbg></p>
    document.getElementById("bbg").innerHTML = bg;  
    document.getElementById("iq").src=q; // update image src not content !
    document.getElementById("ibg").src=bg; // update image src not content !  
  const host = "https://zrydys.github.io"; 
    const urlpa = `/mvpc.html?q=${q}&v1`;  //uses ${q} variable

    const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=002&bgcolor=eff&data="+ encodeURIComponent(host+urlpa);

    document.getElementById("cc").innerHTML = `Tool rights 2024 CC-BY-NC-SA ZryDys.Github.io/ ${urlpa} &url`;

} //func cj params


*/
