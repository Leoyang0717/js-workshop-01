// TO DO
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('ul').addEventListener('click', function(li){
    console.log(li)
    // //按下任務會換色
    li.target.classList.toggle('checked')
    // 刪除任務
    document.querySelectorAll('.close').forEach(function(close) {
      close.addEventListener('click', function(){
        close.parentNode.remove()
      })
    })
  })

    // draggable='true'
    document.querySelectorAll('li').forEach(function(li){
      li.setAttribute('draggable', 'true')

    // 判斷對的話就把元素往下移或往上移
    li.addEventListener('drag', function(e) {
      let set = document.elementFromPoint(e.clientX, e.clientY)
      if(set!==e.target && e.movementY >=0) {
        set.insertAdjacentElement('afterend',e.target)
      } else if (set!==e.target && e.movementY <=0) {
        set.insertAdjacentElement('beforebegin',e.target)
      }
    })

    //target
    let ul = document.querySelector('ul')
    ul.addEventListener('dragenter', function(e){
      e.stopPropagation()
      e.preventDefault()
      console.log('loggggg')
    })
    ul.addEventListener('dragover', function(){
    })
    ul.addEventListener('dragleave', function(){
    })
  })

  //按下input 會新增list且span和input文字都有
  let addBtn =  document.querySelector('#addBtn')
  addBtn.addEventListener('click', function(){
    let newli = document.createElement('li')
    let newspan = document.createElement('span')
    newspan.textContent ='x'
    newspan.className = 'close'
    newli.textContent = document.querySelector('input').value
    newli.appendChild(newspan)
    document.querySelector('ul').appendChild(newli)
  })
})