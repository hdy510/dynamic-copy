// 미디어쿼리 설정
const mediaQueryTablet = window.matchMedia("(max-width: 1280px)");
const mediaQueryMobile = window.matchMedia("(max-width: 640px)");

let initialScrollCompleted = false; // 초기 애니메이션 완료 상태
let firstScrollCompleted = false; // 첫 번째 스크롤 애니메이션 완료 상태

// 전체 페이지 슬라이드 Swiper 설정
const swiper = new Swiper('.view.swiper', {
  direction: 'vertical',
  mousewheel: {
    enabled: false, // 초기에는 Swiper 스크롤 비활성화
  },
  on: {
    slideChangeTransitionStart: () => {
      const activeSection = document.querySelector('.swiper-slide-active section');

      // 1번 슬라이드로 돌아오면 상태 초기화
      if (activeSection.classList.contains('section1')) {
        resetToInitialState(); // 상태 초기화
      }

      // 2번 슬라이드 활성화 설정
      if (activeSection.classList.contains('section2')) {
        activateSecondSlide(); // 2번 슬라이드 설정 함수 호출
      }

      // 3번 슬라이드 활성화 설정
      if (activeSection.classList.contains('section3')) {
        activateThirdSlide(); // 3번 슬라이드 설정 함수 호출
      }

      // 4번 슬라이드 활성화 설정
      if (activeSection.classList.contains('section4')) {
        activateFourthSlide(); // 4번 슬라이드 설정 함수 호출
      }

      // 5번 슬라이드 활성화 설정
      if (activeSection.classList.contains('section5')) {
        activateFifthSlide(); // 5번 슬라이드 설정 함수 호출
      }

      // 6번 슬라이드 활성화 설정
      if (activeSection.classList.contains('section6')) {
        activateSixthSlide(); // 6번 슬라이드 설정 함수 호출
      }

      // 7번 슬라이드 활성화 설정
      if (activeSection.classList.contains('section7')) {
        activateSeventhSlide(); // 7번 슬라이드 설정 함수 호출
      }

      // 8번 슬라이드 활성화 설정
      if (activeSection.classList.contains('section8')) {
        activateEighthSlide(); // 8번 슬라이드 설정 함수 호출
      }

        // 9번 슬라이드 활성화 설정
        if (activeSection.classList.contains('section9')) {
        activateNinthSlide(); // 9번 슬라이드 설정 함수 호출
      }

      
      
      
    },
  },
});

// 초기 애니메이션 설정
const initialAnimation = () => {
  // 이전 애니메이션 강제 중단 및 초기화
  gsap.killTweensOf([
    "header h1 .black",
    "header h1 .white",
    "header nav div",
  ]);

  // 초기 상태 강제 설정
  gsap.set(".header h1 .black", { opacity: 0 });
  gsap.set(".header h1 .white", { opacity: 1 });
  gsap.set(".header nav div", { color: "#ffffff" });

  // 애니메이션 실행
  const animationScale = mediaQueryMobile.matches
    ? 2.5
    : mediaQueryTablet.matches
    ? 1.8
    : 1;

  gsap.fromTo(
    ".conMain-products",
    { scale: 0.4, opacity: 0.4, filter: "blur(1.8vw)" },
    {
      scale: animationScale,
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.inOut",
      onComplete: () => {
        initialScrollCompleted = true; // 초기 애니메이션 완료 상태
      },
    }
  );
  gsap.fromTo("header h1 .black",
    { opacity: 0 },
    { opacity: 0, duration: 0.8 }
  )
  gsap.fromTo("header h1 .white",
    { opacity: 1 },
    { opacity: 1, duration: 0.8 }
  )
  gsap.fromTo("header nav div", 
    { color: "#ffffff" },
    { color: "#ffffff", duration: 0.8 })

};

