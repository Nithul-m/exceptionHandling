let btn = document.getElementById('btn')
btn.addEventListener('click',function(){
    try {
        let value = document.getElementById('iV').value
        if(value == '') throw 'Age cannot be blank'
        if (isNaN(value)) throw 'Age should be a number'
    console.log(value);
        
    } catch (error) {
        alert(error);
    }
    finally{
        console.log('I run no matter what happens above');
    }
    
})

