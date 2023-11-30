const baseUrl = 'http://localhost:8000/api/products';

// Función para obtener todos los productos
async function getProducts() {
  try {
    const response = await fetch(baseUrl);
    const data = await response.json();
    console.log('Productos:', data);
    // Puedes manejar los datos obtenidos, por ejemplo, mostrarlos en la interfaz de usuario.
  } catch (error) {
    console.error('Error:', error);
  }
}

// Función para obtener un producto por ID
async function getProductById() {
    try {
      const productIdInput = document.getElementById('productId');
      const productId = productIdInput.value;
  
      const response = await fetch(`${baseUrl}/${productId}`);
      const data = await response.json();
  
      if (response.status === 404) {
        console.log('Producto no encontrado');
      } else {
        console.log('Producto:', data);
        // Puedes manejar los datos obtenidos, por ejemplo, mostrarlos en la interfaz de usuario.
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

// Función para crear un nuevo producto
async function createProduct() {
    try {
      const newProductDescriptionInput = document.getElementById('newProductDescription');
      const newProductPriceInput = document.getElementById('newProductPrice');
      const newProductStockInput = document.getElementById('newProductStock');
  
      const newProductDetails = {
        description: newProductDescriptionInput.value,
        price: parseFloat(newProductPriceInput.value),
        stock: parseInt(newProductStockInput.value)
      };
  
      // Realiza la solicitud de creación del nuevo producto
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProductDetails),
      });
  
      // Maneja la respuesta del servidor
      const data = await response.json();
      console.log('Nuevo producto creado:', data);
      // Puedes manejar la respuesta del servidor, por ejemplo, actualizar la interfaz de usuario.
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

  async function updateProductById() {
    try {
      const productIdInput = document.getElementById('productIdUpdate');
      const updatedProductDescriptionInput = document.getElementById('updatedProductDescription');
      const updatedProductPriceInput = document.getElementById('updatedProductPrice');
      const updatedProductStockInput = document.getElementById('updatedProductStock');
  
      const productId = productIdInput.value;
      const updatedProductDetails = {
        description: updatedProductDescriptionInput.value,
        price: parseFloat(updatedProductPriceInput.value),
        stock: parseInt(updatedProductStockInput.value)
      };
  
      // Realiza la solicitud de actualización del producto
      const response = await fetch(`${baseUrl}/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProductDetails),
      });
  
      // Maneja la respuesta del servidor
      const data = await response.json();
      console.log('Producto actualizado:', data);
      // Puedes manejar la respuesta del servidor, por ejemplo, actualizar la interfaz de usuario.
    } catch (error) {
      console.error('Error:', error);
    }
  }
  

// Función para eliminar un producto por ID
async function deleteProductById() {
    try {
      const productIdToDeleteInput = document.getElementById('productIdToDelete');
      const productIdToDelete = productIdToDeleteInput.value;
  
      const response = await fetch(`${baseUrl}/${productIdToDelete}`, {
        method: 'DELETE',
      });
  
      // Maneja la respuesta del servidor
      const data = await response.json();
      console.log('Producto eliminado:', data);
      // Puedes manejar la respuesta del servidor, por ejemplo, actualizar la interfaz de usuario.
    } catch (error) {
      console.error('Error:', error);
    }
  }
  