// 첫 번째 스크롤 애니메이션
const firstScrollAnimation = () => {
  // 애니메이션 실행
  const animationScale = mediaQueryMobile.matches
    ? 550
    : mediaQueryTablet.matches
    ? 450
    : 400;

  gsap.timeline({
    onComplete: () => {
      firstScrollCompleted = true; // 첫 번째 스크롤 완료 상태
      swiper.mousewheel.enable(); // Swiper 활성화
    },
  })
    .fromTo(
      ".conMain-text.beMore",
      { right: "100%", opacity: 0 },
      { right: "8vw", opacity: 1, duration: 0.4 }
    )
    .fromTo(
      ".conMain-text.dynamic",
      { left: "100%", opacity: 0 },
      { left: "8vw", opacity: 1, duration: 0.4 },
      "<"
    )
    .fromTo(
      ".conMain-ellipseBox",
      { opacity: 1, scale: 0 },
      { opacity: 1, scale: animationScale, duration: 0.4, ease: "power1.inOut" },
      "<"
    )
    .fromTo(
      ".conMain-ellipseBox",
      { rotate: -15, backgroundColor: "#ffffff", borderRadius: "50%" },
      { scaleY: 100, rotate: -35, backgroundColor: "#F81884", borderRadius: 0, duration: 0.6, ease: "power3.inOut" },
      "<50%"
    )
    .fromTo(
      ".conMain-text p",
      { color: "#F81884" },
      { color: "#ffffff", duration: 0.6, ease: "power1.inOut" },
      "<"
    )
};

// 2번 슬라이드 애니메이션 설정 함수
const activateSecondSlide = () => {
  // 이전 애니메이션 강제 중단 및 초기화
  gsap.killTweensOf([
    "header h1 .black",
    "header h1 .white",
    "header nav div",
    ".conMain-products2",
    ".conMain-text2",
    ".conMain-text3",
    ".conMain-text3 .count b",
    ".conMain-text4 .detail"
  ]);

  // 초기 상태 강제 설정
  gsap.set(".header h1 .black", { opacity: 0 });
  gsap.set(".header h1 .white", { opacity: 1 });
  gsap.set(".header nav div", { color: "#ffffff" });
  gsap.set(".conMain-products2", { opacity: 0, scale: 0.9 });
  gsap.set(".conMain-text2", { opacity: 0, y: 50 });
  gsap.set(".conMain-text3", { opacity: 0, y: 50 });
  gsap.set(".conMain-text3 .count b", { innerText: 0 });
  gsap.set(".conMain-text4 .detail", { opacity: 0, y: 20 });
  
  // 애니메이션 실행
  gsap.timeline()
    .fromTo("header h1 .black",
    { opacity: 0 },
    { opacity: 0, duration: 0.8 }
    )
    .fromTo("header h1 .white",
      { opacity: 1 },
      { opacity: 1, duration: 0.8 }
    , "<")
    .fromTo("header nav div", 
      { color: "#ffffff" },
      { color: "#ffffff", duration: 0.8 }
    , "<")
    .fromTo(
      ".conMain-products2",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 2, ease: "power3.out" }
    , "<")
    .fromTo(
      ".conMain-text2",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 0.1 },
      "<"
    )
    .fromTo(
      ".conMain-text3",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 0.2 },
      "<"
    )
    .fromTo(
      ".conMain-text3 .count b",
      { innerText: 0 },
      {
        innerText: 10000,
        duration: 1,
        ease: "linear",
        snap: { innerText: 1 },
        onUpdate: function () {
          const countElement = document.querySelector(".conMain-text3 #count");
          countElement.textContent = Math.floor(this.targets()[0].innerText);
        },
      },
      "<"
    )
    .fromTo(
      ".conMain-text4 .detail",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1, ease: "power3.out", delay: 0.3},
      "<"
    );
};

