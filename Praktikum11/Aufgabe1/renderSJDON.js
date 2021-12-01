function renderSJDON(element, appRoot) {
    appRoot.appendChild(generate(element))
}


function generate(list) {
    let root = undefined

    //Müssen durch alle Elemente durchgehen und prüfen was es werden muss
    for (let i = 0; i < list.length; i++) {
        if (i == 0) {
            root = document.createElement(list[i])
            continue;
        }
        //Arrayhandler
        if (Array.isArray(list[i])) {
            let node = generate(list[i])
            root.appendChild(node)
            continue
        }

        //Stringhandler
        if (typeof (list[i]) === "string") {
            let text = document.createTextNode(list[i])
            root.appendChild(text)
            continue
        }

        //Objecthandler
        if (typeof (list[i]) === "object" && !Array.isArray(list[i])) {
            for (item in list[i]) {
                root.setAttribute(item, list[i][item])
            }
            continue
        }
    }
    return root
}

