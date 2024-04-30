
// variable
let headerWidth = 200;
let headerWidthBar = 50;

// body
var bodyContainer = document.querySelector('.container');

// header - account - dashboard - nav - item
var header = document.querySelector('.header');
var headerAccount = document.querySelector('.header__dashboard-account');
var headerAccountNav = document.querySelector('.header__dashboard-account-nav');
var headerAccountNavItem = document.getElementsByClassName('header__dashboard-account-nav-item');
var headerAccountNavImg = document.querySelector('.header__dashboard-account-nav-img');

headerAccount.addEventListener('click',() => {
    let heightheaderitems = 50;
    if(headerAccountNav.classList.contains("dp-n")){
        headerAccountNav.classList.remove('dp-n');
        setTimeout(() => {
            for(let i = 0; i < headerAccountNavItem.length; ++i){
                headerAccountNavItem[i].style.transform = `translate(0px, ${heightheaderitems*(i+1)}px`;
                headerAccountNavItem[i].style.opacity = 1;
                headerAccountNavImg.style.transform = 'rotate(180deg)';
            }
        },0);
    }
    else
    {
        setTimeout(() => {
            for(let i = 0; i < headerAccountNavItem.length; ++i){
                headerAccountNavItem[i].style.transform = 'translate(0px, 20px)';
                headerAccountNavItem[i].style.opacity = 0;
                headerAccountNavImg.style.transform = 'rotate(0deg)';
            }
        },0);
        setTimeout(() => {
            headerAccountNav.classList.add('dp-n');
        },1000);
    }
});

// header - dashboard - notification - icon
var headerDashboardNotification = document.querySelector('.header__dashboard-notification');
var headerDashboardNotificationIcon = document.querySelector('.header__dashboard-notification-icon');

if(1){
    setInterval(() => {    
        setTimeout(() => {
            headerDashboardNotificationIcon.style.transform = `rotate(100deg)`;
        },500);
        headerDashboardNotificationIcon.style.transform = `rotate(-100deg)`;
    },1000);    
}
// nav
var nav = document.querySelector('.nav');
var navBar = document.querySelector('.nav__bar');
var navBarImg = document.querySelector('.nav__bar-img');
var navList = document.querySelector('.nav__list');
var navListItem = document.getElementsByClassName('nav__list-item');
var navListItemText = document.getElementsByClassName('nav__list-item-text');
var navListItemImg = document.getElementsByClassName('nav__list-item-img');
let maxnavListItem = 0;

document.addEventListener('DOMContentLoaded',() => {
    nav.style.width = `${headerWidth}px`;
    bodyContainer.style.gridTemplateColumns = `${headerWidth}px 1fr`;
    header.style.width = `calc(100% - ${nav.clientWidth}px)`;   
    for(let i = 0; i < navListItem.length; ++i){
        let temp = navListItemText[i].clientWidth + navListItemImg[i].clientWidth;
        if(temp > maxnavListItem) maxnavListItem = temp;
    }
    for(let i = 0; i < navListItem.length; ++i){
        navListItem[i].style.paddingLeft = `${(navList.clientWidth - maxnavListItem)/3}px`;
        // navListItemText[i].style.opacity = 1;
    }
});

function navUnHidden() {
    nav.classList.remove('check');
    nav.style.width = `${headerWidth}px`;
    bodyContainer.style.gridTemplateColumns = `${headerWidth}px 1fr`;
    header.style.width = `calc(100% - ${headerWidth}px)`;
    navBarImg.style.transform = 'rotate(0deg)';
    setTimeout(() => {
        for(let i = 0; i < navListItemText.length; ++i){
            navListItemText[i].classList.remove('dp-n');
        }
    },500);
    for(let i = 0; i < navListItem.length; ++i){
        navListItem[i].style.justifyContent = "start";
        navListItemText[i].style.opacity = 1;
    }
    for(let i = 0; i < navListItem.length; ++i){
        navListItem[i].style.paddingLeft = `${(headerWidth - maxnavListItem)/3}px`;
    }
    nav.style.cursor = "auto";
}

