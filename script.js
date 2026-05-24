const botones = document.querySelectorAll(".comprar");

botones.forEach(boton => {

  boton.addEventListener("click", () => {

    alert("Producto agregado al carrito 🛒");

  });

});