// 3번 슬라이드 애니메이션 설정 함수
const activateThirdSlide = () => {
// 이전 애니메이션 강제 중단 및 초기화
gsap.killTweensOf([
  "header h1 .black",
  "header h1 .white",
  "header nav div",
  ".conMain-products3",
  ".conMain-text5",
  ".conMain-text6"
]);

// 초기 상태 강제 설정
gsap.set(".header h1 .black", { opacity: 0 });
gsap.set(".header h1 .white", { opacity: 1 });
gsap.set(".header nav div", { color: "#ffffff" });
gsap.set(".conMain-products3", { opacity: 0, scale: 0.9 });
gsap.set(".conMain-text5", { opacity: 0, y: 50 });
gsap.set(".conMain-text6", { opacity: 0, y: 50 });

// 애니메이션 실행
gsap.timeline()
  .fromTo("header h1 .black",
    { opacity: 0 },
    { opacity: 0, duration: 0.8 }
  )
  .fromTo("header h1 .white",
    { opacity: 1 },
    { opacity: 1, duration: 0.8 }
  , "<")
  .fromTo("header nav div", 
    { color: "#ffffff" },
    { color: "#ffffff", duration: 0.8 }
  , "<")
  .fromTo(
    ".conMain-products3",
    { opacity: 0, scale: 0.9 },
    { opacity: 1, scale: 1, duration: 2, ease: "power3.out" }
  , "<")
  .fromTo(
    ".conMain-text5",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 0.2 },
    "<"
  )
  .fromTo(
    ".conMain-text6",
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 2, ease: "power3.out", delay: 0.4 },
    "<"
  );
};

// 4번 슬라이드 애니메이션 설정 함수
const activateFourthSlide = () => {
// 이전 애니메이션 강제 중단 및 초기화
gsap.killTweensOf([
  "header h1 .black",
  "header h1 .white",
  "header nav div",
  ".conQuality-bestQuality",
  ".conQuality-bestQuality img.afterimage",
  ".conQuality-text1 .detail.index0",
  ".conQuality-text1 .detail.index1"
]);

// 초기 상태 강제 설정
gsap.set(".header h1 .black", { opacity: 0 });
gsap.set(".header h1 .white", { opacity: 1 });
gsap.set(".header nav div", { color: "#ffffff" });
gsap.set(".conQuality-bestQuality", { opacity: 0.5, top: "50%", transform: "translate(-50%, -50%) scale(2)" });
gsap.set(".conQuality-bestQuality img.afterimage", { opacity: 1, transform: "scale(1)" });
gsap.set(".conQuality-text1 .detail.index0", { opacity: 0 });
gsap.set(".conQuality-text1 .detail.index1", { opacity: 0 });

// 애니메이션 실행
gsap.timeline()
  .fromTo("header h1 .black",
    { opacity: 0 },
    { opacity: 0, duration: 0.8 }
  )
  .fromTo("header h1 .white",
    { opacity: 1 },
    { opacity: 1, duration: 0.8 }
  , "<")
  .fromTo("header nav div", 
    { color: "#ffffff" },
    { color: "#ffffff", duration: 0.8 }
  , "<")
  .fromTo('.conQuality-bestQuality', 
    { opacity: 0.5, top: '50%', transform: 'translate(-50%, -50%) scale(2)' },
    { opacity: 1, top: '32%', transform: 'translate(-50%, -50%) scale(0.3)', duration: 0.3 }
  , "<")
  .fromTo('.conQuality-bestQuality img.afterimage', 
    { opacity: 1, transform: 'scale(1)' }, 
    { opacity: 0, transform: 'scale(1.3)' }
    , "<80%")
  .fromTo('.conQuality-text1 .detail.index0', 
    { opacity: 0 },
    { opacity: 1 }
  )
  .fromTo('.conQuality-text1 .detail.index1',
    { opacity: 0 },
    { opacity: 1 },
  );
};

// 5번 슬라이드 애니메이션 설정 함수
const activateFifthSlide = () => {
// 이전 애니메이션 강제 중단 및 초기화
gsap.killTweensOf([
  "header h1 .black",
  "header h1 .white",
  "header nav div",
]);

// 초기 상태 강제 설정
gsap.set(".header h1 .black", { opacity: 0 });
gsap.set(".header h1 .white", { opacity: 1 });
gsap.set(".header nav div", { color: "#ffffff" });

// 애니메이션 실행
gsap.timeline()
.fromTo("header h1 .black",
  { opacity: 0 },
  { opacity: 0, duration: 0.8 }
)
.fromTo("header h1 .white",
  { opacity: 1 },
  { opacity: 1, duration: 0.8 }
, "<")
.fromTo("header nav div", 
{ color: "#ffffff" },
{ color: "#ffffff", duration: 0.8 }
, "<")
};

