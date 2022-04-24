// adiciona o botão "SIGAA+" no menu do SIGAA

if (document.body.contains(document.querySelector("#menu-dropdown"))){
    const menu = document.querySelector(".ThemeOfficeMenu tr");
    
    const img = document.createElement("img");
    var imgURL = "assets/48logoSigaaPlus.png";
    img.src = imgURL;
    

    const novoMenu = document.createElement("td");
    novoMenu.textContent = "Sigaa+";
    novoMenu.appendChild(img);
    
    const link = document.createElement('a');
    link.setAttribute('href','https://github.com/fga-eps-mds/Tema-02');
    link.setAttribute('target','_blank');
    novoMenu.appendChild(link);
    menu.appendChild(novoMenu);


    //div com os itens de dropdown
    const nav = document.createElement('div');
    nav.style.top = '24px';
    nav.style.left = '600px';
    nav.style.backgroundColor = "#edf1f8"; 
    nav.style.visibility = 'hidden';
    nav.classList.add("ThemeOfficeSubMenu")
    
    document.querySelector('#menu_form_menu_discente_j_id_jsp_340461267_98_menu').appendChild(nav)

    const tr1 = document.createElement('tr')
    tr1.classList.add("ThemeOfficeMenuItem");
    
    const td1 = document.createElement('td')
    td1.textContent = "Visualizar Fluxo Curricular";
    td1.classList.add("ThemeOfficeMenuItemText")

    const tr2 = document.createElement('tr')
    tr2.classList.add("ThemeOfficeMenuItem");
    
    const td2 = document.createElement('td')
    td2.textContent = "Consultar Equivalência de Matérias"
    td2.classList.add("ThemeOfficeMenuItemText")

    const tr3 = document.createElement('tr')
    tr3.classList.add("ThemeOfficeMenuItem");
    
    const td3 = document.createElement('td')
    td3.textContent = "Consultar Créditos";
    td3.classList.add("ThemeOfficeMenuItemText")


    tr1.appendChild(td1);
    tr2.appendChild(td2);
    tr3.appendChild(td3);
    
    nav.appendChild(tr1);
    nav.appendChild(tr2);
    nav.appendChild(tr3);
    
    //adicionando eventos aos elementos do dropdown
    novoMenu.addEventListener("mouseover",aparecer);
    nav.addEventListener("mouseOver",aparecer);    
    novoMenu.addEventListener("mouseup",desaparecer);

    td1.addEventListener("mouseup",exibirFluxo);
    td2.addEventListener("mouseup",exibirEq);
    td3.addEventListener("mouseup",exibirCreditos);

    function aparecer(){
       nav.style.visibility = 'visible';
        
    }

    function desaparecer(){
        nav.style.visibility = 'hidden';
    }

    function exibirEq(){
        const doc = document.querySelector(".equivalencia")
        doc.style.visibility = 'visible'
        doc.style.height = '0';
        document.querySelector("#container").style.height = "800px"
        document.querySelector("#turmas-portal").style.visibility = "hidden"
        document.querySelector("#noticias-portal").style.visibility = "hidden"
    }
    
    function exibirFluxo(){
        const doc = document.querySelector(".fluxo")
        doc.style.visibility = 'visible'
        document.querySelector("#container").style.height = "800px"
        document.querySelector("#turmas-portal").style.visibility = "hidden"
        document.querySelector("#noticias-portal").style.visibility = "hidden"
    }

    function exibirCreditos(){
        const doc = document.querySelector(".graficos")
        doc.style.visibility = 'visible'
        document.querySelector("#container").style.height = "800px"
        document.querySelector("#turmas-portal").style.visibility = "hidden"
        document.querySelector("#noticias-portal").style.visibility = "hidden"
    }


}

//Cria div que contem os componentes referentes a fluxo
const cont = document.createElement('div');
cont.className = "fluxo"
document.querySelector("#portal-docente").appendChild(cont)
cont.style.visibility = 'hidden';
cont.style.position = 'absolute';
cont.style.top = "90px";


//Cria div que contem os componentes referentes a Equivalência
const divEq = document.createElement('div');
divEq.className = "equivalencia"
document.querySelector("#portal-docente").appendChild(divEq)
divEq.style.visibility = 'hidden';
divEq.style.position = 'absolute';
divEq.style.top = "90px";

//Cria div que contem os componentes referentes a graficos
const graficos = document.createElement('div');
graficos.className = "graficos"
document.querySelector("#portal-docente").appendChild(graficos)
graficos.style.visibility = 'hidden';
graficos.style.position = 'absolute';
graficos.style.top = "90px";