const products = [
    {
        name: "Camiseta Diego Team",
        price: "20.00€",
        category: "camisetas",
        image: src ="",
        description: "Camiseta oficial del Diego Team.",
    },
    {
        name: "Camiseta Leyendas Ogre Team",
        price: "20.00€",
        category: "camisetas",
        image: "",
        description: "Camiseta oficial del Ogre Team.",
    },
    {
        name: "Camiseta Alcorcon",
        price: "20.00€",
        category: "camisetas",
        image: "",
        description: "Camiseta oficial del Real Madrid.",
    },
    {
        name: "Camiseta Barcelona Dream Team",
        price: "20.00€",
        category: "camisetas",
        image: "",
        description: "Camiseta oficial del FC Barcelona.",
    },
    {
        name: "Camiseta El Alamo",
        price: "20.00€",
        category: "delux", 
        image: "",
        description: "Camiseta de edición limitada.",
    },
    {
        name: "Camiseta Ragnarok Fc",
        price: "20.00€",
        category: "camisetas",
        image: "-local.jpg",
        description: "Camiseta oficial del Ragnarok Fc.",
    },
    {
        name: "Camiseta Leganes Dream Team",
        price: "20.00€",
        category: "camisetas",
        image: "",
        description: "Camiseta oficial con diseño modernodel Leganes.",
    },
    {
        name: "Chandal Diego Team",
        price: "45.00€",
        category: "chandales", 
        image: "",
        description: "Chándal edicion limitada del Diego Team.",
    },
    {
        name: "Chandal Leyendas Ogre Team",
        price: "$45.00€",
        category: "chandales",
        image: "",
        description: "Chándal edicion limitada del Ogre Team.",
    },
    {
        name: "Chandal Alcorcon",
        price: "45.00€",
        category: "chandales",
        image: "",
        description: "Chándal edicion limitada del Real Madrid.",
    },
    {
        name: "Chandal Barcelona Dream Team",
        price: "$45.00€",
        category: "chandales",
        image: "",
        description: "Chándal edicion limitada del Fc Barcelona.",
    },
    {
        name: "Chandal El Alamo",
        price: "$45.00€",
        category: "chandales",
        image: "",
        description: "Chándal edicion limitada del Alamo.",
    },
    {
        name: "Chandal Ragnarok Fc",
        price: "45.00€",
        category: "chandales",
        image: "",
        description: "Chándal edicion limitada del Ragnarok Fc.",
    },
    {
        name: "Chandal Leganes Dream Team",
        price: "45.00€",
        category: "chandales",
        image: "",
        description: "Chándal edicion limitada del Leganes.",
    },
    {
        name: "Bufanda Diego Team",
        price: "5.00€",
        category: "bufandas",
        image: "",
        description: "Bufanda limitada del Diego Team.",
    },
    {
        name: "Bufanda Leyendas Ogre Team",
        price: "5.00€",
        category: "bufandas",
        image: "",
        description: "Bufanda limitada del Ogre Team.",
    },
    {
        name: "Bufanda Alcorcon",
        price: "5.00€",
        category: "bufandas",
        image: "",
        description: "Bufanda limitada del Real Madrid.",
    },
    {
        name: "Bufanda Barcelona Dream Team",
        price: "5.00€",
        category: "bufandas",
        image: "",
        description: "Bufanda limitada del FC Barcelona.",
    },
    {
        name: "Bufanda El Alamo",
        price: "5.00€",
        category: "bufandas",
        image: "",
        description: "Bufanda limitada del Alamo.",
    },
    {
        name: "Bufanda Ragnarok Fc",
        price: "5.00€",
        category: "bufandas",
        image: "",
        description: "Bufanda limitada del Ragnarok Fc.",
    },
    {
        name: "Bufanda Leganes Dream Team",
        price: "5.00€",
        category: "bufandas",
        image: "",
        description: "Bufanda limitada del Leganes.",
    },
    {
        name: "Camiseta Delux",
        price: "25.00€",
        category: "delux",
        image: "",
        description: "Camiseta de la mejor competicion , la Champions League Delux.",
    },
    {
        name: "Chandal Delux",
        price: "$50.00€",
        category: "delux",
        image: "",
        description: "Chandal de la mejor competicion , la Champions League Delux.",
    },
    {
        name: "Bufanda Delux",
        price: "5.00€",
        category: "delux",
        image: src="",
        description: "Bufanda de la mejor competicion , la Champions League Delux.",
    },
];


const productContainer = document.querySelector('.productos');


function loadProducts(category) {
    productContainer.innerHTML = '';


    const filteredProducts = category === 'todo' ? products : products.filter(p => p.category === category);


    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('tarjeta__producto');
        card.innerHTML = `
            <img src="${product.image}" class="tarjeta__producto__imagen">            
            <h3 class="tarjeta__producto__nombre">${product.name}</h3>
            <p class="tarjeta__producto__precio" >${product.price}</p>
            <button class="tarjeta__producto__boton" >Ver detalles</button>
        `;

        card.querySelector('button').addEventListener('click', () => showDetails(product));
        productContainer.appendChild(card);
    });
}


function showDetails(product) {
    alert(`Nombre: ${product.name}\nPrecio: ${product.price}\nDescripción: ${product.description}`);
}


document.querySelectorAll('.filtros__boton').forEach(button => {
    button.addEventListener('click', () => loadProducts(button.getAttribute('data-category')));
});


loadProducts('todo');