function longest(arr) {
  let maxLength = 0;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > maxLength) {
          maxLength = arr[i].length;
      }
  }

  for (let i = 0; i < arr.length; i++) {
      if (arr[i].length === maxLength) {
          console.log(arr[i]);
      }
  }
}

longest(["once", "upon", "a", "time"]);

module.exports = { longest };






