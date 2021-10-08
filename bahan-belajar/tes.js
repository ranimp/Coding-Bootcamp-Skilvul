var obj = {
    foo: { bar: 'baz' }
  };
  
  function deepFind(obj, path) {
    var paths = path.split('.')
    var current = obj
    var i;
  
    for (i = 0; i < paths.length; ++i) {
      if (current[paths[i]] == undefined) {
        return undefined;
      } else {
        current = current[paths[i]];
      }
    }
    return current;
  }
  
  console.log(deepFind(obj, 'foo.bar'))