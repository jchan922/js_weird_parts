// function test(){
//     console.log("====HELLO WORLD====")
// }
//
// test();

var globalVar = {
	colorRand: ""
};

var dataSet = [
    {
        "type": "home",
        "number": "212-555-1234"
    },
    {
        "type": "mobile",
        "number": "646-555-4567"
    },
    {
        "type": "work",
        "number": "651-555-0000"
    }
];

dataSet = JSON.stringify(dataSet);
dataSet = JSON.parse(dataSet);

function render(array){
	var list = document.getElementById("list");
    var liNodes = list.getElementsByTagName("li");
	for(var i=0; i<array.length; i++) {
        getRandomColor();
        if(i < liNodes.length) {
            liNodes[i].style.color = globalVar.colorRand;
        } else {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(array[i].type +": "+ array[i].number));
            li.style.color = globalVar.colorRand;
    		list.appendChild(li);
        }
	}
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for(var i=0; i<6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
	globalVar.colorRand = color;
    return color;
}

function start() {
	return render(dataSet);
}

setInterval(start, 1000);
