const humbergerMenu = document.getElementById("menu");
const secondNav = document.getElementById("secondNav");
const closeBtn = document.getElementById("close")

humbergerMenu.addEventListener("click", () => {
    secondNav.classList.remove("hidden");
})

closeBtn.addEventListener("click", () => {
    secondNav.classList.add("hidden")
})

/* -----------------------------Start----------------------------- */

// Hover Image 

/* const product = document.getElementById("product");
const btns = document.getElementById("showBtns");

product.addEventListener("mouseover", () => {
    btns.classList.add("flex")
    btns.classList.remove("hidden")
})

product.addEventListener("mouseleave", () => {
    btns.classList.add("hidden")
    btns.classList.remove("flex");
}) */

/* const products = document.querySelectorAll(".popular-product");
const btn1 = document.getElementById("showBtns1");
const btn2 = document.getElementById("showBtns2");
const btn3 = document.getElementById("showBtns3");
const btn4 = document.getElementById("showBtns4");
const btn5 = document.getElementById("showBtns5");
const btn6 = document.getElementById("showBtns6");
const btn7 = document.getElementById("showBtns7");
const btn8 = document.getElementById("showBtns8");
const btn9 = document.getElementById("showBtns9");
const btn10 = document.getElementById("showBtns10");

const showBtn = (p) => {
    p.classList.add("flex");
    p.classList.remove("hidden");
}

const hideBtn = (p) => {
    p.classList.remove("flex");
    p.classList.add("hidden")
}

products.forEach((product) => {
    console.log(product);
    product.addEventListener("mouseover", () => {
        if (product.id === "product1") {
          showBtn(btn1);
        } else if (product.id === "product2") {
          showBtn(btn2);
        } else if (product.id === "product3") {
          showBtn(btn3);
        } else if (product.id === "product4") {
          showBtn(btn4);
        } else if (product.id === "product5") {
          showBtn(btn5);
        } else if (product.id === "product6") {
          showBtn(btn6);
        } else if (product.id === "product7") {
          showBtn(btn7);
        } else if (product.id === "product8") {
          showBtn(btn8);
        } else if (product.id === "product9") {
          showBtn(btn9);
        } else if (product.id === "product10") {
          showBtn(btn10);
        }
    })

    product.addEventListener("mouseleave", () => {
      if (product.id === "product1") {
        hideBtn(btn1);
      } else if (product.id === "product2") {
        hideBtn(btn2);
      } else if (product.id === "product3") {
        hideBtn(btn3);
      } else if (product.id === "product4") {
        hideBtn(btn4);
      } else if (product.id === "product5") {
        hideBtn(btn5);
      } else if (product.id === "product6") {
        hideBtn(btn6);
      } else if (product.id === "product7") {
        hideBtn(btn7);
      } else if (product.id === "product8") {
        hideBtn(btn8);
      } else if (product.id === "product9") {
        hideBtn(btn9);
      } else if (product.id === "product10") {
        hideBtn(btn10);
      }
    });

})
 */

 function handleMouseOver(productId) {
    const buttonsContainer = document.getElementById(`showBtns${productId}`);
     if (buttonsContainer) {
      buttonsContainer.classList.add("flex")  
      buttonsContainer.classList.remove('hidden');
    }
  }

  // Function to handle mouseleave event
  function handleMouseLeave(productId) {
    const buttonsContainer = document.getElementById(`showBtns${productId}`);
      if (buttonsContainer) {
        buttonsContainer.classList.remove("flex"); 
      buttonsContainer.classList.add('hidden');
    }
  }

  // Add event listeners to each product
  const productIds = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10' , '11' , '12' , '13'];

  productIds.forEach(productId => {
    const product = document.getElementById(`product${productId}`);
    if (product) {
      product.addEventListener('mouseover', () => handleMouseOver(productId));
      product.addEventListener('mouseleave', () => handleMouseLeave(productId));
    }
  });

  /* -----------------------------End----------------------------- */
