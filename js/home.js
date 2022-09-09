// Variables to be Defined
const modalContainer = document.querySelector(".modal-container");
const mainSettingPage = document.getElementsByClassName("modal-body")[0];
const Links = {
  user: {
    margin: "0",
    visibleIconClassName: "right",
    hideIconsClassName: ["left", "cls"],
  },
  pwd: {
    margin: "-200%",
    visibleIconClassName: "left",
    hideIconsClassName: ["right", "cls"],
  },
  left: {
    margin: "0",
    visibleIconClassName: "left",
    hideIconsClassName: ["right", "cls"],
  },
};
const cls = document.querySelector(".cls");


const modalIconClassName = ["cls","left","right"];



//minimizing Navigation Bar when scrolling
if (window.visualViewport.width > 768) {
  document.addEventListener("scroll", () => {
    if (window.pageYOffset == 0) {
      document.getElementsByClassName("main-header")[0].style.height = "";
      document.getElementsByClassName("mini-lnks")[0].style.display = "";
      document.getElementsByClassName("mini-logo")[0].style.display = "";
    } else {
      document.getElementsByClassName("main-header")[0].style.height = "0px";
      document.getElementsByClassName("mini-lnks")[0].style.display = "flex";
      document.getElementsByClassName("mini-logo")[0].style.display = "flex";
    }
  });
}

//Open Setting Page
const openModal = (e)=>{
  e.preventDefault();
  document.body.classList.add("open-modal");
  modalContainer.style.width = "100vw";
}

// Event Handler for header anchors of the setting page (close or go back to main slide of Setting Page)
const modalHeaderAnchorClick = (anc)=>{
  const anchorClassName = anc.classList[0];
  modalIconClassName.forEach((className) =>{
    if(anchorClassName === className){
      anc.style.display = "none";
      cls.style.display = '';
    }
  })
  mainSettingPage.style.marginLeft = "";
}


//Event Handler Function: Go to Property Section on Setting Page
const goToPropertyPage = (anc)=>{
  const index = anc.getAttribute("name");
  document.getElementsByClassName(
    Links[index].visibleIconClassName
  )[0].style.display = "block";
  for (let iconClassName of Links[index].hideIconsClassName) {
    document.getElementsByClassName(iconClassName)[0].style.display = "none";
  }
  mainSettingPage.style.marginLeft = Links[index].margin;
}

//close Setting Page Event Handlers
const closeModal = (evt)=>{
  evt.preventDefault();
  document.body.classList.remove("open-modal");
  modalContainer.style.width = "";
}

modalContainer.addEventListener("click",(evt)=>{
  if(evt.target === modalContainer){
    closeModal(evt);
  }
});