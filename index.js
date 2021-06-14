const mainBox = document.querySelector(".js-main-box"),
    previousBtn = mainBox.querySelector(".btn-previous"),
    nextBtn = mainBox.querySelector(".btn-next"),
    imgBox = document.querySelector(".image-box"),
    img = imgBox.querySelector("img"),
    dotBox = document.querySelector(".js-dot-box");
    indexBtn = dotBox.getElementsByClassName("img-index-btn");


const IMG_NUMBER = 5;



// 이미지 변경은 아래와 같이 이미지 요소의 src를 변경하는 방식으로 하는 것을 권장합니다.
// someImageElement.src = "/images/image-1.png";


// 화살표 버튼 클릭 -> 이미지 키/값 가져오기 -> +1  혹은 -1 하기 -> 소스 변경 = 이미지 변경              (Number 순서)  % 5



function handleClickPreviousBtn(){
    const src = img.src;
    const currentImgNumber= src[src.length -5]; // img name 숫자 가져오기
    let changeNumber = parseInt(currentImgNumber) - 1;
    if(changeNumber < 1){
        const renewNumber = changeNumber = 5;
        img.src=`images/image-${renewNumber}.png`
    } else{
       img.src=`images/image-${changeNumber}.png`
    }
}

function handleClickNextBtn(){
    const src = img.src;
    const currentImgNumber= src[src.length -5]; // img name 숫자 가져오기
    let changeNumber = parseInt(currentImgNumber) + 1;
    if(changeNumber > IMG_NUMBER){
        const renewNumber = changeNumber = 1;
        img.src=`images/image-${renewNumber}.png`
    } else{
       img.src=`images/image-${changeNumber}.png`
    }
}

function selectDots(group){
    const length = group.length;
    for(i=0; i < length; i++){        
       group[i].addEventListener("click", handleClickIndexBtn);
    }
}
function handleClickIndexBtn(event){
    //전체 Dot Color 리셋
    indexBtn.forEach(function(anything){
        anything.classList.add("clicked-color");
    })
    const dotBtn = event.target;
    console.log(dotBtn.classList)
    dotBtn.classList.add("clicked-color");        //classList.add() 형식 기억하자
    
    const idNumber = event.target.id;
    img.src=`images/image-${idNumber}.png`

}

function init(){
    selectDots(indexBtn);
    previousBtn.addEventListener("click", handleClickPreviousBtn);
    nextBtn.addEventListener("click", handleClickNextBtn);
    
    
}

init();