function navHidden() {
    nav.classList.add('check');
    nav.style.width = `${headerWidthBar}px`; 
    bodyContainer.style.gridTemplateColumns = `${headerWidthBar}px 1fr`;
    header.style.width = `calc(100% - ${headerWidthBar}px)`;
    navBarImg.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        for(let i = 0; i < navListItemText.length; ++i){
            navListItemText[i].classList.add('dp-n');
        }
    },200);
    for(let i = 0; i < navListItem.length; ++i){
        navListItem[i].style.paddingLeft = "15px";
        navListItemText[i].style.opacity = 0;
    }
    setTimeout(() => {
        for(let i = 0; i < navListItem.length; ++i){
            navListItem[i].style.justifyContent = "center";
        } 
    },500);
    nav.style.cursor = "pointer";
}

navBar.addEventListener('click',() => {
    if(nav.classList.contains('check')){
        navUnHidden();
    }
    else
    {
        navHidden();
    }
});

nav.addEventListener('click',(event) => {
    if(!event.target.classList.contains('nav__bar') && !event.target.classList.contains('nav__bar-img')){
        if(nav.classList.contains('check')){
            navUnHidden();
        }
    }
});

for(let i = 0; i < navListItem.length; ++i){
    navListItem[i].addEventListener('click',() => {
        navListItemText[i].click();
    });
}

// content
var contentListRoom = document.querySelector('.content__listroom');
var contentListRoomItem = document.getElementsByClassName('content__listroom-item');
var contentListRoomItemID = document.getElementsByClassName('content__listroom-item-id');
var contentListRoomItemTypeRoom = document.getElementsByClassName('content__listroom-item-TypeRoom');
var contentListRoomItemMoney = document.getElementsByClassName('content__listroom-item-Money');
var contentListRoomItemCheck = document.getElementsByClassName('content__listroom-item-check');

function setStyleListRoomItem(){
    setTimeout(() => {
        contentListRoomItem[0].style.backgroundColor = '#F4F7FC';
        contentListRoomItem[contentListRoomItem.length-1].style.backgroundColor = "#fff";
    },100);
}

function setTitleListRoomItem(){
    setTimeout(() => {
        contentListRoomItemID[0].style = "font-weight: 600;font-size: 17px;font-family: sans-serif;color: gray;";
        contentListRoomItemTypeRoom[0].style = "font-weight: 600;font-size: 17px;font-family: sans-serif;color: gray;";
        contentListRoomItemMoney[0].style = "font-weight: 600;font-size: 17px;color: gray;font-family: sans-serif;";
        contentListRoomItemCheck[0].style = "font-weight: 600;font-size: 17px;color: gray;font-family: sans-serif;";
    },100);
}

document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        setStyleListRoomItem();
        setTitleListRoomItem();
    },100);
});


// sign
var sign = document.querySelector('.sign');
var signAccount = document.querySelector('.sign-account');
var signAccountIn = document.querySelector('.sign-account-in');
var signAccountUp = document.querySelector('.sign-account-up');
var signMove = document.querySelector('.sign-move');
var signMoveIn = document.querySelector('.sign-move-in');
var signMoveUp = document.querySelector('.sign-move-up');
var signMoveUpButton = document.querySelector('.sign-move-up__button');
var signMoveInButton = document.querySelector('.sign-move-in__button');


signMoveUpButton.addEventListener('click',() => {
    signMove.style.transform = "translatex(-100%)";
    signAccount.style.transform = "translatex(100%)";
    signAccountIn.style.opacity = 0;
    signMoveUp.style.opacity = 0;
    setTimeout(() => {
        signAccountIn.style.display = 'none';
        signMoveUp.style.display = 'none';
    },250);

    signAccountUp.style.display = 'flex';
    signMoveIn.style.display = 'flex';
    setTimeout(() => {
        signAccountUp.style.opacity = 1;
        signMoveIn.style.opacity = 1;
    },0);
});

