const products = [
    {
        name: "Camiseta Diego Team",
        price: "20.00€",
        category: "camisetas",
        image: "Imagenes/diego_team.jpg",
        description: "Camiseta oficial del Diego Team.",
    },
    {
        name: "Camiseta Leyendas Ogre Team",
        price: "20.00€",
        category: "camisetas",
        image: "Imagenes/ogre_team.jpg",
        description: "Camiseta oficial del Ogre Team.",
    },
    {
        name: "Camiseta Alcorcon",
        price: "20.00€",
        category: "camisetas",
        image: "Imagenes/alcorcon.jpg",
        description: "Camiseta oficial del Alcorcón.",
    },
    {
        name: "Camiseta Barcelona Dream Team",
        price: "20.00€",
        category: "camisetas",
        image: "Imagenes/barcelona_dream_team.jpg",
        description: "Camiseta oficial del FC Barcelona.",
    },
    {
        name: "Camiseta El Alamo",
        price: "20.00€",
        category: "delux", 
        image: "Imagenes/el_alamo.jpg",
        description: "Camiseta de edición limitada.",
    },
    {
        name: "Camiseta Ragnarok Fc",
        price: "20.00€",
        category: "camisetas",
        image: "Imagenes/ragnarok_fc.jpg",
        description: "Camiseta oficial del Ragnarok Fc.",
    },
    {
        name: "Camiseta Leganes Dream Team",
        price: "20.00€",
        category: "camisetas",
        image: "Imagenes/leganes_dream_team.jpg",
        description: "Camiseta oficial con diseño moderno del Leganes.",
    },
    {
        name: "Chandal Diego Team",
        price: "45.00€",
        category: "chandales", 
        image: "Imagenes/chandal_diego_team.jpg",
        description: "Chándal edición limitada del Diego Team.",
    },
    {
        name: "Chandal Leyendas Ogre Team",
        price: "45.00€",
        category: "chandales",
        image: "Imagenes/chandal_ogre_team.jpg",
        description: "Chándal edición limitada del Ogre Team.",
    },
    {
        name: "Chandal Alcorcon",
        price: "45.00€",
        category: "chandales",
        image: "Imagenes/chandal_alcorcon.jpg",
        description: "Chándal edición limitada del Real Madrid.",
    },
    {
        name: "Chandal Barcelona Dream Team",
        price: "45.00€",
        category: "chandales",
        image: "Imagenes/chandal_barcelona_dream_team.jpg",
        description: "Chándal edición limitada del FC Barcelona.",
    },
    {
        name: "Chandal El Alamo",
        price: "45.00€",
        category: "chandales",
        image: "Imagenes/chandal_el_alamo.jpg",
        description: "Chándal edición limitada del Alamo.",
    },
    {
        name: "Chandal Ragnarok Fc",
        price: "45.00€",
        category: "chandales",
        image: "Imagenes/chandal_ragnarok_fc.jpg",
        description: "Chándal edición limitada del Ragnarok Fc.",
    },
    {
        name: "Chandal Leganes Dream Team",
        price: "45.00€",
        category: "chandales",
        image: "Imagenes/chandal_leganes_dream_team.jpg",
        description: "Chándal edición limitada del Leganes.",
    },
    {
        name: "Bufanda Diego Team",
        price: "5.00€",
        category: "bufandas",
        image: "Imagenes/bufanda_diego_team.jpg",
        description: "Bufanda limitada del Diego Team.",
    },
    {
        name: "Bufanda Leyendas Ogre Team",
        price: "5.00€",
        category: "bufandas",
        image: "Imagenes/bufanda_ogre_team.jpg",
        description: "Bufanda limitada del Ogre Team.",
    },
    {
        name: "Bufanda Alcorcon",
        price: "5.00€",
        category: "bufandas",
        image: "Imagenes/bufanda_alcorcon.jpg",
        description: "Bufanda limitada del Real Madrid.",
    },
    {
        name: "Bufanda Barcelona Dream Team",
        price: "5.00€",
        category: "bufandas",
        image: "Imagenes/bufanda_barcelona_dream_team.jpg",
        description: "Bufanda limitada del FC Barcelona.",
    },
    {
        name: "Bufanda El Alamo",
        price: "5.00€",
        category: "bufandas",
        image: "Imagenes/bufanda_el_alamo.jpg",
        description: "Bufanda limitada del Alamo.",
    },
    {
        name: "Bufanda Ragnarok Fc",
        price: "5.00€",
        category: "bufandas",
        image: "Imagenes/bufanda_ragnarok_fc.jpg",
        description: "Bufanda limitada del Ragnarok Fc.",
    },
    {
        name: "Bufanda Leganes Dream Team",
        price: "5.00€",
        category: "bufandas",
        image: "Imagenes/bufanda_leganes_dream_team.jpg",
        description: "Bufanda limitada del Leganes.",
    },
    {
        name: "Camiseta Delux",
        price: "25.00€",
        category: "delux",
        image: "Imagenes/camiseta_delux.jpg",
        description: "Camiseta de la mejor competición, la Champions League Delux.",
    },
    {
        name: "Chandal Delux",
        price: "50.00€",
        category: "delux",
        image: "Imagenes/chandal_delux.jpg", 
        description: "Chandal de la mejor competición, la Champions League Delux.",
    },
    {
        name: "Bufanda Delux",
        price: "5.00€",
        category: "delux",
        image: "Imagenes/bufanda_delux.jpg", 
        description: "Bufanda de la mejor competición, la Champions League Delux.",
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
            <img src="${product.image}" alt="${product.name}" class="tarjeta__producto__imagen">
            <h3 class="tarjeta__producto__nombre">${product.name}</h3>
            <p class="tarjeta__producto__precio">${product.price}</p>
            <button class="tarjeta__producto__boton">Ver detalles</button>
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