
const pizzas = [
    {
      id: 1,
      nombre: "pizza de Muzzarella",
      precio: 500,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    },
  
    {
      id: 2,
      nombre: "pizza de Cebolla",
      precio: 1500,
      ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    },
  
    {
      id: 3,
      nombre: "pizza Napolitana",
      precio: 1350,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
    },
  
    {
      id: 4,
      nombre: "pizza 4 Quesos",
      precio: 1380,
      ingredientes: [
        "Muzzarella",
        "Tomate",
        "Queso Azul",
        "Parmesano",
        "Roquefort",
      ],
    },
  
    {
      id: 5,
      nombre: "pizza Especial",
      precio: 1000,
      ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
    },
  
    {
      id: 6,
      nombre: "pizza con Anana",
      precio: 600,
      ingredientes: ["Muzzarella", "Tomate", "Anana"],
    },
];
  
const pizzasIdImpar = () =>{
    pizzas.forEach((pizza)=>{
        if(pizza.id % 2 === 1){
            console.log(`La'${pizza.nombre}' tiene id impar, ${pizza.id}`);
        }

    })
}  

pizzasIdImpar();


const existePizzaConPrecioMenorG= (precio) => {


  const isExist = pizzas.some((pizza)=> {
    return pizza.precio < precio
  })

  isExist?
    console.log (`Existe una pizza con menor precio a $${precio}`):
    console.log (`No existe una pizza con precio menor a $${precio}`) 

}

existePizzaConPrecioMenorG(600)

const imprimirPizzasYPrecios = () =>{
  pizzas.forEach((pizza)=>{
     
    console.log(`La'${pizza.nombre}' tiene un precio de ${pizza.precio}`);

  })
}  

imprimirPizzasYPrecios()

const imprimirIngredientesDeLasPizzas = () =>{
  pizzas.forEach((pizza)=>{
     
    console.log(`La'${pizza.nombre}' tiene los ingredientes ${pizza.ingredientes}`);

  })
}  

imprimirIngredientesDeLasPizzas()






