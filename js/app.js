/*function hamburger(){
    const burger = document.querySelector(".clicks");
    burger.classList.toggle('hamburger_active');
    const nav = document.querySelector(".nav__ul");
    nav.classList.toggle("nav__ul-active");
   
}*/
let nb = ["&nbsp;"];
const navArray = ["Home", "About", "Blog", "Pages", "Contact"];
const language = ["English", "Sign in", "Register"];
const img2 = [
  `img/icons/Iconarrow.svg`,
  `img/Pictureboy.svg`,
  `img/icons/X Icon.png`,
  `img/icons/show.svg`,
  `img/Wrapperg.svg`,
  `img/Shapeapple.svg`,
  `img/Shapeface.svg`,
];
const errorImg = [
  `img/icons/Xfalse.svg`,
  `img/icons/not-show.svg`,
  `img/icons/show.svg`,
];
function main() {
  const mainConteiner = document.createElement("div")
  mainConteiner.classList.add("mainConteiner");
  document.body.prepend(mainConteiner);

  const header = document.createElement("header");
  mainConteiner.prepend(header);
  header.classList.add("header");
  header.classList.add("container");
  const burger = document.createElement("div");
  burger.classList.add("burger");
  header.prepend(burger);
  const clicks = document.createElement("div");
  clicks.classList.add("clicks");
  burger.prepend(clicks);
  clicks.addEventListener("click", function () {
    clicks.classList.toggle("hamburger_active");
    ul.classList.toggle("nav__ul-active");
  });

  for (let i = 1; i < 4; i++) {
    const span = document.createElement("span");
    span.classList.add("span" + i);
    clicks.append(span);
  }
  const headerNav = document.createElement("div");
  burger.after(headerNav);
  headerNav.classList.add("header__nav");
  //switch
  const switchButton = document.createElement("div");
  headerNav.prepend(switchButton)
  switchButton.classList.add("switch")
  const inputButton = document.createElement("input");
  switchButton.prepend(inputButton)
  inputButton.setAttribute("type", "checkbox");
  inputButton.setAttribute("id", "toggle_checkbox");
  const labelInput = document.createElement("label");
  labelInput.setAttribute("for", "toggle_checkbox");
  inputButton.after(labelInput)
  const divStar = document.createElement("div")
  divStar.setAttribute("id","star");
  labelInput.prepend(divStar);
  for(let k = 1; k<3; k++){
    const star = document.createElement("div");
    divStar.append(star)
    star.classList.add("star")
    star.setAttribute("id",`star-${k}`);
  }
  
  const moon = document.createElement("div")
  moon.setAttribute("id","moon");
  star.after(moon)
  var changeColor = 0;
  inputButton.addEventListener("click",function(){
    changeColor++
    if(changeColor % 2 == 0){
      document.body.style.backgroundColor="white"
      main.classList.remove("main2")
      document.body.style.color="#000";
      
    }else{
      document.body.style.backgroundColor="#14162E";
      main.classList.add("main2")
      document.body.style.color="#FFF";
      buttonBlue.classList.add("nightText")
      
    }
  })
  //end  switch
  var nav = document.createElement("nav");
  nav.classList.add("nav");
  headerNav.prepend(nav);
  const ul = document.createElement("ul");
  ul.classList.add("nav__ul");
  nav.prepend(ul);
  navArray.forEach(function (elemment) {
    const li = document.createElement("li");
    ul.append(li);
    li.classList.add("nav__li");
    const a = document.createElementNS("a", "a");
    li.append(a);
    a.setAttribute("href", "#");
    a.textContent = elemment;
  });
  const lang = document.createElement("div");
  lang.classList.add("header__language");
  nav.after(lang);
  const eng = document.createElement("div");
  eng.classList.add("header__language-ENG");
  eng.innerHTML = language[0] + nb[0];
  lang.prepend(eng);
  const imgArrow = document.createElement("img");
  imgArrow.src = img2[0];
  eng.append(imgArrow);
  const singIn = document.createElement("div");
  lang.append(singIn);
  singIn.classList.add("header__language-ENG", "ENG2");
  singIn.innerHTML = language[1];
  const select = document.createElement("select");
  lang.append(select);
  for (let c = 1; c < language.length; c++) {
    const option = document.createElement("option");
    select.append(option);
    option.innerHTML = language[c];
  }
  const button = document.createElement("button");
  button.classList.add("header__language-btn");
  button.innerHTML = language[2];
  lang.append(button);
  const button2 = document.createElement("div");
  button2.innerHTML = language[2];
  button2.classList.add("header__language-ENG2");
  lang.append(button2);
  const main = document.createElement("main");
  header.after(main);
  main.classList.add("main", "container");
  const mainLeft = document.createElement("div");
  mainLeft.classList.add("main__left");
  main.prepend(mainLeft);
  const mainLeftTitle = document.createElement("div");
  mainLeftTitle.classList.add("main__left-title");
  mainLeft.prepend(mainLeftTitle);
  mainLeftTitle.innerHTML = `Sign In to <br>
    Recharge Direct`;
  const mainLeftText = document.createElement("div");
  mainLeftText.classList.add("main__left-text");
  mainLeftTitle.after(mainLeftText);
  mainLeftText.innerHTML = `if you don’t an account <br>
    you can <a href="#">Register here!</a>`;
  const mainImg = document.createElement("div");
  mainImg.classList.add("main-img");
  main.append(mainImg);
  const mainImgs = document.createElement("img");
  mainImg.append(mainImgs);
  mainImgs.src = img2[1];
  const mainRight = document.createElement("div");
  mainRight.classList.add("main__right");
  mainImg.after(mainRight);
  const mainForm = document.createElement("div");
  mainForm.classList.add("main__form");
  mainRight.prepend(mainForm);
  const form = document.createElement("form");
  form.setAttribute("onsubmit", "return false;");
  mainForm.prepend(form);
  const mainFormEmail = document.createElement("div");
  mainFormEmail.classList.add("main__form__email");
  form.prepend(mainFormEmail);
  const input = document.createElement("INPUT");
  mainFormEmail.prepend(input);
  input.setAttribute("type", "email");
  input.setAttribute("id", "email");
  input.setAttribute("placeholder", "Enter Email");
  const xImage = document.createElement("div");
  xImage.classList.add("form-x");
  mainFormEmail.append(xImage);
  const imgX = document.createElement("img");
  xImage.append(imgX);
  imgX.src = img2[2];
  const mainFormEmail2 = document.createElement("div");
  mainFormEmail.after(mainFormEmail2);
  mainFormEmail2.classList.add("main__form__email");
  const input2 = document.createElement("INPUT");
  mainFormEmail2.prepend(input2);
  input2.setAttribute("type", "password");
  input2.setAttribute("id", "pwd");
  input2.setAttribute("placeholder", "password");
  const xImage2 = document.createElement("div");
  xImage2.classList.add("form-x", "show");
  mainFormEmail2.append(xImage2);
  const imgX2 = document.createElement("img");
  xImage2.append(imgX2);
  imgX2.src = errorImg[1];
  const recover = document.createElement("div");
  mainFormEmail2.after(recover);
  recover.classList.add("main__form__recover");
  recover.textContent = "Recover Password ?";
  var buttonBlue = document.createElement("button");
  recover.after(buttonBlue);
  recover.setAttribute("type", "button");
  buttonBlue.classList.add("main__form-btn");
  buttonBlue.textContent = "Sign In";
  const mainSoc = document.createElement("div");
  mainForm.after(mainSoc);
  mainSoc.classList.add("main__soc");
  const mainSocImg = document.createElement("div");
  mainSocImg.classList.add("main__soc-img");
  mainSoc.append(mainSocImg);
  const continiu = document.createElement("div");
  continiu.classList.add("main__form__recover2");
  mainSocImg.after(continiu);
  continiu.textContent = "Or continue with";
  const mainSocImg2 = document.createElement("div");
  mainSocImg2.classList.add("main__soc-img");
  continiu.after(mainSocImg2);
  const mainSocIcons = document.createElement("div");
  mainSoc.after(mainSocIcons);
  mainSocIcons.classList.add("main__soc-icons");
  for (let p = 4; p < img2.length; p++) {
    const mainSocFb = document.createElement("div");
    mainSocFb.classList.add("main__soc-fb");
    mainSocIcons.prepend(mainSocFb);
    const mainSocImgs = document.createElement("div");
    mainSocFb.append(mainSocImgs);
    mainSocImgs.classList.add("main__soc-imgs");
    const fbIcons = document.createElement("img");
    mainSocImgs.appendChild(fbIcons);
    fbIcons.src = img2[p];
  }
  const validEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validPsw = /[0-9][a-z]/;
  buttonBlue.addEventListener("click", function () {
    const validationMail = input.value;
    const validationPasword = input2.value;
    if (!validationMail.match(validEmail)) {
      mainFormEmail.classList.add("error");
      imgX.src = errorImg[0];
    } else {
      imgX.src = img2[2];
      mainFormEmail.classList.remove("error");
    }
    if (validationPasword.length===0) {
      mainFormEmail2.classList.add("error");

      // imgX.src=errorImg[0]
    } else {
      mainFormEmail2.classList.remove("error");
    }
  });
  const show = document.querySelector(".show");
  var ids = 0;
  show.addEventListener("click", function () {
    if (input2.type === "password") {
      input2.setAttribute("type", "text");
      imgX2.src = errorImg[2];
      
    } else {
      input2.setAttribute("type", "password");
      imgX2.src = errorImg[1];
    }
  });
}

main();
