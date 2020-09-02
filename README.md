# API productos con express

Ejemplo api crud de productos

## Instalacion de dependencias

```
npm install
```

## Ejecutar servidor express

```
npm run start-server
```

### Crear productos por metodo POST

POST localhost:3001/productos/create

```
{
  name:"iPhone X",
  category:"telefono",
  price:3500
}
```

### Editar productos por metodo POST

POST localhost:3001/productos/update

```
{
  id:45,
  name:"OnePlus 7Pro",
  category:"telefono",
  price:5000
}
```

### Eliminar productos por metodo PUT

PUT localhost:3001/products/delete

```
{
  id:45
}
```

### Listar Productos por metodo GET

GET localhost:3001/productos.list
