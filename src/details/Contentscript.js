// adiciona o botão "SIGAA+" no menu do SIGAA

if (document.body.contains(document.querySelector("#menu-dropdown"))){
    const menu = document.querySelector(".ThemeOfficeMenu tr");
    
    const img = document.createElement("img");
    img.src = ("./assets/16logoSigaaPlus.png");
    menu.appendChild(img);

    const novoMenu = document.createElement("td");
    novoMenu.textContent = "Sigaa+";
    
    const link = document.createElement('a');
    link.setAttribute('href','https://github.com/fga-eps-mds/Tema-02');
    link.setAttribute('target','_blank');
    link.appendChild(novoMenu);
    menu.appendChild(link);
}