// 6번 슬라이드 애니메이션 설정 함수
const activateSixthSlide = () => {
// 이전 애니메이션 강제 중단 및 초기화
gsap.killTweensOf([
  "header h1 .black",
  "header h1 .white",
  "header nav div",
  ".conQuality-text3 .detail .underline",
  ".conQuality-bg.blue",
  ".conQuality-text3",
  ".conQuality-text4",
  ".conQuality-text4 .detail span"
]);

// 초기 상태 강제 설정
gsap.set(".header h1 .black", { opacity: 0 });
gsap.set(".header h1 .white", { opacity: 1 });
gsap.set(".header nav div", { color: "#ffffff" });
gsap.set(".conQuality-bg.blue", { backgroundColor: "#720EFF" });
gsap.set(".conQuality-text3 .detail .underline", { width: 0 });
gsap.set(".conQuality-text3", { top: "50%", opacity: 1 });
gsap.set(".conQuality-text4", { opacity: 0, left: 0 });
gsap.set(".conQuality-text4 .detail span", { opacity: 0 });

// 애니메이션 실행
gsap.timeline()
  .fromTo("header h1 .black",
    { opacity: 0 },
    { opacity: 0, duration: 0.8 }
  )
  .fromTo("header h1 .white",
    { opacity: 1 },
    { opacity: 1, duration: 0.8 }
  , "<")
    .fromTo("header nav div", 
    { color: "#ffffff" },
    { color: "#ffffff", duration: 0.8 }
  , "<")
  .fromTo('.conQuality-bg.blue', 
      { backgroundColor: "#720EFF" },
      { backgroundColor: "#0E6EFF", delay: 0.2, duration: 0.4 }
  , "<")
  .fromTo('.conQuality-text3 .detail .underline',
    { width: 0 },
    { width: "100%", duration: 0.4 }
  )
  .fromTo('.conQuality-text3', 
    { top: "50%" },
    { top: "-20%", duration: 0.4 }
  , "<180%")
  .fromTo('.conQuality-text4', 
    { top: "100%", opacity: 0 },
    { top: "0", opacity: 1, duration: 0.4 }
  , "<")
  .fromTo('.conQuality-text3', 
    { opacity: 1 },
    { opacity: 0, duration: 0.4 }
  , "<30%")
  .fromTo('.conQuality-text4', 
    { left: 0 },
    { left: "-75%", duration: 0.4 }
  )
  .fromTo('.conQuality-text4 .detail span',
    { opacity: 0 },
    { stagger: { each: 0.06 }, opacity: 1, duration: 0.4 }
  );
};

// 7번 슬라이드 애니메이션 설정 함수
const activateSeventhSlide = () => {
// 이전 애니메이션 강제 중단 및 초기화
gsap.killTweensOf([
  "header h1 .black",
  "header h1 .white",
  "header nav div",
  ".conQuality-experts-text .blueCircle",
  ".conQuality-experts-text .detail"
]);

// 초기 상태 강제 설정
gsap.set(".header h1 .black", { opacity: 0 });
gsap.set(".header h1 .white", { opacity: 1 });
gsap.set(".header nav div", { color: "#ffffff" });
gsap.set(".conQuality-experts-text .blueCircle", { scale: 100, left: "50%" });
gsap.set(".conQuality-experts-text .detail", { x: -100, opacity: 0 });

// 애니메이션 실행
gsap.timeline()
.fromTo("header h1 .black",
  { opacity: 0 },
  { opacity: 0, duration: 0.8 }
)
.fromTo("header h1 .white",
  { opacity: 1 },
  { opacity: 1, duration: 0.8 }
, "<")
.fromTo("header nav div", 
  { color: "#ffffff" },
  { color: "#ffffff", duration: 0.8 }
, "<")
.fromTo('.conQuality-experts-text .blueCircle', 
    { scale: 100 },
    { scale: 1, duration: 0.8, ease: "power3.out" }
, "<")
.fromTo('.conQuality-experts-text .blueCircle', 
    { left: "50%" },
    { left: 0, duration: 0.8, ease: "power3.out" }
)
.fromTo('.conQuality-experts-text .detail', 
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, stagger: { each: 0.1 }, duration: 0.8, ease: "power3.out" }
, "<30%")
};

