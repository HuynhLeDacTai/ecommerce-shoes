const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "red",
          img: "./img/air-red.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
const wrapper = $(".sliderWrapper")
const menuItems = $$(".menuItem")
const currentProductImg = $(".productImg")
const currentProductTitle = $(".productTitle")
const currentProductPrice = $(".productPrice")
const currentProductColors = $$(".color")
const currentProductSizes = $$(".size")
const productButton = $(".productButton")
const closeModalButton = $(".close")
const paymentModal = $(".payment")

let choosenProduct = products[0];

menuItems.forEach((item,index) => {
    item.addEventListener("click", ()=>{
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`

        //change the current product
        choosenProduct = products[index]

        //change texts of current product
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        currentProductColors.forEach((color, index) =>{
            color.style.backgroundColor = choosenProduct.colors[index].code
        })
    })
});


currentProductColors.forEach((color, index) =>{
    color.addEventListener("click", () =>{
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size,index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size,index) => {
        size.classList.remove("sizeActive")
    })
    size.classList.add("sizeActive")
  })
})

productButton.addEventListener("click", () =>{
  paymentModal.style.display = "flex" 
})

closeModalButton.addEventListener("click", () =>{
  paymentModal.style.display = "none" 

})



