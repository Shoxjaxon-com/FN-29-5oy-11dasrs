const wrapper = document.querySelector('.wrapper')
function ceratCard(value) {
    return `
        <div class="block">
                <h3>${value.name}</h3>
                <h3>${value.email}</h3>
                <h3>${value.body}</h3>
                <h3>${value.id}</h3>
            </div>
     `;
}

document.addEventListener('DOMContentLoaded', function () {
    fetch("https://jsonplaceholder.typicode.com/comments", {
        method: 'GET'
    })

        .then(response => {
            if (response.status == 200) {
                return response.json()
            }
            if (response.status == 404) {
                throw new Error('API ga notogri murojat qilindi')
            }
        })
        .then(data => {
            wrapper.innerHTML =''
            data.forEach(element => {
                let card = ceratCard(element);
                wrapper.innerHTML += card
            });
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            console.log('API g amurojat tugadi');

        })
});
