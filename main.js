function generate(input) {
    if (!Array.isArray(input)) return;
    document.getElementById('container').appendChild(handle(input));
  }
  
  function handle(input) {
    if (!Array.isArray(input)) return;
    
    let ul = document.createElement('ul');
    input.forEach(function(element) {
      let li = document.createElement('li');
      ul.appendChild(li);
      
      if (Array.isArray(element)) {
        li.appendChild(handle(element))
      } else {
        li.appendChild(document.createTextNode(element));
      }
    });
    
    return ul;
  }
  
  
  generate([5, 6, [1.3, 1.2, 1.1, [100, 200]], 7, [9, 8]]);