// let input_html = document.getElementById('photo_name')
// const api =  'Hmiri50c8gmLYGlC65-D1SXMdXKxSWOcWphIZa9tDWo'

// let photos =[]
// const getPhotos = async()=>{
//     const res = await fetch(`https://api.unsplash.com/search/photos?query=${input_html.value}&client_id=${api}`)
//     const data = await res.json()
//     photos.push(data)
// }

// const RenderPhoto = ()=>{
//     photos[0].fetch (elment =>{
//         let img = document.createElement('img')
//         img.src = element 
//     })
// }

let input_html = document.getElementById('photo_name')
const api = 'Hmiri50c8gmLYGlC65-D1SXMdXKxSWOcWphIZa9tDWo'

let photos = []

const getPhotos = async () => {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${input_html.value}&client_id=${api}`
  )
  const data = await res.json()
  photos = []          // эскини тазалоо
  photos.push(data)
  RenderPhoto()        // ⬅️ функцияны чакыруу
}

const RenderPhoto = () => {
  photos[0].results.forEach(element => {
    let img = document.createElement('img')
    img.src = element.urls.small
    img.style.width = "500px"
    img.style.marginBottom = "20px"
    img.style.borderRadius = "20px"

    document.body.append(img)
  })
}
  