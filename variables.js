
const handlerBarsContext = {
    "/Menu.html": {
        
        "testimonials": [
            {
                imgUrl:"img/Galeria/420x236/img-1.jpg",
                name:"Desayunos o Cena Tipica",
                content:"Frijoles, Huevo, platano, aguacate, mantequilla."


            },
            {
               imgUrl:"img/Menu/img-28.jpg",
                name:"Hotdogs",
                content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."

            },
            {
                imgUrl:"img/Galeria/420x236/img-19.jpg",
                name:"Baleadas Sencilla",
                content:"Frijoles, mantequilla y queso."

            },
            {
                imgUrl:"img/Galeria/420x236/img-19.jpg",
                name:"Baleada especial",
                content:"Frijoles, mantequilla, queso, Huevo."

            },
            {
                imgUrl:"img/Galeria/420x236/img-19.jpg",
                name:"Baleada con todo",
                content:"Frijoles, Mantequilla, Queso, Huevo, Aguacate, Carne de res, Cerdo o Pollo."

            },
            {
                imgUrl:"img/Galeria/420x236/img-17.jpg",
                name:"Platano Frito ",
                content:"Frijoles, queso y mantequilla"

            },
            {
                imgUrl:"img/Menu/img-27.jpg",
                name:"Pan con frijoles sencillo",
                content:"Frijoles, mantequilla y queso"

            },
            {
                imgUrl:"img/Menu/img-27.jpg",
                name:"Pan con frijoles Especial",
                content:"Frijoles, mantequilla, queso y huevo con chorizo"

            },
            {
                imgUrl:"img/Galeria/420x236/img-3.jpg",
                name:"Panqueques",
                content:"con Mantequilla o miel."
            },
            {
                imgUrl:"img/Galeria/420x236/img-21.jpg",
                name:"Lomo de cerdo con chimichurri",
                content:"papas fritas zasonadas, arroz ensalada y aderezo"

            },
            {
                imgUrl:"img/Menu/img-30.jpg",
                name:"Lomo a la plancha en salsa BBQ",
                content:"tajaditas de minimo verde, frijoles, ciajada, escabeche y aderezo"

            },
            {
                imgUrl:"img/Galeria/420x236/img-12.jpg",
                name:"Chuleta tipica en salsa barbacoa",
                content:"una pieza de chuleta con tajadas de minimo verde, frijles, cuajada y escabeche"

            },
            {
                imgUrl:"img/Menu/img-32.jpg",
                name:"chuleta frita",
                content:"Arroz jardinero, papas zasonadas, ensalada y aderezo"

            },
            {
                imgUrl:"img/Menu/img-33.jpg",
                name:"Carne asada de res o cerdo",
                content:"frijoles, aguacate, cuajada, chismol."

            },
            {
                imgUrl:"img/Menu/img-10.jpg",
                name:"Carne Asada Mixta",
                content:"Carne asada de res, cerdo, chorizo, frijoles, aguacate, cuajada, chismol."

            },

            {
                imgUrl:"img/Menu/img-26.jpg",
                name:"Parillada Catracha",
                content:"Res, cerdo, chorizo, chuleta, platano frito, anafre con nachos, chismol, escabeche. De 2 y hasta 8 Personas "

            },

            {
                imgUrl:"img/Menu/img-34.jpg",
                name:"Pollo frito",
                content:"arroz jardinero, papas, ensalada y aderezo"

            },


            {
                imgUrl:"img/Menu/img-41.jpg",
                name:"pollo a la plancha",
                content:"en salsa barbacoa, papas listas y ensalada."

            },


            {
                imgUrl:"img/Galeria/420x236/img-2.jpg",
                name:"Pollo chuco",
                content:"Tajadas, chismol, aderesos y salsas"

            },

            
            {
                imgUrl:"img/Galeria/420x236/img-18.jpg",
                name:"Alitas en salsa Barbacoa",
                content:"acompañadas con papas fritas. de 6,8 y 12 unidades"

            },


            {
                imgUrl:"img/Menu/img-25.jpg",
                name:"Chilaquiles",
                content:"con carne molida o pollo."

            },


            {
                imgUrl:"img/Menu/img-42.jpg",
                name:"Tacos de pollo",
                content:""

            },


            {
                imgUrl:"img/Menu/img-40.jpg",
                name:"Papas fritas enteras",
                content:""

            },


            {
                imgUrl:"img/Galeria/420x236/img-20.jpg",
                name:"Yuca cocida o frita ",
                content:"sencilla o con Chicharron"

            },


            {
                imgUrl:"img/Menu/img-23.jpg",
                name:"Torrilla con quesillo ",
                content:"Salsa y queso / frijoles y queso "

            },


            {
                imgUrl:"img/Galeria/420x236/img-6.jpg",
                name:"Catrachas",
                content:"Frijoles fritos o licuados con queso"

            },


            {
                imgUrl:"img/Menu/img-36.jpg",
                name:"Enchiladas",
                content:""

            },


            {
                imgUrl:"img/Menu/img-37.jpg",
                name:"Tajadas de minimo verde con carne molida o pollo",
                content:""

            },


            {
                imgUrl:"img/Menu/img-24.jpg",
                name:"Tacos suaves, carne asada o pollo",
                content:""

            },


            {
                imgUrl:"img/Menu/img-43.jpg",
                name:"Tacos de arina de pollo",
                content:""

            },


            {
                imgUrl:"img/Menu/img-39.jpg",
                name:"Bebidas",
                content:"Fresco natural, Fresco en botella. Cafe: Gourmet, Cafe de palo, negro o con leche"

            }
            

        ]
    },
}

const pageContext = (page)=>{
    const context= {...handlerBarsContext[page]}
    return context;
}
export default pageContext;