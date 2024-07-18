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

// swiper 2

var swiper2 = new Swiper(".mySwiper2", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".slide2_button_next",
    prevEl: ".slide2_button_prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 3
    }
  }
});

// swiper 3

var swiper3 = new Swiper(".mySwiper3", {
  slidesPerView: 1.5,
  spaceBetween: 10,
  navigation: {
    nextEl: ".slide3_button_next",
    prevEl: ".slide3_button_prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 3.2
    }
  }
});


// swiper 5

var swiper5 = new Swiper(".mySwiper5", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".slide5_button_next",
    prevEl: ".slide5_button_prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 3.2
    }
  }
});



// swiper 6

var swiper6 = new Swiper(".mySwiper6", {
  slidesPerView: 1.5,
  spaceBetween: 20,
  navigation: {
    nextEl: ".slide6_button_next",
    prevEl: ".slide6_button_prev",
  },
  breakpoints: {
    500: {
      slidesPerView: 3.2
    }
  }
});




// regex

let username = document.querySelector('.username');
let tel = document.querySelector('.tel');
let mail = document.querySelector('.email');
let sendBtn = document.querySelector('.send');

const nameformat = /^\D+$/g;
const telformat = /^.7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
const mailformat = /^\w+@\w+.\w+$/g;

tel.oninput = () => {
  if (tel.value.length == 1) {
    tel.value = '+';
  }
  if (tel.value.length == 2) {
    tel.value += ' (';
  }
  if (tel.value.length == 7) {
    tel.value += ') ';
  }
  if (tel.value.length == 12) {
    tel.value += '-';
  }
  if (tel.value.length == 15) {
    tel.value += '-';
  }
}

sendBtn.onclick = () => {
  if (!username.value.match(nameformat)) {
    username.classList.add('noMatch');
    username.value = '';
  }
  if (!tel.value.match(telformat)) {
    tel.classList.add('noMatch');
    tel.value = '';
  }
  if (!mail.value.match(mailformat)) {
    mail.classList.add('noMatch');
    mail.value = '';
  }

  else {
    username.className = 'name';
    tel.className = 'tel';
    mail.className = 'mail';
  }

}

// footer

let plusOpt = document.querySelectorAll('.footer_item1 > h2 > img');
let option = document.querySelectorAll('.foot_item_blck');
let isPlus = [false, false, false];