signMoveInButton.addEventListener('click',() => {
    signMove.style.transform = "translatex(0%)";
    signAccount.style.transform = "translatex(0%)";
    signAccountUp.style.opacity = 0;
    signMoveIn.style.opacity = 0;
    setTimeout(() => {
        signAccountUp.style.display = 'none';
        signMoveIn.style.display = 'none';
    },250);

    signAccountIn.style.display = 'flex';
    signMoveUp.style.display = 'flex';
    setTimeout(() => {
        signAccountIn.style.opacity = 1;
        signMoveUp.style.opacity = 1;
    },0);
});

var signTimes = document.querySelector('.sign-times');
var backgroundSign = document.querySelector('.background-sign');

signTimes.addEventListener('click',() => {
    signTimes.style.transform = `translatey(${sign.clientHeight}px)`;
    if(1){
        sign.classList.remove('box-shadow-sign');
        sign.classList.remove('background-color-sign');
        signAccount.style.transform = 'translatex(-100%)';
        signMove.style.transform = 'translatex(100%)';
        signAccount.style.opacity = 0;
        signMove.style.opacity = 0;
        setTimeout(() => {
            sign.style.display = 'none';
            sign.style.transform = 'translate(-50%,-70%)';
        },250);
        backgroundSign.style.opacity = 0;
        setTimeout(() => {
            backgroundSign.style.display = 'none';
        },250);
    }
});

var headerDashboardAccountNavItem = document.getElementsByClassName('header__dashboard-account-nav-item');

document.addEventListener('DOMContentLoaded',() => {
    sign.style.display = 'none';
    backgroundSign.style.display = 'none';
})

for(let i = 0; i < headerDashboardAccountNavItem.length; ++i){
    if(i == 0){
        headerDashboardAccountNavItem[i].addEventListener('click',() => {
            backgroundSign.style.display = 'block';
            setTimeout(() => {
                backgroundSign.style.opacity = 1;
            },0)
            sign.style.display = 'flex';
            setTimeout(() => {
                sign.classList.add('background-color-sign');
                sign.style.opacity = 1;
                sign.style.transform = 'translate(-50%, -50%)';
            },0);

            signAccountIn.style.display = 'flex';
            signAccountIn.style.opacity = 1;
            signAccount.style.transform ='translatex(0px)';
            signAccount.style.opacity = 1;
            signAccountUp.style.display = 'none';
            signAccountUp.style.opacity = 0;
            signMoveUp.style.display = 'flex';
            signMoveUp.style.opacity = 1;
            signMove.style.transform = 'translatex(0px)';
            signMove.style.opacity = 1;
            signMoveIn.style.display = 'none';
            signMoveIn.style.opacity = 0;
            signTimes.style.transform = 'translate(0px, -40px)';
            sign.classList.add('box-shadow-sign');
        });
    }
    else
    {
        headerDashboardAccountNavItem[i].addEventListener('click',() => {
            backgroundSign.style.display = 'block';
            setTimeout(() => {
                backgroundSign.style.opacity = 1;
            },0)
            sign.style.display = 'flex';
            setTimeout(() => {
                sign.classList.add('background-color-sign');
                sign.style.opacity = 1;
                sign.style.transform = 'translate(-50%, -50%)';
            },0);
            signTimes.style.transform = 'translate(0px, -40px)';
            signAccountUp.style.display = 'flex';
            signAccountUp.style.opacity = 1;
            signAccount.style.transform ='translatex(100%)';
            signAccount.style.opacity = 1;
            signAccountIn.style.display = 'none';
            signAccountIn.style.opacity = 0;
            signMoveIn.style.display = 'flex';
            signMoveIn.style.opacity = 1;
            signMove.style.transform = 'translatex(-100%)';
            signMove.style.opacity = 1;
            signMoveUp.style.display = 'none';
            signMoveUp.style.opacity = 0;
            sign.classList.add('box-shadow-sign');
        });
    }
}

var contentTool = document.querySelector('.content__tool');
var contentToolItem = document.getElementsByClassName('content__tool-item');
var contentToolItemFirst = document.getElementsByClassName('content__tool-item-first');
var contentToolItemSecond = document.getElementsByClassName('content__tool-item-second');
var contentToolItemThird = document.getElementsByClassName('content__tool-item-third');

