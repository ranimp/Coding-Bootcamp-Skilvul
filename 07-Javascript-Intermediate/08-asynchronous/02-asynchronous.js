const isR18Plus = (age) => {
    return new Promise((resolve, reject) => {
      if (age > 18) {
        resolve({msg : "anda sudah dewasa"});
      } 
      else {
        reject({msg : "anda masih di bawah umur"});
      }
    });
  };
  
  
  const printR18Plus = async () => {
    const underAge = await isR18Plus(10)
        .then((data)=> { return data.msg})
        .catch((data)=> { return data.msg});
    const properAge = await isR18Plus(19)
        .then((data)=> { return data.msg})
        .catch((data)=> { return data.msg});
  
    console.log(underAge);
    console.log(properAge);
  };
  
  printR18Plus();