// 8번 슬라이드 애니메이션 설정 함수
const activateEighthSlide = () => {
// 이전 애니메이션 강제 중단 및 초기화
gsap.killTweensOf([
  "header h1 .black",
  "header h1 .white",
  "header nav div",
]);

// 초기 상태 강제 설정
gsap.set(".header h1 .black", { opacity: 0 });
gsap.set(".header h1 .white", { opacity: 1 });
gsap.set(".header nav div", { color: "#ffffff" });

// 애니메이션 실행
gsap.timeline()
.fromTo("header h1 .black",
  { opacity: 0 },
  { opacity: 0, duration: 0.8 }
)
.fromTo("header h1 .white",
  { opacity: 1 },
  { opacity: 1, duration: 0.8 }
, "<")
.fromTo("header nav div", 
{ color: "#ffffff" },
{ color: "#ffffff", duration: 0.8 }
, "<")
};

// 9번 슬라이드 애니메이션 설정 함수
const activateNinthSlide = () => {
// 이전 애니메이션 강제 중단 및 초기화
gsap.killTweensOf([
  "header h1 .black",
  "header h1 .white",
  "header nav div",
  ".conAboutUs-title",
  ".conAboutUs-descriptionBox > img",
  ".conAboutUs-descriptionBox .introduce",
  ".conAboutUs-descriptionBox .promise",
  ".conAboutUs-descriptionBox .phone",
  ".conAboutUs .topBtn",
  ".conAboutUs footer"
]);

// 초기 상태 강제 설정
gsap.set(".header h1 .black", { opacity: 0 });
gsap.set(".header h1 .white", { opacity: 1 });
gsap.set(".header nav div", { color: "#ffffff" });
gsap.set(".conAboutUs-title", { opacity: 0 });
gsap.set(".conAboutUs-descriptionBox > img", { opacity: 0 });
gsap.set(".conAboutUs-descriptionBox .introduce", { opacity: 0 });
gsap.set(".conAboutUs-descriptionBox .promise", { opacity: 0 });
gsap.set(".conAboutUs-descriptionBox .phone", { opacity: 0 });
gsap.set(".conAboutUs .topBtn", { opacity: 0 });
gsap.set(".conAboutUs footer", { opacity: 0 });

// 애니메이션 실행
gsap.timeline()
.fromTo("header h1 .black",
  { opacity: 0 },
  { opacity: 1, duration: 0.8 }
)
.fromTo("header h1 .white",
  { opacity: 1 },
  { opacity: 0, duration: 0.8 }
, "<")
.fromTo("header nav div", 
{ color: "#ffffff" },
{ color: "#0d0d0d", duration: 0.8 }
, "<")
.fromTo(".conAboutUs-title", 
{ opacity: 0 },
{ opacity: 1, duration: 0.8 }
, "<")
.fromTo(".conAboutUs-descriptionBox > img", 
{ opacity: 0 },
{ opacity: 1, duration: 0.8 })
.fromTo(".conAboutUs-descriptionBox .introduce", 
{ opacity: 0 },
{ opacity: 1, duration: 0.8 })
.fromTo(".conAboutUs-descriptionBox .promise", 
{ opacity: 0 },
{ opacity: 1, duration: 0.8 })
.fromTo(".conAboutUs-descriptionBox .phone", 
{ opacity: 0 },
{ opacity: 1, duration: 0.8 })
.fromTo(".conAboutUs .topBtn", 
{ opacity: 0 },
{ opacity: 1, duration: 0.8 })
.fromTo(".conAboutUs footer", 
{ opacity: 0 },
{ opacity: 1, duration: 0.8 }
, "<30%")
};







