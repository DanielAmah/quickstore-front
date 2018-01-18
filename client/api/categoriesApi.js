class CategoriesApi {  
  static getAllCategories() {
    return fetch('https://quickstore-dev.herokuapp.com/api/categories').then(response => {
      console.log(response);
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}
export default CategoriesApi;  