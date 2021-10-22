//mudando rota de link
const link = {
  github: 'PaozinDesu',
  Twitter: '',
  Facebook: '',
  Instagram: '',
  YouTube: ''
}

function changeLink() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${link[social]}`
  }
}

changeLink()

// acessando api

function getApiInfo() {
  const url = `https://api.github.com/users/${link.github}`
  console.log(url)

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userNick.textContent = data.login
    })
}
getApiInfo()
