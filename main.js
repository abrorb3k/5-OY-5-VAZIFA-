// const form=document.getElementById('form')
// const name=document.getElementById('name')
// const lastname=document.getElementById('lastname')
// const date=document.getElementById('date')
// const number=document.getElementById('number')
// const email=document.getElementById('email')
// const password=document.getElementById('password')
// const checkpassword=document.getElementById('checkpassword')
// const adress=document.getElementById('adress')
// const postalcode=document.getElementById('postalcode')
// const gender = document.getElementById("gender");
// const check = document.getElementById("check");

// function showError(inputId, errorMessage) {
//   const errorSpan = document.getElementById(inputId + "Error");
//   errorSpan.textContent = errorMessage;
//   errorSpan.style.display = "inline";
// }

// function hideError(inputId) {
//   const errorSpan = document.getElementById(inputId + "Error");
//   errorSpan.style.display = "none";
// }
// function validateFirstName() {
//   const firstName = name.value;
//   const regex = /^[A-Za-z]{2,}$/;
//   if (!firstName || !regex.test(firstName)) {
//     showError(
//       "name",
//       "Ismni to‘g‘ri kiriting. Kamida 2 ta harf bo‘lishi kerak va faqat lotin harflaridan foydalaning."
//     );
//     return false;
//   }
//   hideError("name");
//   return true;
// }

// function validateLastName() {
//   const lastName = lastname.value;
//   const regex = /^[A-Za-z]{2,}$/;
//   if (!lastName || !regex.test(lastName)) {
//     showError("lastname", "Familiyani to‘g‘ri kiriting.");
//     return false;
//   }
//   hideError("lastname");
//   return true;
// }

// function validateDob() {
//   const dob = date.value;
//   const age = new Date().getFullYear() - new Date(dob).getFullYear();
//   if (!dob || age < 18) {
//     showError("date", "Yoshingiz 18 dan katta bo‘lishi kerak.");
//     return false;
//   }
//   hideError("date");
//   return true;
// }

// function validatePhone() {
//   const phone = number.value;
//   const regex = /^\+998\d{9,15}$/;
//   if (!phone || !regex.test(phone)) {
//     showError(
//       "number",
//       "Telefon raqamini to‘g‘ri kiriting, masalan: +998901234567."
//     );
//     return false;
//   }
//   hideError("number");
//   return true;
// }

// function validateEmail() {
//   const emailValue = email.value;
//   const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   if (!emailValue || !regex.test(emailValue)) {
//     showError("email", "Emailni to‘g‘ri kiriting.");
//     return false;
//   }
//   hideError("email");
//   return true;
// }

// function validatePassword() {
//   const passwordValue = password.value;
//   const minLength = 8;
//   const hasUpperCase = /[A-Z]/.test(passwordValue);
//   const hasLowerCase = /[a-z]/.test(passwordValue);
//   const hasDigit = /\d/.test(passwordValue);

//   if (
//     passwordValue.length < minLength ||
//     !hasUpperCase ||
//     !hasLowerCase ||
//     !hasDigit
//   ) {
//     showError(
//       "password",
//       "Parol kamida 8 ta belgidan iborat bo‘lishi va katta harf, kichik harf, raqamni o‘z ichiga olishi kerak."
//     );
//     return false;
//   }
//   hideError("password");
//   return true;
// }

// function validateConfirmPassword() {
//   const passwordValue = password.value;
//   const confirmPasswordValue = checkpassword.value;
//   if (passwordValue !== confirmPasswordValue) {
//     showError("checkpassword", "Parol va tasdiqlash bir xil bo‘lishi kerak.");
//     return false;
//   }
//   hideError("checkpassword");
//   return true;
// }

// function validateAddress() {
//   const address = adress.value;
//   if (!address || address.length < 10) {
//     showError(
//       "addres",
//       "Manzilni to‘g‘ri kiriting. Kamida 10 ta belgi bo‘lishi kerak."
//     );
//     return false;
//   }
//   hideError("addres");
//   return true;
// }

