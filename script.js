var arr= [
    {dp: "https://images.unsplash.com/photo-1738005787913-3a51f95507a7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    story:"https://imgs.search.brave.com/YHenQGwSqvfAZWc8yW5rL11JQbZhzowb-CnW4XovyEM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzAzLzY3LzEw/LzM2MF9GXzQwMzY3/MTA4NF9YQUFBcnZH/alByVEhWS3pSb1VU/UVhVdTJYRGtJTm5L/bC5qcGc"},
    {dp: "https://imgs.search.brave.com/Etm0I-Pes-OhGV8qChrr8IPg6-ZszM0YvTAezVKgUXU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sdW1p/ZXJlLWEuYWthbWFp/aGQubmV0L3YxL2lt/YWdlcy9wX2Rpc25l/eXBsdXNvcmlnaW5h/bHNfdGhlbWFuZGFs/b3JpYW5fczJfcG9z/dGVyX3JlYnJhbmRf/ZDE5NTJiNDMuanBl/Zw",
    story: "https://imgs.search.brave.com/X1eIahyHnqgL5RVcqn8e5m9cPR-WjRVhfifhxlDXSe4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1XSTVNalEz/TmprdFlqVmtOaTAw/TURkakxUazROMkl0/WWpWbE0yWmlNVEUx/WVRWaVhrRXlYa0Zx/Y0djQC5qcGc"},
    {dp: "https://imgs.search.brave.com/zxdKGTSBp_9w72G-KS7jHmRLuSDbZXn2Pbg2iuJSQAM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzQ4L2Uw/L2ZiLzQ4ZTBmYjM4/YzM0MWI0YzU1OGU2/ZDM0ODAwODFiY2Ew/LmpwZw",
    story : "https://imgs.search.brave.com/0s1VcX3Ea3loIsrSUJ2va4ThhifDvx6d4d_RhbNAU1A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI0/NzU3MDIwMi9waG90/by9wZWRyby1wYXNj/YWwtYXQtdGhlLWxh/dW5jaC1ldmVudC1m/b3Itc2Vhc29uLTMt/b2YtdGhlLW1hbmRh/bG9yaWFuLWhlbGQt/YXQtZWwtY2FwaXRh/bi10aGVhdHJlLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1D/VGFueVVIMC01NzNu/OGRPMUZ6Q0FYVG9N/b3ltamNnbUxaeVhq/ZlpRYTFRPQ" },
    {dp: "https://imgs.search.brave.com/uIUr_0EWmHvr2f6vPvDlCwkQ-uzgluI1Y3AQuPkHtHs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFDLXFtY2hHdlMu/anBn",
    story : "https://imgs.search.brave.com/Uy92YssR3pWU6w4cfIZbWvZ9yhN6YCQ1mop7SNZ4hyU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9yZW5k/ZXIuZmluZWFydGFt/ZXJpY2EuY29tL2lt/YWdlcy9pbWFnZXMt/cHJvZmlsZS1mbG93/LzQwMC9pbWFnZXMv/YXJ0d29ya2ltYWdl/cy9tZWRpdW1sYXJn/ZS8zL3RoZS1tYW5k/YWxvcmlhbi1tYXJ0/aW4tZnJpZW5kLmpw/Zw"},
]

var storiyan = document.querySelector("#storiyan")
var clutter = "";
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id= "${idx}" src="${elem.dp}" alt="">
            </div>`;
})

console.log(clutter)

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function(dets){
   document.querySelector("#full-screen").style.display = "block";
   document.querySelector("#full-screen").style.backgroundImage =  `url(${arr[dets.target.id].story})`;

   setTimeout(function (){
    document.querySelector("#full-screen").style.display = "none"; 
   },3000)
})
