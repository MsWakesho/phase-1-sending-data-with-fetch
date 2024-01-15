function submitData(name, email) {
    const destinationUrl = 'http://localhost:3000/users';
  
    const formData = {
      name: name,
      email: email
    };
  
const configurationObject = {
    method: 'POST',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",

    },
    body:JSON.stringify(formData),

};

return fetch(destinationUrl,configurationObject)
.then(function(response){
    return response.json();
})

.then(data =>{
    console.log('Sucesss',data);
})

.catch(error => {
    console.error("Error:Input Invalid", error.message);
});

}
