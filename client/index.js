//can put in body tag with defer
//can put in body
//have script load, but use document.addevent

// document.addEventListener('DOMContentLoaded', () => {
//     //create the elements that I want
//     const body = document.querySelector('body')
    
//     const input = document.createElement('input');
//     input.id = 'message-input'
//     //change type to input

//     const button = document.createElement('button');
//     button.innerText = 'click to message';
  

//     // //give the button some functionality
//     // //make request to the database

//     body.appendChild(input);
//     body.appendChild(button);

//     //onclick eventhandler
//     button.addEventListener('click', async(e)=>{
//         e.preventDefault();
//         console.log(messageInput.value);

//         //create fetch object
//         let fetchOptions = {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json'},
//             body: JSON.stringify({message: messageInput.value})
//         }

//         try{
//             const respnose = await fetch('/newMessage', fetchOptions);
//             const resJSON = await response.json();
//             console.log(resJSON);
//         } catch (err){
//             console.log(err);
//         }
//     })

//     console.log(body)
// })

//create the elements that I want
const body = document.querySelector('body')
const messageInput = document.createElement('input');
//change type to input

const button = document.createElement('button');
button.innerText = 'click to message';

//give the button some functionality
//make request to the database

//onclick eventhandler
button.addEventListener('click', async(e) => {
    // e.preventDefault(); //don't need without submit

    //create fetch object
    let fetchOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ message: messageInput.value })
    };

    try{
        const response = await fetch('/newMessage', fetchOptions)
        console.log('response', response)

        const resJSON = await response.json();
        console.log('resJSON:', resJSON)

        const newText = document.createElement('div');
        newText.innerText = resJSON.message;
        body.appendChild(newText);
    } catch (err){
        console.log(err);
    }
})

body.appendChild(messageInput);
body.appendChild(button);

//if you make a form, prevent reload


