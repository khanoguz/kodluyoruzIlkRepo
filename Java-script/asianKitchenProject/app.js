
const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://thewoksoflife.com/wp-content/uploads/2014/11/dan-dan-noodles-12.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

document.body.onload = showMenu();

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById("All").click();
 });

const sectionCenter = document.querySelector(".section-center");
sectionCenter.classList.add = "section-center row";

function showMenu(){
    const koreanMenu = menu.filter(function (menus){
        return menus.category === "Korea";
    });

    const japanMenu = menu.filter(function (menus){
        return menus.category === "Japan";
    });

    const chinaMenu = menu.filter(function (menus){
        return menus.category === "China";
    });
    
   
    buttons();
    document.querySelector("#All").addEventListener("click", showAllMenu);
    document.querySelector("#Japan").addEventListener("click", showJapanMenu);
    document.querySelector("#Korea").addEventListener("click", showKoreanMenu);
    document.querySelector("#China").addEventListener("click", showChinaMenu);

    function buttons(){
        const buttonContainer = document.querySelector(".btn-container");
        allButton = document.createElement("button");
        allButton.innerHTML="All";
        allButton.setAttribute("id","All");
        allButton.classList.add("btn");
        allButton.classList.add("btn-outline-dark");
        allButton.classList.add("btn-item");
        buttonContainer.appendChild(allButton);

        const koreaButton = document.createElement("button");
        koreaButton.innerHTML="Korea";
        koreaButton.setAttribute("id","Korea");
        koreaButton.classList.add("btn");
        koreaButton.classList.add("btn-outline-dark");
        koreaButton.classList.add("btn-item");
        buttonContainer.appendChild(koreaButton);

        const japanButton = document.createElement("button");
        japanButton.innerHTML="Japan";
        japanButton.setAttribute("id","Japan");
        japanButton.classList.add("btn");
        japanButton.classList.add("btn-outline-dark");
        japanButton.classList.add("btn-item");
        buttonContainer.appendChild(japanButton);

        const chinaButton = document.createElement("button");
        chinaButton.innerHTML="China";
        chinaButton.setAttribute("id","China");
        chinaButton.classList.add("btn");
        chinaButton.classList.add("btn-outline-dark");
        chinaButton.classList.add("btn-item");
        buttonContainer.appendChild(chinaButton);
    }


    function showJapanMenu(){
        removeAllChildNodes(sectionCenter);
        for(let i=0;i<japanMenu.length;i++){
            const menuItems = document.createElement("div");
            menuItems.classList.add("menu-items");
            menuItems.classList.add("col-lg-6");
            menuItems.classList.add("col-sm-12");
    
    
            const theImg = document.createElement("img");
            theImg.src = japanMenu[i].img;
            theImg.classList.add ("photo");
            
            const menuInfo = document.createElement("div");
            menuInfo.classList.add("menu-info");
    
            const menuTitle = document.createElement("div");
            menuTitle.classList.add("menu-title");    
    
            const newHeader = document.createElement("h4");
            newHeader.innerHTML = japanMenu[i].title;
            
            const thePrice = document.createElement("h4");
            thePrice.innerHTML = japanMenu[i].price;
            thePrice.classList.add("price");
    
            menuTitle.appendChild(newHeader);
            menuTitle.appendChild(thePrice);
    
    
            const menuText = document.createElement("div");
            const description = document.createTextNode(japanMenu[i].desc);
            menuText.appendChild(description);
    
            menuInfo.appendChild(menuTitle);
            menuInfo.appendChild(menuText);
    
            menuItems.appendChild(theImg);
            menuItems.appendChild(menuInfo);
            
            sectionCenter.appendChild(menuItems);
        }
    }

    function showKoreanMenu(){
        removeAllChildNodes(sectionCenter);
        for(let i=0;i<koreanMenu.length;i++){
            const menuItems = document.createElement("div");
            menuItems.classList.add("menu-items");
            menuItems.classList.add("col-lg-6");
            menuItems.classList.add("col-sm-12");
    
    
            const theImg = document.createElement("img");
            theImg.src = koreanMenu[i].img;
            theImg.classList.add ("photo");
            
            const menuInfo = document.createElement("div");
            menuInfo.classList.add("menu-info");
    
            const menuTitle = document.createElement("div");
            menuTitle.classList.add("menu-title");    
    
            const newHeader = document.createElement("h4");
            newHeader.innerHTML = koreanMenu[i].title;
            
            const thePrice = document.createElement("h4");
            thePrice.innerHTML = koreanMenu[i].price;
            thePrice.classList.add("price");
    
            menuTitle.appendChild(newHeader);
            menuTitle.appendChild(thePrice);
    
    
            const menuText = document.createElement("div");
            const description = document.createTextNode(koreanMenu[i].desc);
            menuText.appendChild(description);
    
            menuInfo.appendChild(menuTitle);
            menuInfo.appendChild(menuText);
    
            menuItems.appendChild(theImg);
            menuItems.appendChild(menuInfo);
            
            sectionCenter.appendChild(menuItems);
        }
    }

    function showChinaMenu(){
        removeAllChildNodes(sectionCenter);
        for(let i=0;i<chinaMenu.length;i++){
            const menuItems = document.createElement("div");
            menuItems.classList.add("menu-items");
            menuItems.classList.add("col-lg-6");
            menuItems.classList.add("col-sm-12");
    
    
            const theImg = document.createElement("img");
            theImg.src = chinaMenu[i].img;
            theImg.classList.add ("photo");
            
            const menuInfo = document.createElement("div");
            menuInfo.classList.add("menu-info");
    
            const menuTitle = document.createElement("div");
            menuTitle.classList.add("menu-title");    
    
            const newHeader = document.createElement("h4");
            newHeader.innerHTML = chinaMenu[i].title;
            
            const thePrice = document.createElement("h4");
            thePrice.innerHTML = chinaMenu[i].price;
            thePrice.classList.add("price");
    
            menuTitle.appendChild(newHeader);
            menuTitle.appendChild(thePrice);
    
    
            const menuText = document.createElement("div");
            const description = document.createTextNode(chinaMenu[i].desc);
            menuText.appendChild(description);
    
            menuInfo.appendChild(menuTitle);
            menuInfo.appendChild(menuText);
    
            menuItems.appendChild(theImg);
            menuItems.appendChild(menuInfo);
            
            sectionCenter.appendChild(menuItems);
        }
    }
    
    function showAllMenu(){
        const sectionCenter = document.querySelector(".section-center");
        sectionCenter.classList.add = "section-center row";
         
        for(let i=0;i<menu.length;i++){
            const menuItems = document.createElement("div");
            menuItems.classList.add("menu-items");
            menuItems.classList.add("col-lg-6");
            menuItems.classList.add("col-sm-12");
    
    
            const theImg = document.createElement("img");
            theImg.src = menu[i].img;
            theImg.classList.add ("photo");
            
            const menuInfo = document.createElement("div");
            menuInfo.classList.add("menu-info");
    
            const menuTitle = document.createElement("div");
            menuTitle.classList.add("menu-title");    
    
            const newHeader = document.createElement("h4");
            newHeader.innerHTML = menu[i].title;
            
            const thePrice = document.createElement("h4");
            thePrice.innerHTML = menu[i].price;
            thePrice.classList.add("price");
    
            menuTitle.appendChild(newHeader);
            menuTitle.appendChild(thePrice);
    
    
            const menuText = document.createElement("div");
            const description = document.createTextNode(menu[i].desc);
            menuText.appendChild(description);
    
            menuInfo.appendChild(menuTitle);
            menuInfo.appendChild(menuText);
    
            menuItems.appendChild(theImg);
            menuItems.appendChild(menuInfo);
            
    
            sectionCenter.appendChild(menuItems);
        }
    }
    
    function removeAllChildNodes(parent){
        while(parent.firstChild){
            parent.removeChild(parent.firstChild);
        }
    }

}