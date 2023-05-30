const searchList = [
    "Homer",
    "Marge",
    "Bart",
    "Lisa",
    "Maggie",
    "Santa's Little Helper",
    "Snowball II",
]

const gridNames = [
    {id: "3,9", face: "Homer"},
    {id: "3,10", face: "Homer"},
    {id: "4,8", face: "Homer"},
    {id: "4,9", face: "Homer"},
    {id: "4,10", face: "Homer"},
    {id: "5,8", face: "Homer"},
    {id: "5,9", face: "Homer"},
    {id: "5,10", face: "Homer"},
    {id: "6,8", face: "Homer"},
    {id: "6,9", face: "Homer"},
    {id: "6,10", face: "Homer"},
    {id: "7,9", face: "Homer"},
    {id: "7,10", face: "Homer"},
]

function getName(targetSquare) {
    // console.log(targetSquare)
    let result = gridNames.find(entry => entry.id === targetSquare);
    if (result != undefined) {
        console.log(result.face);
    }
}

export  { getName }