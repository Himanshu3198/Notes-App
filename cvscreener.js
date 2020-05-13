console.log('project 5')
const data =[
    {
        name:'Himanshu Sharma',
        age:21,
        language:"c++,java,python",
        framework:"javascript,React Native",
        city:"New Delhi",
        // image: 'https://randomuser.me/api/portraits/men/41.jpg',
        image:'hs.jpg',
        experience: " 2 years Microsoft sde",
        graduated:"Guru tegh Bahadur institute of technology"

    },
    { 
        name:'khusbu Sharma',
        age:20,
        language:"java,python",
        framework:"javascript,",
        city:"New York",
        image: 'https://randomuser.me/api/portraits/women/52.jpg',
        experience:  " 21 years in  Amazon sde",
        graduated:"National institute of technology"


    },
    {
        name:'lara pancholi',
        age:31,
        language:"python",
        framework:"React Native",
        city:"Bombay",
        image: 'https://randomuser.me/api/portraits/women/53.jpg',
        experience:  " 5 years in Goldsman Sachs",
        graduated:"Birla institute of technology"
    },
    {
        name:'vinita tyagi',
        age:28,
        language:"java",
        framework:"Django",
        city:"Kolkata",
        image:'https://randomuser.me/api/portraits/women/51.jpg',
        experience: " 1 years in Wipro ",
        graduated:"Indian institute of technology"


    },
    {
        name:'shobha Choudahary',
        age:21,
        language:"ruby",
        framework:"css,bootstrap",
        city:"Bhuvneshwar",
        image: 'https://randomuser.me/api/portraits/women/60.jpg',
        experience:  " 2 years in microsoft sde",
        graduated:"Netaji Subhash institute of technology"

    },
    {
        name:'chirag sharma',
        age:21,
        language:"c++,java,python",
        framework:"flask",
        city:"New Delhi",
        image: 'https://randomuser.me/api/portraits/men/61.jpg',
        experience:  " 16 years in Uber sde",
        graduated:"Vellore institute of technology"

    },
    {
        name:'robin Sharma',
        age:31,
        language:"c++,java,python",
        framework:"javascript,React Native",
        city:"Bihar",
        image: 'https://randomuser.me/api/portraits/men/54.jpg',
        experience: " 12 Google SDE",
        graduated:"Galgotia institute of technology"
 
    },
]
// iteratrate or traverse the cv
function iteratorcv(profiles)
{
    let nextIndex=0
  return{
      next: function()
      {
          return nextIndex<profiles.length?
          {value:profiles[nextIndex++],done: false}:{done:true}
      }
  };
}

const candidate=iteratorcv(data);
nextcv();
const next=document.getElementById('next');
next.addEventListener('click',nextcv)
function nextcv()
{
    console.log('yes its working finely')
    const information=candidate.next().value;
    let image=document.getElementById('image');
    let profile=document.getElementById('profile');
    if(information!=undefined)
    {
        image.innerHTML=`<img src='${information.image}'>`;
        profile.innerHTML=`<ul class="list-group"> 
        <li class="list-group-item">Name: ${information.name}</li>
        <li class="list-group-item"> age: ${information.age} years old</li>
        <li class="list-group-item"> languages: ${information.language}</li>
        <li class="list-group-item"> framework:  ${information.framework}</li>
        <li class="list-group-item"> experience: ${information.experience}</li>
        <li class="list-group-item"> graduate from: ${information.graduated}</li>
        <li class="list-group-item"> lives in: ${information.city}</li>
        </ul>`

    }
    else{
        alert('fetch all results thank you')
        window.location.reload();
    }
}