// function validatePostalCode() {
//   const postalCode = postalcode.value;
//   const regex = /^\d{5,6}$/;
//   if (!postalCode || !regex.test(postalCode)) {
//     showError(
//       "postalcode",
//       "Pochta indeksini faqat raqamlardan iborat qilib kiriting."
//     );
//     return false;
//   }
//   hideError("postalcode");
//   return true;
// }

// function validateGender() {
//   const genderValue = gender.value;
//   if (genderValue === "Gender") {
//     showError("gender", "Jinsingizni tanlang.");
//     return false;
//   }
//   hideError("gender");
//   return true;
// }

// function validateInterests() {
//   const interests = document.getElementById("interests").value;
//   if (!interests || interests.length < 5) {
//     showError(
//       "interests",
//       "Qiziqishlaringizni kamida 5 ta belgi bilan yozing."
//     );
//     return false;
//   }
//   hideError("interests");
//   return true;
// }

// function validateTerms() {
//   const terms = check.checked;
//   if (!terms) {
//     showError("check", "Qoidalarga rozilik bildiring.");
//     return false;
//   }
//   hideError("check");
//   return true;
// }

// function enableSubmitButton() {
//   const isFormValid =
//     validateFirstName() &&
//     validateLastName() &&
//     validateDob() &&
//     validatePhone() &&
//     validateEmail() &&
//     validatePassword() &&
//     validateConfirmPassword() &&
//     validateAddress() &&
//     validatePostalCode() &&
//     validateGender() &&
//     validateInterests() &&
//     validateTerms();

//   submitButton.disabled = !isFormValid;
// }
// name.addEventListener("input", enableSubmitButton);
// lastname.addEventListener("input", enableSubmitButton);
// date.addEventListener("input", enableSubmitButton);
// number.addEventListener("input", enableSubmitButton);
// email.addEventListener("input", enableSubmitButton);
// password.addEventListener("input", enableSubmitButton);
// checkpassword.addEventListener("input", enableSubmitButton);
// adress.addEventListener("input", enableSubmitButton);
// postalcode.addEventListener("input", enableSubmitButton);
// gender.addEventListener("change", enableSubmitButton);
// document.getElementById("interests").addEventListener("input", enableSubmitButton);
// check.addEventListener("change", enableSubmitButton);


//=============================================Kichikmashqlar================================================

//==================================================================================
//1-Foydalanuvchi Ismini Ko‘rsatish
//Vazifa: Formada bir matnli input va bir tugma bo‘lsin. Foydalanuvchi inputga o‘z ismini yozib, tugmani bossa, ismi sahifada alohida div element ichida ko‘rsatiladi.
// Ishlatiladigan mavzular: createElement, append, value.
const btnnn=document.getElementById('btn')
const name1=document.getElementById('name')
const name2=document.getElementById('name2')    
btnnn.addEventListener("click", function () {
    const newdiv=name1.value.trim();
    if(newdiv!==''){
    name2.textContent=newdiv
    }
});

//=================================================================================
//2-Shaxsiy Profilni O‘zgartirish
// Vazifa: Sahifada ism va familiya yozilgan matnli div bo‘lsin. Yonida "Tahrirlash" tugmasi bo‘lsin. Tugma bosilganda, matn inputga o‘zgaradi va foydalanuvchi yangi qiymat kiritishi mumkin. "Saqlash" tugmasi bosilgandan so‘ng, matn inputdan o‘qilib, yana div ko‘rinishida aks etadi.
// Ishlatiladigan mavzular: replaceChild, value.
const block=document.querySelector('.full-name');
const edit = document.querySelector(".edit");
const savee = document.querySelector(".save");
edit &&  edit.addEventListener('click',function(){
  block.setAttribute('contenteditable',true)
  block.focus();
  edit.style.display='none'
  edit.style.display = "block";
})
savee && savee.addEventListener('click',function(){
  block.removeAttribute('contenteditable') 
  edit.style.display='block'
  edit.style.display = "none";
})



