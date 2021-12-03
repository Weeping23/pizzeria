window.onload = function() {

    // alert(Object.values(pizzas));

     //yourFunction(param1, param2);
    cargarDatosIniciales();
 
     //functionTest();
 
 
};
 
 
 
    function functionTest(){
 
      // comando para escribir sobre p   
        document.getElementById('cantPizzas').innerText = "1000";
      // comando para capturar p
        var cantidadPizas_temporal =  document.getElementById('cantPizzas').innerText;
}
    //comando para sumar
    function control_cantidadPizzas(operacion){

        var cantidadPizas_temporal =  document.getElementById('cantPizzas').innerText;
        cantidadPizas_temporal = parseInt(cantidadPizas_temporal);

            switch(operacion){
    
                case 'SUMA':
                 //
                cantidadPizas_temporal = cantidadPizas_temporal + 1;
                break;

                case 'RESTA':
                //
                if (cantidadPizas_temporal != 0)
                cantidadPizas_temporal = cantidadPizas_temporal - 1;
                break;
            }
     // Sobreescribir P
        document.getElementById('cantPizzas').innerText = cantidadPizas_temporal;
    }

    function cargarDatosIniciales(){}
    //Array con los elementos
    let pizzas =[
        {
        id:0,
        title: 'Pepperonni Pizza',
        info: 'Base de salsa de tomate, queso mozzarella, peperoni, chile dulce.',
        price: 20.00,
        img: "./img/pepperoni.jpg"
        },
        {
        id:1,
        title:'Margharite Pizza',
        info: 'Base de salsa de tomate, queso mozzarella, albahaca fresca, rodajas de tomate fresco, sal, pimienta y aceite extra virgen.',
        price: 17.00,
        img: "./img/margharite.jpeg"
        },
        {
        id:2,
        title:'Hawaiana Pizza',
        info: 'Base de salsa de tomate, piña natural, jamon, mozzarella de bufala, champiñones, aceite de oliva, sal y pimienta.',
        price: 15.00,
        img: "./img/hawaiana.jpg",
        },
        {
        id:3,
        title:'Especial Pizza',
        info: 'Base de salsa de tomate, berenjena, calabacin, cebolla, esparragos, jamon iberico y queso mozzarella.',
        price: 12.00,
        img: "./img/especial.jpg",
        },
        {
        id:4,
        title:'4 Chesses Pizza',
        info: 'Base de salsa tomate, aceite de oliva extra virgen, oregano, queso mozzarella, queso azul, queso parmesano y queso riccotta.',
        price: 10.00,
        img: "./img/cuatro-quesos.JPG",
        }]
        let cart = []
        cart.push (pizzas);
        
        

    let indicePizza = 0;
    //Para imprimir los elementos de nuestro array en el html
    function printContent(indice){
        let tituloPizza = document.getElementById('pizzas');
        let ingredientesPizza = document.getElementById('ingredientes');
        let precioPizza = document.getElementById('precio');
        let imagenPizza = document.getElementById('1');
        precioPizza.innerHTML = pizzas [indice].price;
        ingredientesPizza.innerHTML = pizzas[indice].info;
        tituloPizza.innerHTML = pizzas[indice].title;
        imagenPizza.src = pizzas[indice].img;
    }
    function next (){
        indicePizza++
        if (indicePizza > 4){
            indicePizza = 0;
        }
        printContent(indicePizza)
    }
    function back(){
        indicePizza--
        if (indicePizza < 0){
            indicePizza = 4;
        }
        printContent(indicePizza)
    }

    printContent(indicePizza);

    //Para tallas de pizzas
    let img = document.getElementById('img');
        
        function functionS() {
        img.style.transform = 'scale(1)';
        } function functionM() {
        img.style.transform = 'scale(1.1)';
        } function functionL() {
        img.style.transform = 'scale(1.3)';
        }

        //Prueba carrito
      /*  let allContainerCart = document.querySelector('.container');
        
        //funcion
        function loadEventListener(){
            allContainerCart.addEventListener('click', addProduct)
        }
        loadEventListener();

        function addProduct(e){;
            e.preventDefault();
            if (e.target.classList.contains('addtocart')){
                const selectProduct = e.target.parentElement;
                readTheContent(selectProduct);
                //console.log(addProduct);
            }
        }

        function readTheContent(){
            
        }console.log(readTheContent);*/