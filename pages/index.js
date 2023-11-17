
import { Inter } from 'next/font/google';

import { SupabaseClient, createClient } from '@supabase/supabase-js';



const supabaseUrl = 'https://fyzmzhlqlrtqkxxeepft.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5em16aGxxbHJ0cWt4eGVlcGZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ1NDA2ODAsImV4cCI6MjAxMDExNjY4MH0.M0nXpkaAtxOefJLMQjbNmnANoDzk7qViqv-cwWm3GrE'
const supabase = createClient(supabaseUrl, supabaseKey)

// console.log(supabase);

let { data: creators, error } = await supabase
  .from('creators')
  .select('*')

  // console.log(creators);

  // button to copy row
  // const handleClick = (e) => {

  //   // get the container
  //   const element = document.getElementById('title');

  //   // Create a fake `textarea` and set the contents to the text
  //   // you want to copy
  //   const storage = document.createElement('textarea');
  //   storage.value = element.innerHTML;
  //   element.appendChild(storage);
   
  
  //   // Copy the text in the fake `textarea` and remove the `textarea`
  //   storage.select();
  //   storage.setSelectionRange(0, 99999);
  //   document.execCommand('copy');
  //   element.removeChild(storage);

  //   alert('row copied');
  // }
  

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div>
        <h1 className='text-3xl text-center'>
          Community Highlights db
        </h1>
      </div>

      <section>

     <ul >


      {creators.map((authors, id) => (
      <li id="title" key={id}> {authors.title} < br />
      <a id="url" href={authors.url}>{authors.url} </a>
      {/*<button className='p-2 mx-3 rounded-full border-solid border-2' onClick={handleClick}> Copy Title </button> */}
    
      </li> 
      
      ))} 
     
     </ul>

      </section>
    </main>
  )
}
