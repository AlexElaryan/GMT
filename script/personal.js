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



// popUp editLogo


let editLogo = document.querySelector('.editLogo');
let popUp_LogoEdit = document.getElementById('popUp_LogoEdit');
let editLogoClose = document.getElementById('popUpClose_LogoEdit');

editLogo.onclick = () => {
    popUp_LogoEdit.style.display = 'flex';
}

editLogoClose.onclick = () => {
    popUp_LogoEdit.style.display = 'none';
}



popUp_LogoEdit.onclick = e => {
    if (e.target === e.currentTarget) {
        popUp_LogoEdit.style.display = 'none';
    }
}

// popUp editLogo2


let editLogoIMG = document.querySelector('.personal_user-logoEditStep1 img');
let popUp_LogoIMG = document.getElementById('popUp_LogoIMG');
let editLogoIMGClose = document.getElementById('popUpClose_LogoIMG');
let userLogoEditCancel = document.querySelector('.userLogoEditCancel');
let userLogoEditConfirm = document.querySelector('.userLogoEditConfirm');
let personalLogo = document.querySelector('.personal_user-logo');
let popUp_logoEdit_IMG = document.querySelector('.popUp_logoEdit_IMG');
let logoImgStyle = getComputedStyle(popUp_logoEdit_IMG);

let logoText = document.querySelector('.personal_user-logo h2');


editLogoIMG.onclick = () => {
    popUp_LogoIMG.style.display = 'flex';
}

editLogoIMGClose.onclick = () => {
    popUp_LogoIMG.style.display = 'none';
}

userLogoEditCancel.onclick = () => {
    popUp_LogoIMG.style.display = 'none';
}

userLogoEditConfirm.onclick = () => {
    personalLogo.style.background = `${logoImgStyle.background}`;
    logoText.style.display = 'none';
    popUp_LogoIMG.style.display = 'none';
    
}

let delLogo = document.querySelector('.delLogo');

delLogo.onclick = () => {
    logoText.style.display = 'block';
    personalLogo.style.background = '#E1EFE6';
}




popUp_LogoIMG.onclick = e => {
    if (e.target === e.currentTarget) {
        popUp_LogoIMG.style.display = 'none';
    }
}



// personal info popup

let popUp_info = document.getElementById('popUp_info');
let popUpClose_info = document.getElementById('popUpClose_info');
let openpopUp_info = document.querySelector('.changeUserInfo');

openpopUp_info.onclick = () => {
    popUp_info.style.display = 'flex';
}

popUpClose_info.onclick = () => {
    popUp_info.style.display = 'none';
}

popUp_info.onclick = e => {
    if (e.target === e.currentTarget) {
        popUp_info.style.display = 'none';
    }
}


let popUp_password = document.getElementById('popUp_password');
let popUpClose_password = document.getElementById('popUpClose_password');
let changeUserPassword = document.querySelector('.changeUserPassword');

changeUserPassword.onclick = () => {
    popUp_password.style.display = 'flex';
}

popUpClose_password.onclick = () => {
    popUp_password.style.display = 'none';
}

popUp_password.onclick = e => {
    if (e.target === e.currentTarget) {
        popUp_password.style.display = 'none';
    }
}


// popup payer


// let popUp_payer = document.getElementById('popUp_payer');
// let popUpClose_payer = document.getElementById('popUpClose_payer');
// let openpopUp_payer = document.querySelector('.personal_payerInfo-block-size .green_btn');

// openpopUp_payer.onclick = () => {
//     popUp_payer.style.display = 'flex';
// }

// popUpClose_payer.onclick = () => {
//     popUp_payer.style.display = 'none';
// }

// popUp_payer.onclick = e => {
//     if (e.target === e.currentTarget) {
//         popUp_payer.style.display = 'none';
//     }
// }

// popup mail edit


let popUp_mailEdit = document.getElementById('popUp_mailEdit');
let popUpClose_mailEdit = document.getElementById('popUpClose_mailEdit');
let openpopUp_mailEdit = document.querySelector('.userMailEdit');

openpopUp_mailEdit.onclick = () => {
    popUp_mailEdit.style.display = 'flex';
}

