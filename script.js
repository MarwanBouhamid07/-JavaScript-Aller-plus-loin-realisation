fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    let moyenPrix = 0;
    data.products.forEach(product => {
        moyenPrix += product.price;
    });
    moyenPrix = moyenPrix / data.products.length;
    let htmlMoyenPrix = document.getElementById("moyenPrix");
    htmlMoyenPrix.innerText = `Prix moyen: $${moyenPrix.toFixed(2)}`;


    let totalProducts = data.products.length;
    let productCountElement = document.getElementById("productCount");
    productCountElement.innerText = totalProducts;






    
    let productshtml= document.getElementById("products")

    data.products.forEach(product => {



  let searchInput = document.getElementById("searchInput")
  let searchBtn = document.getElementById("searchBtn")
  searchBtn.addEventListener("click", () => {
    let query = searchInput.value.toLowerCase()
    let cards = document.querySelectorAll(".card")
    cards.forEach(card => {
      let title = card.querySelector("h3").innerText.toLowerCase()
      if(title.includes(query)){
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })
  })









        let div = document.createElement("div")
        div.className = "card"

        div.innerHTML = `
        <div class="img-box"><img src="${product.images[0]}" alt="${product.title}"></div>
        <h3>${product.title}</h3>
        <p>${product.category}</p>
        <div class="price">$${product.price}</div>
        <div class="rating">
          <i class="fa-solid fa-star" data-value="1"></i>
          <i class="fa-solid fa-star" data-value="2"></i>
          <i class="fa-solid fa-star" data-value="3"></i>
          <i class="fa-solid fa-star" data-value="4"></i>
          <i class="fa-solid fa-star" data-value="5"></i>
        </div>

<p id="result"></p>

        <a href="#" class="buy">Buy Now</a>
        
        `
        const cards = document.querySelectorAll(".card");

        cards.forEach((card, index) => {
        const stars = card.querySelectorAll(".rating i");
        const rating = Math.round(data.products[index].rating); 

         stars.forEach((star, i) => {
    if (i < rating) {
      star.classList.add("active");
    }
  });
});


        productshtml.appendChild(div)

        
    });


    console.log(data.products[0])


        let btnTopFivePrice = document.querySelector(".top-five-price");
    btnTopFivePrice.addEventListener("click", () => {
        let sortedByPrice = [...data.products].sort((a, b) => b.price - a.price).slice(0, 5);
        displayProducts(sortedByPrice);
    });

    let btnTopFiveRating = document.querySelector(".top-five-rating");
    btnTopFiveRating.addEventListener("click", () => {
        let sortedByRating = [...data.products].sort((a, b) => b.rating - a.rating).slice(0, 5);
        displayProducts(sortedByRating);
    });

    let btnAll = document.querySelector(".all");
    btnAll.addEventListener("click", () => {
        displayProducts(data.products);
    });

    
    function displayProducts(products) {
        let productshtml = document.getElementById("products");
        productshtml.innerHTML = "";
        products.forEach(product => {
            let div = document.createElement("div");  
            div.className = "card";
            div.innerHTML = `
            <div class="img-box"><img src="${product.images[0]}" alt="${product.title}"></div>
            <h3>${product.title}</h3>
            <p>${product.category}</p>
            <div class="price">$${product.price}</div>
            <div class="rating">

              <i class="fa-solid fa-star" data-value="1"></i>
              <i class="fa-solid fa-star" data-value="2"></i>
              <i class="fa-solid fa-star" data-value="3"></i>
              <i class="fa-solid fa-star" data-value="4"></i>
              <i class="fa-solid fa-star" data-value="5"></i>
            </div>
    <p id="result"></p> 
            <a href="#" class="buy">Buy Now</a>
            `;
            const stars = div.querySelectorAll(".rating i");
            const rating = Math.round(product.rating);
            stars.forEach((star, i) => {
                if (i < rating) {
                    star.classList.add("active");
                }
            });
            productshtml.appendChild(div);
        }
        );
    }


  });




  let btnsFilters = document.querySelectorAll(".categories button")


  btnsFilters.forEach(btn => {
    btn.addEventListener("click", () => {
        let category = btn.getAttribute("data-category")
        let cards = document.querySelectorAll(".card")
        btn.classList.add("active")
        btnsFilters.forEach(otherBtn => {
            if(otherBtn !== btn){
                otherBtn.classList.remove("active")
            }
        })  
        cards.forEach(card => {
            if(category === "all"){
                card.style.display = "block"
            } else {
                if(card.querySelector("p").innerText === category){
                    card.style.display = "block"
                } else {
                    card.style.display = "none"
                }
            }
        })
    })
  })  