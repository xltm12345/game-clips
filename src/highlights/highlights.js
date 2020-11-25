var highlightsElement = document.getElementById("highlights")

const highlights = [
    {
        title: "Knight PPE",
        youtubeLink: "https://www.youtube.com/embed/Uo94VVWVseY",
    }, 
    {
        title: "Loot Montage",
        youtubeLink: "https://www.youtube.com/embed/8GXtg9abBqA",
    }, 
    {
        title: "Knight PPE",
        youtubeLink: "https://www.youtube.com/embed/Uo94VVWVseY",
    }
]

function createHighlight(highlight) {
    return `
        <h2 class="text-capitalize">
            ${highlight.title}
        </h2>
        <div class="youtube-dimensions">
            <iframe width="100%" height="100%" src="${highlight.youtubeLink}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    `
}

function insertHighlight(highlight){
    var section = document.createElement('section')
    section.classList.add("col-12","col-md-6", "col-xl-4")
    section.innerHTML = createHighlight(highlight)
    highlightsElement.append(section)
}

highlights.forEach(insertHighlight)