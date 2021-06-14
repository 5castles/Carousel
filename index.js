const mainBox = document.querySelector(".js-main-box"),
    previousBtn = mainBox.querySelector(".btn-previous"),
    nextBtn = mainBox.querySelector(".btn-next"),
    imgBox = document.querySelector(".image-box"),
    img = imgBox.querySelector("img");




// 이미지 변경은 아래와 같이 이미지 요소의 src를 변경하는 방식으로 하는 것을 권장합니다.
// someImageElement.src = "/images/image-1.png";


// 화살표 버튼 클릭 -> 이미지 키/값 가져오기 -> +1  혹은 -1 하기 -> 소스 변경 = 이미지 변경              (Number 순서)  % 5



function handleClickPreviousBtn(){
     const src = img.src;
     console.log(src)
     const next = src[src.length -5]; // img name 숫자 가져오기
     console.log(next)
    //img.src=`images/image-${}.png`
}

function handleClickNextBtn(){

}

function init(){
    previousBtn.addEventListener("click", handleClickPreviousBtn);
    nextBtn.addEventListener("click", handleClickNextBtn);
}

init();