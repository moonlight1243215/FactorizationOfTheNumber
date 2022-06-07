const x = document.getElementById("x");
const w = document.getElementById("xx");
const number = [
    {
      
    }
];

function first() {
    number.splice(0, number.length);
    console.log(number);
    let n = Number(document.getElementById("inputBox").value);
    let i = 2;
    while(n != 1) {
        if(i > n) {
            number.push({ name: n, age: i })
        }
        else {
            if(n % i == 0) {
                number.push({ name: n, age: i })
                n = n / i;
            }
            else {
                if(n == 1) {
                   number.push({ name: 0, age: 0 })
                   return n;
                }   
                else {
                    i++;
                }
            }
        }
    }
    if(n == 1) {
        number.push({ name: n, age: 1 });
        number.push({ name: 1, age: "" });
    }
      

        number.forEach(item => {
            const createLi = document.createElement("div");
            const contentLi = document.createElement("div");
            contentLi.className = "third";


            
    
            contentLi.innerHTML = `
                <div class="box2 p">
                    <p class="first">${item.name}<p/>
                </div>
                <div class="box2">
                    <p class="second">${item.age}<p/>
                </div>
            
            `
    
            createLi.appendChild(contentLi)
            w.appendChild(createLi)
        })
    
}