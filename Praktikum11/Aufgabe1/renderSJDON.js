function renderSJDON(element, appRoot){
    appRoot.appendChild(generate(element))
}


function generate(list){
    let root = undefined

    //Müssen durch alle Elemente durchgehen und prüfen was es werden muss
    for(let i = 0; i < list.length; i++){
        if (i == 0){
            root = document.createElement(list[i])
            continue;
        }

        //Stringhandler
        if (typeof(list[i]) === "string"){
            let text = document.createTextNode(list[i])
            root.appendChild(text)
            continue
        }

        //Objecthandler
        if (typeof(list[i]) === "object"){
            for (element in list[i]){
                root.setAttribute(element, list[i])
            }
            continue
        }

        //Arrayhandler
        if (Array.isArray(list[i])){
            let node = generate(list[i])
            root.appendChild(node)
            continue
        }
    }
    return root
}

const element = ["div", {style: "background: salmon"},
 ["h1", "Hello World"],
 ["h2", {style: "text-align:right"}, "from our library"] ]


let appRoot = document.getElementById("app")

renderSJDON(element, appRoot)