let width = 100;
let height = 20;
let high = 30;
let skew = 45;

function funcToolItemHover(i)  {
    contentToolItem[i].style.transform = 'translatey(20px)';
}

function funcToolItemDontHover(i)  {
    contentToolItem[i].style.transform = 'translatey(0px)';
}

document.addEventListener('DOMContentLoaded',() => {
    for(let i = 0; i < contentToolItem.length; ++i){
        contentToolItemFirst[i].style.width = `${width}px`;
        contentToolItemFirst[i].style.height = `${high}px`;
        contentToolItemSecond[i].style.width = `${width}px`;
        contentToolItemSecond[i].style.height = `${height}px`;
        contentToolItemThird[i].style.width = `${high}px`;
        contentToolItemThird[i].style.height = `${height}px`;

        contentToolItemFirst[i].style.transform = `skewx(-${skew}deg)`;
        contentToolItemFirst[i].style.top = `-${high}px`;
        contentToolItemFirst[i].style.left = `${high/2}px`;

        contentToolItemThird[i].style.transform = `skewy(-${skew}deg)`;
        contentToolItemThird[i].style.top = `-${high/2}px`;
        contentToolItemThird[i].style.left = `${width}px`;

        contentToolItem[i].style.height = `calc(${height}px + ${high}px)`;
        contentToolItem[i].style.width = `calc(${width}px + ${high}px)`;
        contentToolItem[i].style.transform = `translatey(${high}px)`;
    }
});

let highToolHover = 8;

for(let i = 0; i < contentToolItem.length; ++i){
    contentToolItemFirst[i].addEventListener('mouseover',() => {
        contentToolItem[i].style.transform = `translatey(calc(${high}px + ${highToolHover}px))`;
        contentToolItemFirst[i].style.backgroundColor = '#c7c5c5';
        contentToolItemSecond[i].style.backgroundColor = '#9b9797';
        contentToolItemThird[i].style.backgroundColor = '#747272';
        contentToolItemFirst[i].style.color = "#9b9797";
    });
    contentToolItemFirst[i].addEventListener('mouseleave',() => {
        contentToolItem[i].style.transform = `translatey(${high}px)`;
        contentToolItemFirst[i].style.backgroundColor = '#a2a1a1';
        contentToolItemSecond[i].style.backgroundColor = '#747272';
        contentToolItemThird[i].style.backgroundColor = '#3f3e3e';
        contentToolItemFirst[i].style.color = "#cbcbcb";
    });
    contentToolItemSecond[i].addEventListener('mouseover',() => {
        contentToolItem[i].style.transform = `translatey(calc(${high}px + ${highToolHover}px))`;
        contentToolItemFirst[i].style.backgroundColor = '#c7c5c5';
        contentToolItemSecond[i].style.backgroundColor = '#9b9797';
        contentToolItemThird[i].style.backgroundColor = '#747272';
        contentToolItemFirst[i].style.color = "#9b9797";
    });
    contentToolItemSecond[i].addEventListener('mouseleave',() => {
        contentToolItem[i].style.transform = `translatey(${high}px)`;
        contentToolItemFirst[i].style.backgroundColor = '#a2a1a1';
        contentToolItemSecond[i].style.backgroundColor = '#747272';
        contentToolItemThird[i].style.backgroundColor = '#3f3e3e';
        contentToolItemFirst[i].style.color = "#cbcbcb";
    });
    contentToolItemThird[i].addEventListener('mouseover',() => {
        contentToolItem[i].style.transform = `translatey(calc(${high}px + ${highToolHover}px))`;
        contentToolItemFirst[i].style.backgroundColor = '#c7c5c5';
        contentToolItemSecond[i].style.backgroundColor = '#9b9797';
        contentToolItemThird[i].style.backgroundColor = '#747272';
        contentToolItemFirst[i].style.color = "#9b9797";
    });
    contentToolItemThird[i].addEventListener('mouseleave',() => {
        contentToolItem[i].style.transform = `translatey(${high}px)`;
        contentToolItemFirst[i].style.backgroundColor = '#a2a1a1';
        contentToolItemSecond[i].style.backgroundColor = '#747272';
        contentToolItemThird[i].style.backgroundColor = '#3f3e3e';
        contentToolItemFirst[i].style.color = "#cbcbcb";
    });
}

