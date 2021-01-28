var tipsElement = document.getElementById("tips")
const tipsSections = [
    {
        title: "Apex",
        id: "apex-legends",
 
        tips:[
            {
                description: "",
                link: "https://www.youtube.com/embed/Uo94VVWVseY"
            },
            {
                description: "",
                link: "https://www.youtube.com/embed/Uo94VVWVseY"
            }
        ],
    },
    {
        title: "ROTMG",
        id: "rotmg",
        
        tips:[
            {
                description: "",
                link: "https://www.youtube.com/embed/Uo94VVWVseY"
            }
        ],
    },
    {
        title: "Minecraft",
        id: "minecraft",
 
        tips:[
            {
                description: "",
                link: "https://www.youtube.com/embed/Uo94VVWVseY"
            }
        ],
    }
]

tipsSections.forEach(function(section) {
    var sectionElement = document.createElement('section')
    sectionElement.classList.add("col-12")

    var h2Element = document.createElement('h2')
    h2Element.setAttribute("id", section.id)
    h2Element.innerText = section.title
    h2Element.classList.add("text-capitalize","col-12","text-center","margin") 

    sectionElement.append(h2Element)

    var articleElement = document.createElement('article')
    articleElement.classList.add("col-12")
    

    var ulElement = document.createElement('ul')
    ulElement.classList.add("list-group")

    section.tips.forEach(function(tip){
        var liElement = document.createElement('li')
            
        liElement.classList.add("list-group-item","d-flex","align-items-center","tip-text-size")
        liElement.innerHTML = `
            ${tip.description}
            <div class="ml-auto w-50 maxwidth530 flex-shrink-0">
                <div class="youtube-dimensions video-shadow">
                    <iframe width="100%" height="100%" src="${tip.link}" frameborder="0" allow="accelerometer; autoplay; clipboard-write;  encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        `
        ulElement.append(liElement)
    })
   

    articleElement.append(ulElement) 
    sectionElement.append(articleElement)
    
    tipsElement.append(sectionElement) 
})
