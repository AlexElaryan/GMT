
// footer

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
  } else if (isOpenSelect) {
    categorySelectBlock.style.display = 'none';
    downImg.src = 'img/down.svg';
    isOpenSelect = false;
    current = null;
  }
  openedWithSelect = false;
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

