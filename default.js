const dynamic = document.querySelector('#dynamic');
const ide = document.querySelector('span');


const fetchadvice = async()=> {
    const file = 'https://api.adviceslip.com/advice'
    try {
        const resp = await fetch(file)
        if (!resp.ok) {
            console.log('e nur reach this side oo')
        }
        const data = await resp.json()
        dynamic.innerHTML = `"${data.slip.advice}"`;
        ide.innerHTML =`#${data.slip.id}`;
        // console.log(data.slip.advice);
    } catch (error) {
        return console.log('error dey oh smh');
    }
}


const change = ()=> {
    fetchadvice()
}