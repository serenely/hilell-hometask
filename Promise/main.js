const inputId = document.querySelector('.input__id')
const inputDiv = document.querySelector('.input__div')
console.log(inputId);

inputId.addEventListener('keyup', () => {
    const getPost = (post) => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(responsePosts => responsePosts.json())
            .then(json => {
                const numOfPost = json[post]
                console.log(numOfPost)
                for (const key in numOfPost) {
                    const divElement = document.createElement('div');
                    divElement.innerHTML = `${key}: ${numOfPost[key]}`;
                    inputDiv.appendChild(divElement);

                }
                const btn = document.createElement('button')
                btn.classList.add('input__btn')
                inputDiv.append(btn)
                btn.addEventListener('click', (comment) => {
                    fetch(`https://jsonplaceholder.typicode.com/comments`)
                        .then(responseComments => responseComments.json())
                        .then(jsonComments => {
                            const numOfComment = jsonComments[inputId.value - 1]
                            console.log(numOfComment)
                        })
                })
            })
    }
    getPost(inputId.value - 1)
})

// inputDiv.append(inputId)
