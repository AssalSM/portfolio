
import { useState } from 'react';
import  './main.css';
const myproject = [
  {projecttitle:"react project" , category: 'react', imgpath: './2.jpeg'},
  {projecttitle:"js project" , category: 'js', imgpath: './1.jpeg'},
  {projecttitle:"css project" , category: 'css', imgpath: './3.jpeg'},
  {projecttitle:"node project" , category: 'node', imgpath: './4.jpeg'}

]
 const Main = () => {
  
  const [courrentAvtive, setcourrentAvtive] = useState("all");
 
  const [arr, setArr] = useState(myproject);
  
  return (
    <main className='flex '>


     <section className=' flex  left-section'>
      <button onClick={(() => {
      setcourrentAvtive("all");
      const newarr = myproject.filter((item) => {
        return item.category
      }
      )

      
      setArr(newarr);


      })} className={courrentAvtive === "all" ? 'active' :null }
      >all project</button>

      <button onClick={() => {
        setcourrentAvtive("css");

       const newarr = myproject.filter((item) => {
         return item.category === "css"
       }
       )

       
       setArr(newarr);



      }}
        className={courrentAvtive === "css" ? 'active' :null } 
      >HTML & CSS</button>

      <button
      onClick={(() => {
        setcourrentAvtive("js");
        const newarr = myproject.filter((item) => {
          return item.category === "js"}
          )
   
          
          setArr(newarr);
      })} className={courrentAvtive === "js" ? 'active' :null }
      >javaScript</button>

      <button
      onClick={(() => {
        setcourrentAvtive("react");
        const newarr = myproject.filter((item) => {
          return item.category === "react"
        }
        )
 
        
        setArr(newarr);
      })} className={courrentAvtive === "react" ? 'active' :null }
      >reactjs</button>

      <button
      onClick={(() => {
        setcourrentAvtive("node");
        const newarr = myproject.filter((item) => {
          return item.category === "node"
        }
        )
 
        
        setArr(newarr);
      })} className={courrentAvtive === "node" ? 'active' :null }
      >Node & express</button> 




     </section>


     <section className='  flex right-section'> 
     {arr.map((item) => {
        return (
          <article key={item.imgpath} className='card'>

          <img width={266} height={140} src={item.imgpath} alt="" />
     <div style={{width:"266px"}} className="  box">
       <h1 className='title'>{item.projecttitle}</h1>
       <p className='subtitle'> Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                 tempore dolor in, accusantium laudantium accusamus.</p>
       <div  className="flex icons">
         <div style={{gap: "11px"}} className='flex' >
         <i className="material-icons-outlined a">link</i>
         <i className="material-icons-outlined a">link</i>
         </div>
         <div >
           <a className='link' href="">menu</a>
         </div>

       </div>
     </div>
    </article>
        );
     })}
     </section>
    </main>
  );
}
export default Main;