plusOpt.forEach((el, i) => {
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

toOther.forEach((el, i) => {
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
  } else if (isOpenSelect) {
    categorySelectBlock.style.display = 'none';
    downImg.src = 'img/down.svg';
    isOpenSelect = false;
    current = null;
  }
  openedWithSelect = false;
}

document.body.onclick = (e) => {
  if (current && openedWithSelect) {
    if (e.target !== current && !current.contains(e.target)) {
      current.style.display = 'none';
      downImg.src = 'img/down.svg';
      isOpenSelect = false;
      current = null;
    }
  }
  else {
    openedWithSelect = true;
  }
}




// categorySearch

let categorySearch = document.querySelectorAll('.categorySearch');
let searchOninputMenu = document.querySelectorAll('.searchOninputMenu');

categorySearch.forEach((el, i) => {
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







// BrandPage filters

let brandPage_filter = document.querySelector('.brandPage_filter-finally');
let brandPage_filterBtn = document.querySelector('.brandPage_filter-initial');
let brandPage_filterBtnImg = document.querySelector('.brandPage_filter-initial img');
let BPF_closeMobile = document.querySelector('.brandPage_filter-finally_title img');




let isbrandPageFilteropen = false;
let currentBrand;
let openedWithSelectBrand;

BPF_closeMobile.onclick = () => {
  brandPage_filter.style.display = 'none';
}


brandPage_filterBtn.onclick = () => {
  if (!isbrandPageFilteropen) {
    currentBrand = brandPage_filter;
    brandPage_filter.style.display = 'flex';
    brandPage_filterBtnImg.style.transform = 'rotate(0deg)';
    isbrandPageFilteropen = true;
  }
  else if (isbrandPageFilteropen) {
    brandPage_filter.style.display = 'none';
    brandPage_filterBtnImg.style.transform = 'rotate(180deg)';
    isbrandPageFilteropen = false;
    currentBrand = null;
  }
  openedWithSelectBrand = false;

}





// 

let BPF_filterOptBtn = document.querySelectorAll('.BPF_Intitial');
let BPF_filterOptBtnImg = document.querySelectorAll('.BPF_Intitial img');
let BPF_filterOption = document.querySelectorAll('.BPF_finally');
let isBPFoptOpen = [false, false, false, false, false];

BPF_filterOptBtn.forEach((el, i) => {
  el.onclick = () => {
    if (!isBPFoptOpen[i]) {
      BPF_filterOption[i].style.display = 'flex';
      BPF_filterOptBtnImg[i].style.transform = 'rotate(0deg)';
      isBPFoptOpen[i] = true;
    }
    else if (isBPFoptOpen[i]) {
      BPF_filterOption[i].style.display = 'none';
      BPF_filterOptBtnImg[i].style.transform = 'rotate(180deg)';
      isBPFoptOpen[i] = false;
    }
  }
})



// BPT_burger

let BPT_burger = document.querySelector('.BPT_burger');
let BPT_table = document.querySelector('.BPT_table');
let brandPageMain = document.querySelector('.brandPage_right-block');
BPT_burger.onclick = () => {
  brandPageMain.classList.add('brandPage_right-blockBurger');
  brandPageMain.classList.remove('brandPage_right-blockTable');
  BPT_burger.src = 'img/BPburgerG.svg';
  BPT_table.src = 'img/BPtableF.svg';
}
BPT_table.onclick = () => {
  brandPageMain.classList.add('brandPage_right-blockTable');
  brandPageMain.classList.remove('brandPage_right-blockBurger');
  BPT_burger.src = 'img/BPburgerF.svg';
  BPT_table.src = 'img/BPtableG.svg';
}


// brandPage inputRange start

let minRangeValueGap = 6;
const range = document.getElementById("range_track");
const minval = document.querySelector(".minvalue");
const maxval = document.querySelector(".maxvalue");
const rangeInput = document.querySelectorAll(".double_range_slider input");

let minPercentage, maxPercentage;

const minRangeFill = () => {
  range.style.left = (rangeInput[0].value / rangeInput[0].max) * 100 + "%";
};
const maxRangeFill = () => {
  range.style.right =
    100 - (rangeInput[1].value / rangeInput[1].max) * 100 + "%";
};
const MinVlaueBubbleStyle = () => {
  minPercentage = (minRange / rangeInput[0].max) * 100;
};
const MaxVlaueBubbleStyle = () => {
  maxPercentage = 100 - (maxRange / rangeInput[1].max) * 100;
};

const setMinValueOutput = () => {
  minRange = parseInt(rangeInput[0].value);
};
const setMaxValueOutput = () => {
  maxRange = parseInt(rangeInput[1].value);
};

setMinValueOutput();
setMaxValueOutput();
minRangeFill();
maxRangeFill();
MinVlaueBubbleStyle();
MaxVlaueBubbleStyle();

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    setMinValueOutput();
    setMaxValueOutput();

    minRangeFill();
    maxRangeFill();

    MinVlaueBubbleStyle();
    MaxVlaueBubbleStyle();

    if (maxRange - minRange < minRangeValueGap) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - minRangeValueGap;
        setMinValueOutput();
        minRangeFill();
        MinVlaueBubbleStyle();
        e.target.style.zIndex = "2";
      } else {
        rangeInput[1].value = minRange + minRangeValueGap;
        e.target.style.zIndex = "2";
        setMaxValueOutput();
        maxRangeFill();
        MaxVlaueBubbleStyle();
      }
    }
  });
});



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
  if (current && openedWithSelect) {
    if (e.target !== current && !current.contains(e.target)) {
      current.style.display = 'none';
      downImg.src = 'img/down.svg';
      isOpenSelect = false;
      current = null;
    }
  }
  else {
    openedWithSelect = true;
  }

  if (currentBrand && openedWithSelectBrand) {
    if (e.target !== currentBrand && !currentBrand.contains(e.target)) {
      currentBrand.style.display = 'none';
      brandPage_filterBtnImg.style.transform = 'rotate(180deg)';
      isbrandPageFilteropen = false;
      currentBrand = null;
    }
  }
  else {
    openedWithSelectBrand = true;
  }

  if (currentCatalog && openedWithSelectCatalog) {
    if (e.target !== currentCatalog && !currentCatalog.contains(e.target)) {
      currentCatalog.style.display = 'none';
      isOpenSelect = false;
      currentCatalog = null;
    }
  }
  else {
    openedWithSelectCatalog = true;
  }
}




// swiper brandCategory

var swiperBrandCategory = new Swiper(".mySwiperBrandCategory", {
  slidesPerView: 1.5,
  spaceBetween: 5,
  breakpoints: {
    500: {
      slidesPerView: 3.5,
    },
    1200: {
      slidesPerView: 5,
    },
  }
});


// 


let catalogCategoriesBtns = document.querySelectorAll('.catalog_p a');
let catalogCategoriesProds = document.querySelectorAll('.catalog .mySwiper3');
let ccActiveClasName = 'catalog_pActive';


catalogCategoriesBtns.forEach((el, i) => {
  el.onclick = () => {
    catalogCategoriesProds.forEach(prod => {
      prod.style.display = 'none';
    });
    catalogCategoriesProds[i].style.display = 'flex';
    catalogCategoriesBtns.forEach(p => {
      p.className = '';
    })
    el.className = ccActiveClasName;

  }
})