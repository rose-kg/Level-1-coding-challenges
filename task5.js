function triangle(tri) {
   
    for (let i = 1; i <= tri; i++) {
        let row = "";
      for (let j = 1; j <= i; j++) {
        row += "#";
      
      }
      console.log(row);
    }
    }
    
    (triangle(2));
    
    module.exports = { triangle };