//=================================================================================
//3-Parolni Tasdiqlash
// Vazifa: Formada ikki ta parol kiritish maydoni (input) bo‘lsin: "Parol" va "Parolni tasdiqlash". Tugma bosilganda, agar ikkala parol bir-biriga teng bo‘lsa, foydalanuvchiga "Parol mos" degan xabar chiqsin, teng bo‘lmasa, "Parol mos emas" xabari chiqsin.
// Ishlatiladigan mavzular: value, alert.
    const password = document.getElementById("password");
    const checkpassword = document.getElementById("checkpassword");
    const btn = document.getElementById("btn");
   btn &&
     btn.addEventListener("click", function () {
     const password3=password.value;
     const checkpassword3=checkpassword.value
       if (password3 === checkpassword3) {
       return  alert("Parol mos");
       } else {
         alert("Parol mos emas");
       }
     });




//=================================================================================
//4-Rang Tanlash
// Vazifa: Formada rang kiritish maydoni (color input) bo‘lsin. Foydalanuvchi rangni tanlagandan so‘ng, sahifada yangi div yaratiladi va tanlangan rang bilan bo‘yaladi.
// Ishlatiladigan mavzular: style.backgroundColor, createElement.
 document.getElementById("colorPicker").addEventListener("input", function (event) {
     const selectedColor = event.target.value;
     const newDiv = document.createElement("div");
     newDiv.style.width = "100px";
     newDiv.style.height = "100px";
     newDiv.style.backgroundColor = selectedColor;
     newDiv.style.marginTop = "10px";
     document.body.appendChild(newDiv);
   });


//=================================================================================
//5-Shaharlar Ro‘yxati
// Vazifa: Sahifada bir matnli input va "Qo‘shish" tugmasi bo‘lsin. Foydalanuvchi inputga biror shahar nomini yozib, tugmani bossa, shahar nomi ro‘yxatga (ul ichida li) qo‘shiladi.
// Ishlatiladigan mavzular: createElement, append.
  document.getElementById("addCityButton").addEventListener("click", function () {
      const cityName = document.getElementById("cityInput").value;
      if (cityName.trim() !== "") {
        const newCity = document.createElement("li");
        newCity.textContent = cityName;
        document.getElementById("cityList").appendChild(newCity);
        document.getElementById("cityInput").value = "";
      } else {
        alert("Iltimos, shahar nomini kiriting!");
      }
    });


//=================================================================================
//6- Xabar Yozish
// Vazifa: Formada matnli input va "Xabar yuborish" tugmasi bo‘lsin. Tugma bosilgandan so‘ng, inputdagi matn sahifada yangi blokda ko‘rsatiladi va input maydoni tozalanadi.
// Ishlatiladigan mavzular: value, textContent.
 document.getElementById("sendMessageButton").addEventListener("click", function () {
     const message = document.getElementById("messageInput").value;
     if (message.trim() !== "") {
       const newMessageBlock = document.createElement("div");
       newMessageBlock.textContent = message;
       document
         .getElementById("messagesContainer")
         .appendChild(newMessageBlock);
       document.getElementById("messageInput").value = "";
     } else {
       alert("Iltimos, xabarni kiriting!");
     }
   });


//=================================================================================
//7-Yosh Tekshirish
// Vazifa: Formada yosh kiritish uchun input bo‘lsin. "Tekshirish" tugmasi bosilganda, foydalanuvchining yoshi 18 yoki undan yuqori bo‘lsa, sahifada "Kirishga ruxsat berildi", aks holda "Kirishga ruxsat berilmaydi" degan matn paydo bo‘lsin.
// Ishlatiladigan mavzular: value, if.
const age=document.getElementById('age')
const btnage = document.getElementById("btn");
const res=document.getElementById('res')

btnage && btnage.addEventListener('click',function(){
  if(age.value>=18){
   res.textContent='Kirishga ruhsat berildi'
   res.style.color='green'
  }else{
    res.textContent = "Kirishga ruhsat berilmaydi";
    res.style.color='red'
  }
})

//=================================================================================
//8-Input Orqali Rang O‘zgartirish
// Vazifa: Formada matnli input bo‘lsin. Foydalanuvchi inputga "red", "green", yoki "blue" kabi rang nomini yozsa, sahifaning fon rangi o‘zgaradi.
// Ishlatiladigan mavzular: style.backgroundColor, value.
const txtt=document.getElementById('colorr');
txtt && txtt.addEventListener('input',function(){
  const txt=txtt.value.toLowerCase();
  if(txt==='red' || txt==='green' || txt==='blue' ){
    document.body.style.backgroundColor=txt
  }
})

