// codigo em javascript //
/*document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/Andersonpoanorte')
        .then(function(res){
            return res.json();
        })
        .then(function(json){
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;
        })

})

.catch(function(error) {
    console.log('Ocorreu um erro:'. error);
})*/

// codigo em Jquery //
$(document).ready(function (){
    const nameElement = $('#name');
    const usernameElement = $('#username');
    const avatarElement = $('#avatar');
    const reposElement = $('#repos');
    const followersElement = $('#followers');
    const followingElement = $('#following');
    const linkElement = $('#link');
    
    // Podemos usar o fetch para chamar api. //
    fetch('https://api.github.com/users/Andersonpoanorte')
    .then(function(res){
        return res.json();
    })
    .then(function(json){
        nameElement.text(json.name);
        usernameElement.text(json.login);
        avatarElement.attr('src', json.avatar_url);
        reposElement.text(json.public_repos);
        followersElement.text(json.followers);
        followingElement.text(json.following);
        linkElement.attr('href', json.html_url);
    })

    // é um atalho em jQuery para realizar uma requisição HTTP GET e obter a resposta JSON. //

    /*$.getJSON('https://api.github.com/users/Andersonpoanorte')
    .done(function(json){
        nameElement.text(json.name);
        usernameElement.text(json.login);
        avatarElement.attr('src', json.avatar_url);
        reposElement.text(json.public_repos);
        followersElement.text(json.followers);
        followingElement.text(json.following);
        linkElement.attr('href', json.html_url);
    })*/

   .catch(function(){
       alert('Ocorreu um erro ao buscar os dados do usuário.');
   })

})
