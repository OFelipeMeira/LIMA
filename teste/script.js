var btn = document.getElementsByClassName("addcart")

var saida = document.getElementById("saida")

var nameList = []

window.onload = function(){
    for(let i = 0;  i < btn.length; i++){
        btn[i].onclick = function (e) {
            var aa = e.target.parentNode.getElementsByTagName("h1")[0]
            var bb = e.target.parentNode.getElementsByTagName("p")[0]
            
            const div = document.createElement("div");
            
            
            const h1 = document.createElement('h1');
            h1.innerHTML = `<h1>${aa.innerHTML}</h1>`;
            
            const p = document.createElement("p");
            p.innerHTML = `<p>${bb.innerHTML}</p>`;

            const btn = document.createElement("button")
            btn.innerHTML = `Remove line`

            btn.onclick(remove(event))

            div.appendChild(h1)
            div.appendChild(p)
            div.appendChild(btn)

            saida.appendChild(div)


/*

            //saida.innerHTML += <button onclick="">Remove line</button>
            saida.innerHTML += `<p>${aa.innerHTML}</p>`

            saida.innerHTML += `<button onclick="remove()">remove</button>`
*/          

            console.log(aa)
        }
    }
}

function remove(e){
    let del = e.target.parentNode;
    del.
}
