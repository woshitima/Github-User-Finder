// console.log('Request data');

// setTimeout(() => {
//     console.log('Preparing data');

//     const backendData = {
//         status: 200,
//         server: 'Codefinity',
//         port: 8080
//     }

//     setTimeout(() => {
//         console.log('Data received', backendData);
//     }, 1000)
// }, 3000)


// console.log('Request data');

// const prm = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data');

//         const backendData = {
//             status: 200,
//             server: 'Codefinity',
//             port: 8080,
//         }

//         resolve(backendData)    // вызывается когда все данные были получены
//         // reject('Server error')

//     }, 2000)
// })

// чтобы обработать resolve
// prm.then((res) => {     // срабатывает когда все данные были успешно получены.
//     console.log(res);
// })

// // чтобы обработать reject
// prm.catch((err) => {
//     console.error(err);
// })

// prm.finally(() => {     // callback не принимает ничего
//     console.log('Я работаю в любом случае');
// })


// prm
//     .then(res => console.log(res))
//     .catch(err => console.error(error))
//     .finally(() => console.log('I get implemented anyways'))




// ====================== Fetch / Async / Await ======================

// AJAX - запрос async javasript and XML 
// fetch - объект для работы с запросами РАБОТАЕТ НА ПРОМИСАХ!!!

// const search = () => {
//     let url = 'https://samurai.com/api/user/woshitima'
//     fetch(url)
//         .then(res => res.json())
//         .catch(err => console.error(err))
//         .finally(() => 'request implemented')
// }

// const search = async () => {
//     const req = await fetch('https://samurai.com/api/user/woshitima')
//     const res = await req.json()
//     console.log(res);
// }
// search()




// ==================================================================

// application programming interface
let API = 'https://jsonplaceholder.typicode.com/users'

const body = document.body
body.style.margin = '0'
// body.style.display = 'flex'
// body.style.width = '85%'

const getUsers = async () => {
    const req = await fetch(API)
    const res = await req.json()
    renderUsers(res);
}

getUsers()

const renderUsers = (users) => {
    users.forEach(user => {
        console.log(user);
        const card = document.createElement('div')
        card.style.display = 'flex'
        card.style.alignItems = 'center'
        card.style.gap = '50px'
        const userName = document.createElement('h2')
        userName.textContent = user.name
        const userEmail = document.createElement('h3')
        userEmail.textContent = `Email: ${user.email}`
        const userPhone = document.createElement('p')
        userPhone.textContent = `Phone number: ${user.phone}`
        const userCompany = document.createElement('h4')
        userCompany.textContent = `Company: ${user.company.name}`

        const userAdress = document.createElement('div')
        const streetName = document.createElement('p')
        streetName.textContent = `${user.address.street} Street`
        const suiteNumber = document.createElement('p')
        suiteNumber.textContent = `Suite: ${user.address.suite}`

        userAdress.append(streetName, suiteNumber)
        card.append(userName, userEmail, userPhone, userCompany, userAdress)
        body.append(card)
    })
}