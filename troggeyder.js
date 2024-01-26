function trogAyrn (red, ennym, cheuSthie, keint = [], click, sorch, cowrit) {
    const ayrn = document.createElement(red);
    ayrn.id = ennym;
    if (keint.length) keint.forEach(k => ayrn.classList.add(k));
    if (sorch) ayrn.type = sorch;
    if (sorch == "checkbox") ayrn.checked = cowrit;
    switch (red) {
        case "img":
            ayrn.src = cheuSthie;
            break;
        case "button":
            ayrn.onclick = click;
        default:
            cheuSthie.forEach(a => ayrn.append(a));
    }
    return ayrn;
};