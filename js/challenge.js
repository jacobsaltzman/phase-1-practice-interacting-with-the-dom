document.addEventListener("DOMContentLoaded", () =>{
  incrementCounter()
  interval()
  plusButton()
  minusButton()
  createComment()
  countHeart()
})



function incrementCounter(){
  let counter = document.getElementById("counter")
  counter.textContent = parseInt(counter.textContent, 10) +1
}

function plusButton(){
  const plus = document.getElementById("plus")
  plus.addEventListener("click", incrementCounter)
}

function minusButton(){
  const minus = document.getElementById("minus")
  minus.addEventListener("click", () => {
    let counter = document.getElementById("counter")
    counter.textContent = parseInt(counter.textContent, 10) -1
  })
}

function interval(){
  let time = setInterval(incrementCounter, 1000)
  function pauseButton(){
    const pause = document.getElementById("pause")
    pause.addEventListener("click", () => {
      if(pause.innerText === "pause"){
      clearInterval(time);
      return pause.innerText = "resume"
      }
      else(pause.innerText === "resume")
          time = setInterval(incrementCounter, 1000)
       return pause.innerText = "pause"
      
    })
  
  } pauseButton()
}


function createComment(){
  let commentForm = document.querySelector("#comment-form")
  commentForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const list = document.getElementById("list")
    let li = document.createElement("li")
    li.innerText = e.target[0].value
    list.appendChild(li)
    commentForm.reset()
  })
}

function countHeart (){
  const heart = document.getElementById("heart")
  let likesObj = {}
  heart.addEventListener("click", () =>{
    let currentCount = document.getElementById("counter").textContent
    //console.log(currentCount)
    if(likesObj[currentCount]){
      let li = document.getElementById(currentCount)
      console.log(li)
      likesObj[currentCount] += 1
      li.innerText = `${currentCount} has been liked ${likesObj[currentCount]} times.`
    }
    else{
      likesObj[currentCount] = 1
      let li = document.createElement("li")
      let likesUL = document.querySelector(".likes")
      likesUL.appendChild(li)
      li.id = currentCount
      //console.log(li.id)
      li.innerText = `${currentCount} has been liked ${likesObj[currentCount]} time.`
      
    }

      
  })
}


