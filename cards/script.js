let users = [
  {
    username: "Kiara Advani",
    img: "https://4kwallpapers.com/images/walls/thumbs_3t/6598.jpg",
    profession: "Actress",
    description: "Top Bollywood actress known for Kabir Singh and Shershaah.",
    tags: ["bollywood", "actress", "glamorous", "popular"]
  },
  {
    username: "Kriti Sanon",
    img: "https://wallpapers4screen.com/Uploads/4-7-2025/82381/thumb-kriti-sanon-4k-beauty-indian-actress-bollywood.jpg",
    profession: "Actress",
    description: "Award-winning actress known for versatility and strong roles.",
    tags: ["bollywood", "actress", "versatile", "award-winning"]
  },
  {
    username: "Sara Arjun",
    img: "https://starsbiohub.in/wp-content/uploads/2025/11/Screenshot-2025-11-21-232826.png",
    profession: "Actress",
    description: "Young actress who started her career as a child artist.",
    tags: ["child-artist", "actress", "young", "talent"]
  },
  {
    username: "Pooja Hegde",
    img: "https://4kwallpapers.com/images/walls/thumbs_3t/24205.jpg",
    profession: "Actress",
    description: "Popular South & Bollywood actress known for stylish roles.",
    tags: ["south-indian", "bollywood", "actress", "stylish"]
  }
];


var sum =" "

users.forEach(function(val){
 

 sum = sum + `<div class="card">
        <img src="${val.img}" alt="">
        <h3>${val.username}</h3>
        <h4>${val.profession}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, quibusdam assumenda!</p>
      </div>`


})


var main = document.querySelector('main')

main.innerHTML = sum