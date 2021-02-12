var tipsElement = document.getElementById("tips")
const tipsSections = [
    {
        title: "Apex",
        subTitle: "apex facts",
        id: "apex-legends",
 
        tips:[
            {
                description: "apex moments with a friend ",
                link: "https://www.youtube.com/watch?v=EjnnqF3fzwo&t=1s"
            },
        ],
    },
    {
        title: "ROTMG",
        subTitle: "rotmg facts",
        id: "rotmg",
        
        tips:[
            {
                description: "this is a knight PPE by myself ",
                link: "https://www.youtube.com/embed/Uo94VVWVseY"
            }
        ],
    },
    {
        title: "Minecraft",
        subTitle: "",
        id: "minecraft",
 
        tips:[
            {
                description: "just some minecraft random moments",
                link: "https://www.youtube.com/watch?v=Csn45sKJlFg"
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

    var pElement = document.createElement('p')
    pElement.innerText = section.subTitle
    pElement.classList.add("text-capitalize","col-12","text-center","smallermargin","mt-0") 


    sectionElement.append(h2Element)
    sectionElement.append(pElement)
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
