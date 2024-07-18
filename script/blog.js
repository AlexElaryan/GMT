// toHome

function redirectToUrl(url) {
  window.location.href = url; // Redirect to the specified URL
}

/* about info add start */

let add = document.querySelectorAll('.add');
let aboutInfo = document.querySelectorAll('.option_main');
let addCloseImg = document.querySelectorAll('.add_closeImg');
let isTrue = false;

add.forEach((add, i) => {
  add.onclick = () => {

    if (!isTrue) {
      aboutInfo.forEach(el => {

        aboutInfo[i].style.display = 'flex';
        add.className = 'close';
        addCloseImg.forEach(img => {
          addCloseImg[i].src = 'img/cross.svg';
        })
        isTrue = true;
      })

    }
    else if (isTrue) {
      aboutInfo.forEach(el => {
        aboutInfo[i].style.display = 'none';
        add.className = 'add';
        addCloseImg.forEach(img => {
          addCloseImg[i].src = 'img/plus.svg';
        })
        isTrue = false;
      })
    }

  }
})



/* about info add end */


// Pop Up`s start //


// popup price

let popUpPrice = document.getElementById('popUp_price');
let openPopUpPrice = document.querySelector('.openPopUpPrice');
let popUpClosePrice = document.getElementById('popUpClose_price');

openPopUpPrice.onclick = () => {
  popUpPrice.style.display = 'flex';
}

popUpClosePrice.onclick = () => {
  popUpPrice.style.display = 'none';
}

popUpPrice.onclick = e => {
  if (e.target === e.currentTarget) {
    popUpPrice.style.display = 'none';
  }
}

// popup help

let popUpHelp = document.getElementById('popUp_help');
let openPopUpHelp = document.querySelector('.openPopUpHelp');
let popUpCloseHelp = document.getElementById('popUpClose_help');

openPopUpHelp.onclick = () => {
  popUpHelp.style.display = 'flex';
}

popUpCloseHelp.onclick = () => {
  popUpHelp.style.display = 'none';
}

popUpHelp.onclick = e => {
  if (e.target === e.currentTarget) {
    popUpHelp.style.display = 'none';
  }
}

// popup consultation

let popUpConsultation = document.getElementById('popUp_consultation');
let openPopUpConsultation = document.querySelector('.openPopUpConsultation');
let popUpCloseConsultation = document.getElementById('popUpClose_consultation');

popUpConsultation.onclick = e => {
  if (e.target === e.currentTarget) {
    popUpConsultation.style.display = 'none';
  }
}

openPopUpConsultation.onclick = () => {
  popUpConsultation.style.display = 'flex';
}

popUpCloseConsultation.onclick = () => {
  popUpConsultation.style.display = 'none';
}

// popup call

let popUpCall = document.getElementById('popUp_call');
let openPopUpCall = document.querySelector('.openPopUpCall');
let popUpCloseCall = document.getElementById('popUpClose_call');

popUpCall.onclick = e => {
  if (e.target === e.currentTarget) {
    popUpCall.style.display = 'none';
  }
}

openPopUpCall.onclick = () => {
  popUpCall.style.display = 'flex';
}

popUpCloseCall.onclick = () => {
  popUpCall.style.display = 'none';
}

// price 2

let popUpPrice2 = document.getElementById('popUp_price2');
let openPopUpPrice2 = document.querySelector('.openPopUpPrice2');
let popUpClosePrice2 = document.getElementById('popUpClose_price2');

openPopUpPrice2.onclick = () => {
  popUpPrice2.style.display = 'flex';
}

popUpClosePrice2.onclick = () => {
  popUpPrice2.style.display = 'none';
}

popUpPrice2.onclick = e => {
  if (e.target === e.currentTarget) {
    popUpPrice2.style.display = 'none';
  }
}

// evulation

let popUpEvulation = document.getElementById('popUp_evulation');
let openPopUpEvulation = document.querySelector('.openPopUpEvulation');
let popUpCloseEvulation = document.getElementById('popUpClose_evulation');

openPopUpEvulation.onclick = () => {
  popUpEvulation.style.display = 'flex';
}

popUpCloseEvulation.onclick = () => {
  popUpEvulation.style.display = 'none';
}

popUpEvulation.onclick = e => {
  if (e.target === e.currentTarget) {
    popUpEvulation.style.display = 'none';
  }
}


// replace

let popUpReplace = document.getElementById('popUp_replace');
let openPopUpReplace = document.querySelector('.openPopUpReplace');
let popUpCloseReplace = document.getElementById('popUpClose_replace');

openPopUpReplace.onclick = () => {
  popUpReplace.style.display = 'flex';
}

popUpCloseReplace.onclick = () => {
  popUpReplace.style.display = 'none';
}

popUpReplace.onclick = e => {
  if (e.target === e.currentTarget) {
    popUpReplace.style.display = 'none';
  }
}

//  warranty

let popUpWarranty = document.getElementById('popUp_warranty');
let openPopUpWarranty = document.querySelector('.openPopUpWarranty');
let popUpCloseWarranty = document.getElementById('popUpClose_warranty');

openPopUpWarranty.onclick = () => {
  popUpWarranty.style.display = 'flex';
}

popUpCloseWarranty.onclick = () => {
  popUpWarranty.style.display = 'none';
}

popUpWarranty.onclick = e => {
  if (e.target === e.currentTarget) {
    popUpWarranty.style.display = 'none';
  }
}