var contentFormTool = document.querySelector('.content-form__tool');
var contentFormToolItem = document.getElementsByClassName('content-form__tool-item');
var contentFormToolItemTopic = document.getElementsByClassName('content-form__tool-item-topic');
var contentFormToolItemText = document.getElementsByClassName('content-form__tool-item-text');
var contentFormToolTitle = document.querySelector('.content-form__tool-title');
var contentFormToolSubmitConfirm = document.querySelector('.content-form__tool-submit-confirm');
var contentFormToolButtonCancel = document.querySelector('.content-form__tool-submit-cancel');

function funcTurnOnContentFormTool(){
    contentFormTool.style.display = 'flex';
        setTimeout(() => {
            contentFormTool.style.opacity = 1;
            contentFormTool.style.transform = 'translate(-50%,-50%)';
        },0);
        backgroundSign.style.display = 'block';
        setTimeout(() => {
            backgroundSign.style.opacity = 1;
        },0)
}

for(let i = 0; i < contentToolItem.length; ++i){
    contentToolItemFirst[i].addEventListener('click',() => {
        funcTurnOnContentFormTool();
        if(i == 0){ contentFormToolTitle.innerHTML = 'Insert room'; contentFormTool.method = "Post"; }
        if(i == 1){ contentFormToolTitle.innerHTML = 'Delete room'; contentFormTool.method = "Delete"; }
        if(i == 2){ contentFormToolTitle.innerHTML = 'Update room'; contentFormTool.method = "Put"; } 
    })
    contentToolItemSecond[i].addEventListener('click',() => {
        contentToolItemFirst[i].click();
    })
    contentToolItemThird[i].addEventListener('click',() => {
        contentToolItemFirst[i].click();
    })
}

setTimeout(()=>{
    var contentListRoomItemButton = document.querySelector('.content__listroom-button');
    contentListRoomItemButton.addEventListener('click',()=>{
        funcTurnOnContentFormTool();
        funcResetValueContentFormTool();
        contentFormToolTitle.innerHTML = 'Insert room';
    });
},1000);

function funcTurnOffContentFormTool(){
    contentFormTool.style.opacity = 0;
    backgroundSign.style.opacity = 0;
    setTimeout(() => {
        contentFormTool.style.transform = 'translate(-50%,-70%)';
        contentFormTool.style.display = 'none';
        backgroundSign.style.display = 'none';
    },250);
}

function UnblockInput(){
    contentFormToolItemText[0].disabled = false;
    contentFormToolItemText[1].disabled = false;
    contentFormToolItemText[2].disabled = false;
    contentFormToolItemText[3].disabled = false;
}

function blockInput(){
    contentFormToolItemText[0].disabled = true;
    contentFormToolItemText[1].disabled = true;
    contentFormToolItemText[2].disabled = true;
    contentFormToolItemText[3].disabled = true;
}

contentFormToolButtonCancel.addEventListener('click',() => {
    funcTurnOffContentFormTool();
    UnblockInput();
});

function funcResetValueContentFormTool(){
    for(let i = 0; i < contentFormToolItem.length; ++i){
        contentFormToolItemText[i].value = '';
    }
}

// contentFormToolSubmitConfirm.addEventListener('click',() => {
//     const arrText = new Object();
//     for(let i = 0; i < contentFormToolItem.length; ++i){
//         arrText[contentFormToolItemTopic[i].innerHTML] = contentFormToolItemText[i].value;
//     }

//     const keys = Object.keys(arrText);

//     const divContentListRoomItem = document.createElement('div');
//     divContentListRoomItem.classList.add('content__listroom-item');
//     const divContentListRoomItemForm = document.createElement('div');
//     divContentListRoomItemForm.classList.add('content__listroom-item-form');
//     const divContentListRoomItemCheck = document.createElement('div');
//     divContentListRoomItemCheck.classList.add('content__listroom-item-check');

