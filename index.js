const mainBox = document.querySelector(".js-main-box"),
    previousBtn = mainBox.querySelector(".btn-previous"),
    nextBtn = mainBox.querySelector(".btn-next"),
    imgBox = document.querySelector(".image-box"),
    img = imgBox.querySelector("img"),
    dotBox = document.querySelector(".js-dot-box");
    indexBtn = dotBox.getElementsByClassName("img-index-btn");

const IMG_NUMBER = 5;
const CLICKED_DOT_CN = "clicked-color";


function handleClickPreviousBtn(){
    const src = img.src;
    const currentImgNumber= src[src.length -5]; // img name 숫자 가져오기
    let changeNumber = parseInt(currentImgNumber) - 1;
    //첫번째 이미지요소 도달 -> 마지막 이미지로 순환, Dot 업데이트
    if(changeNumber < 1){
        const renewNumber = changeNumber = IMG_NUMBER;
        img.src=`images/image-${renewNumber}.png`
        removeClasses(indexBtn);
        indexBtn[renewNumber-1].classList.add(CLICKED_DOT_CN);
    } else{
        img.src=`images/image-${changeNumber}.png`
        removeClasses(indexBtn);
        indexBtn[changeNumber-1].classList.add(CLICKED_DOT_CN);
    }
}

function handleClickNextBtn(){
    const src = img.src;
    const currentImgNumber= src[src.length -5]; // img Number 가져오기
    let changeNumber = parseInt(currentImgNumber) + 1;
    //마지막 이미지요소 도달 -> 첫번째 이미지로 순환, Dot 업데이트
    if(changeNumber > IMG_NUMBER){
        const renewNumber = changeNumber = 1;
        img.src=`images/image-${renewNumber}.png`
        removeClasses(indexBtn);
        indexBtn[renewNumber-1].classList.add(CLICKED_DOT_CN);
    } else{
        img.src=`images/image-${changeNumber}.png`
        removeClasses(indexBtn);
        indexBtn[changeNumber-1].classList.add(CLICKED_DOT_CN);
    }
}

//전체 Dot 대상 "click" 이벤트리스너 개별생성
function addDotEventListner(array){
    const length = array.length;
    for(i=0; i < length; i++){        
        array[i].addEventListener("click", handleClickIndexBtn);
    }
}
//전체 Dot Color 리셋
function removeClasses(array){
    const length = array.length;
    for(i=0; i < length; i++){        
        array[i].classList.remove(CLICKED_DOT_CN);
    }
}

function handleClickIndexBtn(event){
    //전체 Dot Color 리셋 실행
    removeClasses(indexBtn);
    //클릭된 Dot - Color 페인팅 
    const dotBtn = event.target;
    dotBtn.classList.add(CLICKED_DOT_CN);        //classList.add() 형식 기억하자
    const idNumber = event.target.id;
    img.src=`images/image-${idNumber}.png`

}

function init(){
    addDotEventListner(indexBtn);
    previousBtn.addEventListener("click", handleClickPreviousBtn);
    nextBtn.addEventListener("click", handleClickNextBtn);
}

init();