//=================================================================================
//9-Foydalanuvchi Qo‘shish
// Vazifa: Formada ism va familiya kiritish uchun ikkita input bo‘lsin. "Qo‘shish" tugmasi bosilganda, kiritilgan ism va familiya ro‘yxatga qo‘shiladi.
// Ishlatiladigan mavzular: value, createElement, append.



//=================================================================================
//10-Harflarni Hisoblash
// Vazifa: Formada bir matnli input bo‘lsin. Foydalanuvchi inputga biror so‘z kiritganda, uning uzunligi (harflar soni) sahifada ko‘rsatiladi.
// Ishlatiladigan mavzular: value, textContent.
const desc=document.querySelector('#description')
const save=document.querySelector('#save')
const count = document.querySelector("#count");
desc && desc.addEventListener('input',function(){
  if(this.value){
    count.innerHTML=this.value.length;
    if(this.value.length>=30){
      this.value=this.value.substr(0,30)
    }
  }else{
    count.innerHTML=0
  }
})

//=================================================================================
//11-Davlatlarni Saralash
// Vazifa: Sahifada davlatlar ro‘yxati (ul) bo‘lsin. Formada "Saralash" tugmasi bo‘lsin. Tugma bosilganda, davlatlar ro‘yxati alifbo bo‘yicha qayta tartiblanadi.
// Ishlatiladigan mavzular: childNodes, sort, appendChild.
  function sortCountries() {
    let ul = document.getElementById("List");
    let items = Array.from(ul.children); // ul ichidagi <li>larni olish
    items.sort((a, b) => a.textContent.localeCompare(b.textContent));
    items.forEach((item) => ul.appendChild(item));
  }


//=================================================================================
//12-Tugmani Faollashtirish
// Vazifa: Formada bir input va "Tasdiqlash" tugmasi bo‘lsin. Dastlab tugma faol bo‘lmasin (disabled). Inputga biror matn kiritilganda, tugma faollashsin.
// Ishlatiladigan mavzular: disabled, input hodisasi.
const text=document.getElementById('text')
const btnn = document.getElementById("btn");
text && text.addEventListener('input',function(){
  if(text.value==''){
    btnn.disabled=true
  }else{
    btnn.disabled=false
  }
})


//=================================================================================
//13-Forma Tozalash
// Vazifa: Formada bir nechta input bo‘lsin (ism, familiya, email). "Tozalash" tugmasi bosilganda, barcha inputlar bo‘shatiladi.
// Ishlatiladigan mavzular: value.
const name = document.getElementById("name");
const fami=document.getElementById('fam')
const email = document.getElementById("email");
const clear = document.getElementById("clear");
clear && clear.addEventListener('click',function(){
  fami.value=''
  name.value=''
  email.value = "";
})


//=================================================================================
//14- Foydalanuvchi Ro‘yxatini Filtrlash
// Vazifa: Foydalanuvchi ro‘yxati (ul) va qidiruv inputi bo‘lsin. Foydalanuvchi qidiruv maydoniga biror ism yozganda, faqat shu ismga mos keladigan foydalanuvchi ko‘rsatiladi, qolganlari yashiriladi.
// Ishlatiladigan mavzular: textContent, style.display.
const search = document.querySelector("#search");
const list = document.querySelectorAll("#list li");
search && search.addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();
    if (searchValue.length >= 2) {
      list.forEach(function (item) {
        if (!item.textContent.toLowerCase().includes(searchValue)) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
      });
    } else {
      list.forEach(function (item) {
        item.style.display = "block";
      });
    }
  });

//=================================================================================
//15-Matnni Tahrirlash
// Vazifa: Sahifada matn ko‘rinishida bir div bo‘lsin. "Tahrirlash" tugmasi bosilganda, matn inputga aylansin va foydalanuvchi matnni tahrir qilishi mumkin. "Saqlash" tugmasi bosilganda, inputdagi matn yana div ko‘rinishida aks etsin.
// Ishlatiladigan mavzular: replaceChild, value.