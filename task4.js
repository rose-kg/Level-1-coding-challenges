function square(squ) {
   
for (let i = 0; i < squ; i++) {
    let row = "";
  for (let kk = 0; kk < squ; kk++) {
    row += "#";
  
  }
  console.log(row);
}
}

square(4);

module.exports = { square };