// Pop Up`s end //




// 

let plusOpt = document.querySelectorAll('.footer_item1 > h2 > img');
let option = document.querySelectorAll('.foot_item_blck');
let isPlus = [false,false,false];

plusOpt.forEach((el,i) => {
  el.onclick = () => {
    if (!isPlus[i]) {
      option[i].style.display = 'flex';
      isPlus[i] = true;
      plusOpt[i].src = 'img/minus.svg';
    }
    else if (isPlus[i]) {
      option[i].style.display = 'none';
      isPlus[i] = false;
      plusOpt[i].src = 'img/plus.svg';
    }
  }
})


// burgerMenu

let burgerBtn = document.querySelector('.burger');
let burgerMenu = document.querySelector('.burgerMenu');
let isBurger = false;

burgerBtn.onclick = () => {
  if (!isBurger) {
    burgerMenu.style.display = 'flex';
    setTimeout(() => {
      burgerMenu.style.transform = 'rotateY(0deg)';
    }, 0.1);
    isBurger = true;
    burgerBtn.src = 'img/cross.svg';
  }
  else if (isBurger) {
    burgerMenu.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
      burgerMenu.style.display = 'none';
    }, 500);
    isBurger = false;
    burgerBtn.src = 'img/burger.svg';
  }
  document.body.style.overflow = isBurger ? 'hidden' : 'auto';
}

// toOtherMenu

let toOther = document.querySelectorAll('.toOtherMenu');
let catalogMobile = document.querySelectorAll('.catalog_Mobile');
let left1page = document.querySelectorAll('.left1page');
let closeBrg = document.querySelectorAll('.closeBrg');

toOther.forEach((el,i) => {
  el.onclick = () => {
    catalogMobile[i].style.display = 'flex';
    setTimeout(() => {
      catalogMobile[i].style.transform = 'rotateY(0deg)';
    }, 0.1);
  }
});

left1page.forEach(el => {
  el.onclick = () => {
    el.parentElement.parentElement.style.transform = 'rotateY(180deg)';
    setTimeout(() => {
      el.parentElement.parentElement.style.display = 'none';
    }, 500);
  }
});

closeBrg.forEach(el => {
  el.onclick = () => {
    el.parentElement.parentElement.style.display = 'none';
    burgerMenu.style.display = 'none';
    burgerMenu.style.transform = 'rotateY(180deg)';
    el.parentElement.parentElement.style.transform = 'rotateY(180deg)';

    isBurger = false;
    burgerBtn.src = 'img/burger.svg';
    document.body.style.overflow = 'auto';
  }
})

// category select


let categorySelect = document.querySelector('.category_select');
let categorySelectBlock = document.querySelector('.categorySelect_block');
let downImg = document.querySelector('.category_select > img');
let isOpenSelect = false;
let current;
let openedWithSelect;

categorySelect.onclick = () => {
  if (!isOpenSelect) {
    current = categorySelectBlock;
    categorySelectBlock.style.display = 'flex';
    downImg.src = 'img/down3.svg';
    isOpenSelect = true;
    currentOpened = true;
  } else if (isOpenSelect) {
    categorySelectBlock.style.display = 'none';
    downImg.src = 'img/down.svg';
    isOpenSelect = false;
    current = null;
  }
  openedWithSelect = false;
}




// categorySearch

let categorySearch = document.querySelectorAll('.categorySearch');
let searchOninputMenu = document.querySelectorAll('.searchOninputMenu');

categorySearch.forEach((el,i) => {
  el.oninput = () => {
    if (categorySearch[i].value == '') {
      searchOninputMenu[i].style.display = 'none';
    } else {
      searchOninputMenu[i].style.display = 'flex';
    }
  }
  el.onblur = () => {
    searchOninputMenu[i].style.display = 'none';
  }
})

// catalog_select

let catalogSelect = document.querySelector('.catalog_select');
let catalogRectangle2 = document.querySelector('.catalog_rectangle_2');
let isCatalogSelectOpen = false;
let currentCatalog;
let openedWithSelectCatalog;


catalogSelect.onclick = () => {
  if (!isCatalogSelectOpen) {
    currentCatalog = catalogRectangle2;
    catalogRectangle2.style.display = 'flex';
    isCatalogSelectOpen = true;
  } 
  else if (isCatalogSelectOpen) {
    catalogRectangle2.style.display = 'none';
    isCatalogSelectOpen = false;
    currentCatalog = null;
  }
  openedWithSelectCatalog = false;
}

let catalogFilterClose = document.querySelector('.catalogFilter_close');
catalogFilterClose.onclick = () => {
  catalogRectangle2.style.display = 'none';
  isCatalogSelectOpen = false;
}

document.body.onclick = (e) => {
  if(current && openedWithSelect){
    if(e.target !== current && !current.contains(e.target)){
      current.style.display = 'none';
      downImg.src = 'img/down.svg';
      isOpenSelect = false;
      current = null;
    }
  }
  else{
    openedWithSelect = true;
  }
  if(currentCatalog && openedWithSelectCatalog){
    if(e.target !== currentCatalog && !currentCatalog.contains(e.target)){
      currentCatalog.style.display = 'none';
      isOpenSelect = false;
      currentCatalog = null;
    }
  }
  else{
    openedWithSelectCatalog = true;
  }
}

