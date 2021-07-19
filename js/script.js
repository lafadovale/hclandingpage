const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let lead = {
        name,
        email
    };
    let convertData = JSON.stringify(lead);
    localStorage.setItem('leads', convertData);  
    alert("Parabéns! O e-book foi enviado para o seu e-mail!");    
});