// 상태 초기화 함수
const resetToInitialState = () => {
  swiper.mousewheel.disable(); // Swiper 비활성화
  initialScrollCompleted = false;
  firstScrollCompleted = false;

  // 요소 상태 초기화
  gsap.set(".conMain-products", { scale: 0.4, opacity: 0.4, filter: "blur(1.8vw)" });
  gsap.set(".conMain-text.beMore", { right: "100%", opacity: 0 });
  gsap.set(".conMain-text.dynamic", { left: "100%", opacity: 0 });
  gsap.set(".conMain-ellipseBox", { opacity: 1, scale: 0 });

  // 초기 애니메이션 재실행
  initialAnimation();
};

















// 스크롤 이벤트 감지
let isAnimating = false; // 애니메이션 진행 중 여부를 나타내는 플래그
window.addEventListener(
  "wheel",
  (event) => {
    if (!initialScrollCompleted) {
      event.preventDefault(); // 초기 스크롤 차단
    } else if (!firstScrollCompleted && event.deltaY > 0 && !isAnimating) {
      // 아래로 스크롤하는 경우에만 동작, 애니메이션 중일 때는 무시
      event.preventDefault();
      isAnimating = true; // 애니메이션 시작
      firstScrollAnimation(); // 첫 번째 스크롤 애니메이션 실행

      // 애니메이션이 끝난 후 플래그 초기화
      setTimeout(() => {
        isAnimating = false; // 애니메이션 종료 후 다시 실행 가능
      }, 1000); // 애니메이션 실행 시간에 맞게 조정
    }
  },
  { passive: false }
);

// 초기 애니메이션 자동 실행
document.addEventListener("DOMContentLoaded", () => {
  initialAnimation();
});

















// Flavor swiper 설정
document.addEventListener("DOMContentLoaded", () => {
  // swiper 설정
  const swiper2 = new Swiper('.swiper.flavor', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
      mouseWheel: true,
  });


  // [conFlavor 의 이미지 슬라이드에 해당하는 맛 설명 나오는 함수]
  // 설명 업데이트 함수
  function updateDescription(flavor) {
    // 모든 설명 숨기기
    document.querySelectorAll('.conFlavor-description .list').forEach(list => {
      list.classList.remove('active');
    });
    // 현재 맛에 해당하는 설명 보이기
    const activeDescription = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"]`);
    if (activeDescription) {
      activeDescription.classList.add('active');
    }

    // [맛 설명 바 수치 값 적용]
    let sweetness = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"] .sweetness .value`);
    let sour = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"] .sour .value`);
    let neck = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"] .neck .value`);
    let weight = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"] .weight .value`);
    let cooling = document.querySelector(`.conFlavor-description .list[data-flavor="${flavor}"] .cooling .value`);
    // 맛 설명 바 의 data-value 값 가져오기
    let sweetnessValue = sweetness.dataset.value;
    let sourValue = sour.dataset.value;
    let neckValue = neck.dataset.value;
    let weightValue = weight.dataset.value;
    let coolingValue = cooling.dataset.value;
    // 맛 설명 바 수치 값 적용
    // 1.초기화
      sweetness.style.width = '0%'; 
      sour.style.width = '0%';
      neck.style.width = '0%';
      weight.style.width = '0%';
      cooling.style.width = '0%';
    // 2. 브라우저가 스타일 변경을 인지하도록 강제 트리거
    requestAnimationFrame(() => {
      sweetness.style.width = `${sweetnessValue * 10}%`;
      sour.style.width = `${sourValue * 10}%`;
      neck.style.width = `${neckValue * 10}%`;
      weight.style.width = `${weightValue * 10}%`;
      cooling.style.width = `${coolingValue * 10}%`;
    });
  }

  // 초기 설명 표시
  const initialSlide = swiper2.slides[swiper2.activeIndex];
  const initialFlavor = initialSlide.getAttribute('data-flavor');
  updateDescription(initialFlavor);

  // 슬라이드 변경 시 설명 업데이트
  swiper2.on('slideChange', function () {
    const activeSlide = swiper2.slides[swiper2.activeIndex];
    const activeFlavor = activeSlide.getAttribute('data-flavor');
    updateDescription(activeFlavor);
  });


  // [swiper 각 슬라이드 클릭 시 active 상태로 변경]
  let swiper2Slides = document.querySelectorAll('.conFlavor .conFlavor-imgs .swiper-slide');
  swiper2Slides.forEach((slide, index) => {
      slide.addEventListener("click", (event) => {
          // 클릭된 슬라이드의 인덱스 가져오기
          const slideIndex = index;

          // 해당 슬라이드로 이동
          swiper2.slideToLoop(slideIndex);

          // 모든 슬라이드에서 active 클래스 제거
          swiper2Slides.forEach(slide => {
              slide.classList.remove("swiper-slide-active");
          });
          // 클릭한 슬라이드에 active 클래스 추가
          slide.classList.add("swiper-slide-active");

          // 해당하는 맛 설명으로 변화
          const clickedSlide = event.currentTarget;
          const clickedFlavor = clickedSlide.getAttribute('data-flavor');
          updateDescription(clickedFlavor);
      });
  });
});