//     for(let i = 0; i < contentFormToolItem.length - 1; ++i){
//         divContentListRoomItemForm.innerHTML += `<div class="content__listroom-item-form-item">
//                                                     <p class="content__listroom-item-form-item-topic">${keys[i]}:</p>
//                                                     <p class="content__listroom-item-form-item-text">${arrText[keys[i]]}</p>
//                                                 </div>`;
//     }
//     divContentListRoomItemForm.innerHTML += `<div class="content__listroom-item-form-item">
//                                                     <p class="content__listroom-item-form-item-text">${arrText[keys[contentFormToolItem.length-1]]}</p>
//                                                 </div>`
//     divContentListRoomItem.appendChild(divContentListRoomItemForm);
//     divContentListRoomItem.appendChild(divContentListRoomItemCheck);
//     contentListRoom.appendChild(divContentListRoomItem);

//     funcResetAttributecontentListRoomItem();
//     funcTurnOffContentFormTool();
//     funcResetValueContentFormTool();
// });

var courseAPI = 'http://localhost:8080/appManageHotel-java-pj/Home-data-room';
var courseAPI = 'http://localhost:3000/Room';

// fetch(courseAPI)
//     .then(res => res.json())
//     .then(function(courses){
//         var htmls = courses.map(function(course) {
//             return `
//             <div class="content__listroom-item">
//                 <div class="content__listroom-item-form">
//                     <div class="content__listroom-item-form-item">
//                         <p class="content__listroom-item-form-item-topic">ID:</p>
//                         <p class="content__listroom-item-form-item-text">${course.id}</p>
//                     </div>
//                     <div class="content__listroom-item-form-item">
//                         <p class="content__listroom-item-form-item-topic">Type:</p>
//                         <p class="content__listroom-item-form-item-text">${course.TypeRoom}</p>
//                     </div>
//                     <div class="content__listroom-item-form-item">
//                         <p class="content__listroom-item-form-item-topic">View:</p>
//                         <p class="content__listroom-item-form-item-text"></p>
//                     </div>
//                     <div class="content__listroom-item-form-item">
//                         <p class="content__listroom-item-form-item-text">${course.Money}</p>
//                     </div>
//                 </div>
//                 <div class="content__listroom-item-check"></div>
//             </div>
//             `;
//         });
//         contentListRoom.innerHTML += htmls.join('');
//         funcResetAttributecontentListRoomItem();
//         funcTurnOffContentFormTool();
//         funcResetValueContentFormTool();
//     })

document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        funcTurnOffContentFormTool();
        funcResetValueContentFormTool();
    },100);
});

function getDataListRoomItem(i){
    contentFormToolItemText[0].value = contentListRoomItemID[i].innerHTML;
    contentFormToolItemText[1].value = contentListRoomItemTypeRoom[i].innerHTML;
    contentFormToolItemText[3].value = contentListRoomItemMoney[i].innerHTML;
}

document.addEventListener('DOMContentLoaded',() => {
    setTimeout(() => {
        var contentFormToolMethod = document.querySelector('.content-form__tool-method');
        var updateRoom = document.getElementsByClassName('update');
        var deleteRoom = document.getElementsByClassName('delete');
        var descRoom = document.getElementsByClassName('desc');

        for(let i = 0; i < updateRoom.length; ++i){
            updateRoom[i].addEventListener('click',()=>{
				console.log(2020)
                funcTurnOnContentFormTool();
                contentFormToolTitle.innerHTML = 'Update room';
                getDataListRoomItem(i+1);
                contentFormToolMethod.value = "2";
                console.log(contentFormToolMethod.value)
            });
            deleteRoom[i].addEventListener('click',()=>{
				console.log(1010);
                funcTurnOnContentFormTool();
                contentFormToolTitle.innerHTML = 'Delete room';
                getDataListRoomItem(i+1);
                // blockInput();
                contentFormToolMethod.value = "1";
                console.log(contentFormToolMethod.value)
            });
        }
    },500)
});
