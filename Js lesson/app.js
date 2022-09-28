fetch('http://localhost:3000/posts')
.then((r) => r.json())
.then(data =>  post(data))

function post(data){
	data.forEach((item) => {
		let link = document.createElement('a')
		let h2 = document.createElement('h2')
		let p = document.createElement('p')
		let img = document.createElement('img')
		let div = document.createElement('div')
		link.setAttribute('href', './pages.html')
		h2.innerText = item.titlePost
		p.innerText = item.shortdescriptionsPost
		img.setAttribute('src', item.photoPost)
		div.append(h2)
		div.append(p)
		div.append(img)
		link.append(div)
		document.body.appendChild(link)
		
		
		div.addEventListener('click', () => {
			localStorage.setItem('id', item.id)
		})
	})
}


// loader

let load = document.querySelector('.lds-ripple')


function loader(){
	load.style.display = 'none'
}
setTimeout(loader , 2000)
