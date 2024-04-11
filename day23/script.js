let arr2 = [
    {
        name: 'Rahul', empId: 3567,
        mailId: 'mailme@gmail.com', Address: {
            City: 'Vijayawada',
            District: 'Krishna district', Pin: 526894,
        },
        Hobbies: ['Netflix', 'Tennis', 'Coding'],
    },
    {
        name: 'Ravi', empId: 9867,
        mailId: 'ravimail@gmail.com', Address: {
            City: 'Guntur', District: 'Prakasham district',
            Pin: 685479,
        },
        Hobbies: ['Reading', 'Swimming', 'Baking'],
    },
    {
        name: 'Santosh', empId: 8876,
        mailId: 'santoshmail@gmail.com', Address: {
            City: 'Warangal', District: 'Hanamkonda district',
            Pin: 996587,
        },
        Hobbies: ['Gym', 'Reading Novels'],
    },
    {
        name: 'Surya', empId: 3469,
        mailId: 'suryamail@gmail.com', Address: {
            City: 'Nazamabad',
            District: 'Nazamabad district', Pin: 648597,
        },
        Hobbies: ['Badminton', 'E-Sports', 'Netflix'],
    },
    {
        name: 'Kiran', empId: 8864,
        mailId: 'kirammail@gmail.com',
        Address: {
            City: 'Karimnagar',
            District: 'Karimnagar district', 
            pin: 666954,
        },
        Hobbies: ['Badminton', 'E-Sports', 'Netflix'],
    }
];




arr2.map((e)=>{
    let mainbox = document.createElement('div')
    mainbox.className='mainbox'
    mainbox.innerText=`Name : ${e.name}`
     var div2=document.createElement('div')

    mainbox.setAttribute('style',"border: 5px solid black;" )
    div2.innerText=`Employee Id: ${e.empId}`
    mainbox.appendChild(div2)
    visva.appendChild(mainbox)
    
   
    let innerBox= document.createElement('div')

innerBox.innerText=`ADDRESS`
let innerBo= document.createElement('div')
innerBo.innerText=`city:${e.Address.City}`
    innerBox.append(innerBo)
    
let innerBox1= document.createElement('div')
innerBox1.innerText=`Address:${e.Address.District}`
    innerBox.append(innerBox1)
    let innerBox2= document.createElement('div')
innerBox2.innerText=`pin:${e.Address.Pin}`
    innerBox.append(innerBox2)
    




    innerBox.className='innerbox'
    mainbox.appendChild(innerBox)
    let div3=document.createElement('div')
    div3.innerText=`Hobbies: ${e.Hobbies}`
    mainbox.appendChild(div3)

})

 