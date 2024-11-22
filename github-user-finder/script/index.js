const API = 'https://api.github.com/users/'

const body = document.body

const form = document.querySelector('form')
const input = document.querySelector('#inp')
const output = document.querySelector('#output')

const soundTrack = new Audio()
soundTrack.src = '../audio/matrix-soundtrack.mp3'

let locationImage = `
<svg class="octicon octicon-location" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
    <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132v-.001a5 5 0 1 0-7.072 7.072L8 14.07l3.536-3.534a5 5 0 0 0 0-7.072ZM8 9a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 9Z">
    </path>
</svg>`

const searchUser = (event) => {
    event.preventDefault()
    if (!input.value.trim().length) {
        alert('Please input user login!')
    } else {
        getUsers()
    }
    // soundTrack.play()
    input.value = ''
}

form.addEventListener('submit', searchUser)

const getUsers = async () => {
    const req = await fetch(API + input.value)
    const res = await req.json()
    renderUsers(res);
}

const renderUsers = (user) => {
    output.innerHTML = ''
    const card = document.createElement('div')

    const userProfileLink = document.createElement('a')
    userProfileLink.href = user.html_url
    userProfileLink.target = '_blank'

    const userAvatar = document.createElement('img')
    userAvatar.style.width = '350px'
    userAvatar.style.height = '350px'
    userAvatar.src = user.avatar_url
    userAvatar.style.borderRadius = '50%'

    const userName = document.createElement('h2')
    userName.textContent = `${user.name}`

    const userLogin = document.createElement('h3')
    userLogin.textContent = user.login

    const userBio = document.createElement('h3')
    userBio.textContent = user.bio

    const userLocation = document.createElement('h3')
    userLocation.textContent = user.location

    const userFollowsInfo = document.createElement('div')
    userFollowsInfo.style.display = 'flex'
    userFollowsInfo.style.justifyContent = 'center'
    userFollowsInfo.style.gap = '30px'

    const userFollowers = document.createElement('p')
    userFollowers.textContent = `${user.followers} followers`

    const userFollowings = document.createElement('p')
    userFollowings.textContent = `${user.following} following`

    const followLinkText = document.createElement('p')
    followLinkText.textContent = `Click on the image to go to the user's profile`

    userProfileLink.append(userAvatar)
    userFollowsInfo.append(userFollowers, userFollowings)
    card.append(userProfileLink, userName, userLogin, userBio, userLocation, userFollowsInfo, followLinkText)
    output.append(card)
}