popUpClose_mailEdit.onclick = () => {
    popUp_mailEdit.style.display = 'none';
}

popUp_mailEdit.onclick = e => {
    if (e.target === e.currentTarget) {
        popUp_mailEdit.style.display = 'none';
    }
}
// popup mail edit2


let popUp_mailEdit2 = document.getElementById('popUp_mailEdit2');
let popUpClose_mailEdit2 = document.getElementById('popUpClose_mailEdit2');
let openpopUp_mailEdit2 = document.querySelector('.getCodeMailEdit');
let editMailEditBtn = document.querySelector('.codeSentinMail > p'); 

openpopUp_mailEdit2.onclick = () => {
    popUp_mailEdit.style.display = 'none';
    popUp_mailEdit2.style.display = 'flex';
}

editMailEditBtn.onclick = () => {
    popUp_mailEdit.style.display = 'flex';
    popUp_mailEdit2.style.display = 'none';
}

popUpClose_mailEdit2.onclick = () => {
    popUp_mailEdit2.style.display = 'none';
}

popUp_mailEdit2.onclick = e => {
    if (e.target === e.currentTarget) {
        popUp_mailEdit2.style.display = 'none';
    }
}

// popup tel edit


let popUp_telEdit = document.getElementById('popUp_telEdit');
let popUpClose_telEdit = document.getElementById('popUpClose_telEdit');
let openpopUp_telEdit = document.querySelector('.userTelEdit');

openpopUp_telEdit.onclick = () => {
    popUp_telEdit.style.display = 'flex';
}

popUpClose_telEdit.onclick = () => {
    popUp_telEdit.style.display = 'none';
}

popUp_telEdit.onclick = e => {
    if (e.target === e.currentTarget) {
        popUp_telEdit.style.display = 'none';
    }
}

// popup tel edit2


let popUp_telEdit2 = document.getElementById('popUp_telEdit2');
let popUpClose_telEdit2 = document.getElementById('popUpClose_telEdit2');
let openpopUp_telEdit2 = document.querySelector('.getCodeTelEdit'); 
let edittelEditBtn = document.querySelector('.codeSentinTel > p'); 

openpopUp_telEdit2.onclick = () => {
    popUp_telEdit2.style.display = 'none';
    popUp_telEdit2.style.display = 'flex';
}

edittelEditBtn.onclick = () => {
    popUp_telEdit.style.display = 'flex';
    popUp_telEdit2.style.display = 'none';
}

popUpClose_telEdit2.onclick = () => {
    popUp_telEdit2.style.display = 'none';
}

popUp_telEdit2.onclick = e => {
    if (e.target === e.currentTarget) {
        popUp_telEdit2.style.display = 'none';
    }
}

// popup request sent


let popUp_requestSent = document.getElementById('popUp_requestSent');
let popUpClose_requestSent = document.getElementById('popUpClose_requestSent');
// let openpopUp_requestSent = document.querySelector('');

// openpopUp_requestSent.onclick = () => {
//     popUp_requestSent.style.display = 'flex';
// }

popUpClose_requestSent.onclick = () => {
    popUp_requestSent.style.display = 'none';
}

popUp_requestSent.onclick = e => {
    if (e.target === e.currentTarget) {
        popUp_requestSent.style.display = 'none';
    }
}

// Pop Up`s end //



// personal 

let personalHordersMain = document.querySelectorAll('.phO_prod-main');
let personalHordersBtn = document.querySelectorAll('.phO_prod-title');
let personalHordersBtnIMG = document.querySelectorAll('.phO_prod-title > img');
let phmIsOpen = [false, false];

personalHordersBtn.forEach((el, i) => {
    el.onclick = () => {
        if (!phmIsOpen[i]) {
            personalHordersMain[i].style.display = 'flex';
            personalHordersBtnIMG[i].style.transform = 'rotate(-90deg)';
            phmIsOpen[i] = true;
        }
        else if (phmIsOpen[i]) {
            personalHordersMain[i].style.display = 'none';
            personalHordersBtnIMG[i].style.transform = 'rotate(90deg)';
            phmIsOpen[i] = false;
        }
    }
})

