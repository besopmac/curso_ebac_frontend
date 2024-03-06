document.addEventListener('DOMContentLoaded', function() {
  const name = document.querySelector('#name')
  const avatar = document.querySelector('#avatar')
  const surname = document.querySelector('#surname')
  const repos = document.querySelector('#repos')
  const followers = document.querySelector('#followers')
  const following = document.querySelector('#following')
  const profileLink = document.querySelector('#profile-link')

  fetch('https://api.github.com/users/besopmac')
    .then(function(response) {
      return response.json()
    })
    .then(function(json) {
      name.innerHTML = json.name
      surname.innerHTML = json.login
      avatar.setAttribute('src', json.avatar_url)
      profileLink.setAttribute('href', json.html_url)
      repos.innerHTML = json.public_repos
      followers.innerHTML = json.followers
      following.innerHTML = json.following
    })
})