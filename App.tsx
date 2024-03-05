import { PageHeader } from './PageHeader.tsx'
import { Component } from './Component.tsx'

export function App(){
  return (
    <>
     <PageHeader/>
     <main className="content" id="main">
       <div className="content_wrapper">
         <div className="content_main">
         <Component/>
         </div>
       </div>
     </main>
    </>
  )
}
