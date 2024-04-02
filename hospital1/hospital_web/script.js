// fetch('/js/users.json')
//    .then(response => {
//      // handle response data
//    })
//    .catch(err => {
//      // handle errors
//    });
//    fetch('URL here')
// .then(res => res.json())
// .then(json => console.log(json));
// fetch('https://api.github.com/orgs/nodejs')
// .then(response => response.json())
// .then(data => {
//   console.log(data) // Prints result from `response.json()` in getRequest
// })
// .catch(error => console.error(error))
// fetch('/js/users.json')
//    .then(response => {
//      // handle response data
//    })
//    .catch(err => {
//      // handle errors
//    });

//    console.log('This is my tutorial 42');

// // Button with id myBtn
// let myBtn = document.getElementById("myBtn");

// // div with id content 
// let content = document.getElementById("content");

// // function getData(){
// //     console.log("Started getData")
// //     url = "harry.txt";
// //     fetch(url).then((response)=>{
// //         console.log("Inside first then")
// //         return response.text();
// //     }).then((data)=>{
// //         console.log("Inside second then")
// //         console.log(data);
// //     })
// // }

// function getData(){
//     console.log("Started getData")
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("Inside first then")
//         return response.json();
//     }).then((data)=>{
//         console.log("Inside second then")
//         console.log(data);
//     })
// }


// function postData(){
//     url = "http://dummy.restapiexample.com/api/v1/create";
//     data = '{"name":"harglry347485945","salary":"123","age":"23"}'
//     params = {
//         method:'post',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: data
//     }
//     fetch(url, params).then(response=> response.json())
//     .then(data => console.log(data)
//     )
// }

// // console.log("Before running getData")
// // getData()
// // console.log("After running getData")
// postData()






// fetch('https://reqres.in/api/users')
// .then(res =>console.log(res))


$.getJSON(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=$(".stock-name")&apikey=APIKEY`, 
  function(data){
    console.log(data);

    var date = data["Meta Data"]["3. Last Refreshed"];

    var stock = data["Meta Data"]["2. Symbol"];
    var info = data["Meta Data"]["1. Information"];
    var open = data["Time Series (Daily)"][date]["1. open"];
    var close = data["Time Series (Daily)"][date]["4. close"];
    var high = data["Time Series (Daily)"][date]["2. high"];
    var low = data["Time Series (Daily)"][date]["3. low"];
    var vol = data["Time Series (Daily)"][date]["5. volume"];


    var difference = close-open;


    $(".Stock-Name").append(stock);
    $(".info").append(info);
    $(".stock-open").append(open);
    $(".stock-close").append(close);
    $(".difference").append(difference);
    $(".date").append(date);
    $(".high").append(high);
    $(".low").append(low);
    $(".vol").append(vol);

    if(difference < 0){
      $(".stock").css("background-color", "red");
    }
    else{
      $(".stock").css("background-color", "green");

    }



  }
);