// 메뉴 클릭, top 버튼 클릭 시 페이지 이동
document.addEventListener("DOMContentLoaded", () => {
  // 메뉴 요소 가져오기
  const menuMain = document.querySelector(".menuMain"); 
  const menuFeature = document.querySelector(".menuFeature");
  const menuQuality = document.querySelector(".menuQuality");
  const menuFlavor = document.querySelector(".menuFlavor");
  const menuAboutUs = document.querySelector(".menuAboutUs");
  const topBtn = document.querySelector(".conAboutUs .topBtn");





  const navigateToSlide = (index) => {
    // 특정 슬라이드로 이동
    swiper.slideTo(index, 1000, false);
  
    // 슬라이드에 따라 header 색상 변경
    const activeSection = document.querySelector(`.swiper-slide:nth-child(${index + 1}) section`);
  
    if (activeSection.classList.contains('section1') || activeSection.classList.contains('section9')) {
      // Section 1과 9에서는 header를 밝은 색으로 설정
      gsap.set("header h1 .black", { opacity: 0 });
      gsap.set("header h1 .white", { opacity: 1 });
      gsap.set("header nav div", { color: "#ffffff" });
    } else {
      // 다른 섹션에서는 header를 어두운 색으로 설정
      gsap.set("header h1 .black", { opacity: 1 });
      gsap.set("header h1 .white", { opacity: 0 });
      gsap.set("header nav div", { color: "#0d0d0d" });
    }
  
    // 슬라이드 이동과 동시에 애니메이션 실행
    if (activeSection.classList.contains('section1')) {
      firstScrollAnimation(); // 첫 번째 스크롤 애니메이션 호출
    } else if (activeSection.classList.contains('section2')) {
      activateSecondSlide();
    } else if (activeSection.classList.contains('section3')) {
      activateThirdSlide();
    } else if (activeSection.classList.contains('section4')) {
      activateFourthSlide();
    } else if (activeSection.classList.contains('section5')) {
      activateFifthSlide();
    } else if (activeSection.classList.contains('section6')) {
      activateSixthSlide();
    } else if (activeSection.classList.contains('section7')) {
      activateSeventhSlide();
    } else if (activeSection.classList.contains('section8')) {
      activateEighthSlide();
    } else if (activeSection.classList.contains('section9')) {
      activateNinthSlide();
    }
  
    // transitionEnd 이벤트가 발생하면 마우스 휠 활성화
    swiper.once("transitionEnd", () => {
      swiper.mousewheel.enable(); // 마우스 휠 활성화
    });
  };
  

  // 1. menuMain 클릭 시
  menuMain.addEventListener("click", () => {
    navigateToSlide(0)
  });

  // 2. menuFeature 클릭 시
  menuFeature.addEventListener("click", () => {
    navigateToSlide(1)
  });

  // 3. menuQuality 클릭 시
  menuQuality.addEventListener("click", () => {
    navigateToSlide(3)
  });

  // 4. menuFlavor 클릭 시
  menuFlavor.addEventListener("click", () => {
    navigateToSlide(7)
  });

  // 5. menuAboutUs 클릭 시
  menuAboutUs.addEventListener("click", () => {
    navigateToSlide(8);
  });

  // 6. top 버튼 클릭 시
  topBtn.addEventListener("click", () => {
    navigateToSlide(0)
  });

  







});