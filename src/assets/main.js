// import Swal from './sweetalert2'
// const Swal = require('sweetalert2');

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCGnz3Xe90ecwOTOz1Dz0xGA&part=snippet%2Cid&order=date&maxResults=2';

const content = null || document.querySelector('#content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '02402c6a93msh6d52dd577630c1cp1d6659jsne288a97540b6', // esta key es privada
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async() => {
    try {
        const videos = await fetchData(API);
        let view = `
        
        ${videos.items.map((video) => {return` 
            <div class="group relative">
                <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
                </div>
            </div>
            `}).slice(0,4).join('')}
        `;
        content.innerHTML = view;
    } catch(error) {
        console.log(error);
        // Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: 'Something went wrong!',
        //     footer: '<a href="">Why do I have this issue?</a>'
        //   });
        
    }
})();












