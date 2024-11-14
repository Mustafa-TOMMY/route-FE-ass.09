var quotArray =
    [

        {
            Qoute: "“Be yourself; everyone else is already taken.”",
            Auther: "Oscar Wilde",
        },

        {
            Qoute: "“So many books, so little time.”",
            Auther: "Frank Zappa",
        },

        {
            Qoute: "“A room without books is like a body without a soul.”",
            Auther: "Marcus Tullius Cicero",
        },

        {
            Qoute: "“You only live once, but if you do it right, once is enough.”",
            Auther: "Mae West",
        },

        {
            Qoute: "“Be the change that you wish to see in the world.”",
            Auther: "Mahatma Gandhi",
        },
    ]
var x
var B = []
var i

function random() {
    x = Math.floor(Math.random() * quotArray.length);
    switch (true) {
        case B.includes(x) == true && B.length < quotArray.length:
            do { x = Math.floor(Math.random() * quotArray.length) }
            while (B.includes(x));
            B.push(x);
            return x;
            break;
        case B.includes(x) == true && B.length == quotArray.length && B.indexOf(x) == B.length - 1:
            do { x = Math.floor(Math.random() * quotArray.length) }
            while (B.indexOf(x) == ((B.length) - (1)));
            B = []
            B.push(x);
            return x;
            break;
        case B.includes(x) == true && B.length == quotArray.length && B.indexOf(x) != B.length - 1:
            B = []
            B.push(x);
            return x;
            break;
        default:
            B.push(x);
            return x;
    }
    // if (B.includes(x) == true ) {
    //     if (B.length == quotArray.length) {
    //         if(B.indexOf(x) == (B.length)-(1)){
    //             do {x = Math.floor(Math.random() * quotArray.length)}
    //             while(B.indexOf(x) == ((B.length)-(1)))
    //             B = []
    //             B.push(x)
    //             return x
    //         }
    //         else {
    //             B = []
    //             B.push(x)
    //             return x
    //         }
    //     }
    //     else {

    //         do { x = Math.floor(Math.random() * quotArray.length) }
    //         while (B.includes(x))
    //         B.push(x);
    //         return x

    //         // while (B.indexOf(x) !== -1) {
    //         //     x = Math.floor(Math.random() * quotArray.length)
    //         // }
    //         // B.push(x);
    //         // return x
    //     }
    // }
    // else {
    //     B.push(x)
    //     return x
    // }

}

function newQuotes() {
    random()
    var i = x
    document.getElementById("quote").innerHTML = `Quote: ${quotArray[i].Qoute}`;
    document.getElementById("auther").innerHTML =`Auther:  ${quotArray[i].Auther}`;
    console.log(i, B);
}



