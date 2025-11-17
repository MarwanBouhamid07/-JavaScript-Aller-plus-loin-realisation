fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {
    
    let productshtml= document.getElementById("products2")
  for(let i = 0 ; i < 3 ; i++){
        let div = document.createElement("div")
        div.className = "card"

        let someProduct = data.products[i]

        div.innerHTML = `
        <div class="img-box"><img src="${someProduct.images[0]}" alt="${someProduct.title}"></div>
        <h3>${someProduct.title}</h3>
        <p>${someProduct.category}</p>
        <div class="price">$${someProduct.price}</div>
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

        
    }

    console.log(data.products[0])






  });



