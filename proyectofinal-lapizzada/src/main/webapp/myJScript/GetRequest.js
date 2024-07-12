console.log("Entro a GetRequest");

// DOMContentLoaded hace que una vez cargada el contenido de
// la página entonces se ejecute el código que se encuentra dentro.
document.addEventListener("DOMContentLoaded", function() {

    const pizzaList = document.querySelector("#item-producto");
    const pizzas = [];

    function loadPizzaList() {
        console.log("Entro a loadPizzaList");
        console.log("Loading fetch 1111...");
        fetch("/proyectofinal-lapizzada/pizzas?action=getAll")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log("JSON information: ", data);                
                data.forEach(pizza => {
                    pizzas.push(pizza);
                    //const pizzaItem = document.createElement('div');
                    
                    pizzaList.innerHTML += `
                        <div class="table-item-product">                        
                            <div class="table-item1-product">${pizza.id}</div>
                            <div class="table-item3-product">${pizza.nombre}</div>
                            <div class="table-item2-product">${pizza.descripcion}</div>
                            <div class="table-item2-product">${pizza.ingrediente}</div>
                            <div class="table-item2-product">$ ${pizza.precio}</div>
                            <div class="table-item2-product">${pizza.calificacion} ptos</div>
                            <div class="table-item2-product ico-star-color">`+ stars(pizza.estrella) + `</div>
                            <div class="table-item2-product">${pizza.chef}</div>
                            <div class="table-item2-product">
                                <a href="#" rel="noopener noreferrer" title="Editar" class="ico-edit-color">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </a> - 
                                <a href="#" rel="noopener noreferrer" title="Eliminar" class="ico-delete-color">
                                    <i class="fa-solid fa-trash-can"></i>
                                </a>
                            </div>
                        </div>
                        `;
                    //pizzaList.append(pizzaItem);
                });
            })
            .catch(error => {
                console.error('Hubo un problema con la solicitud fetch:', error);
            });
    }

    loadPizzaList();
});


function stars(number) {
    
    let solidStar = `<i class="fa-solid fa-star fa-sm"></i>`;
    let regularStar = `<i class="fa-regular fa-star fa-sm"></i>`;
    let amountStars = "";

    if (number == 1) {
        amountStars = `<span>${solidStar} ${regularStar} ${regularStar} ${regularStar} ${regularStar}</span>`;
    } else if (number == 2) {
        amountStars = `<span>${solidStar} ${solidStar} ${regularStar} ${regularStar} ${regularStar}</span>`;
    } else if (number == 3) {
        amountStars = `<span>${solidStar} ${solidStar} ${solidStar} ${regularStar} ${regularStar}</span>`;
    } else if (number == 4) {
        amountStars = `<span>${solidStar} ${solidStar} ${solidStar} ${solidStar} ${regularStar}</span>`;
    } else if (number == 5) {
        amountStars = `<span>${solidStar} ${solidStar} ${solidStar} ${solidStar} ${solidStar}</span>`;
    } else {
        amountStars = `<span>${regularStar} ${regularStar} ${regularStar} ${regularStar} ${regularStar}</span>`;
    }
    return amountStars;
}