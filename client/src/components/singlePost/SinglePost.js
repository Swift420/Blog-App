import React from 'react';
import "./singlepost.css"
function SinglePost() {
  return (
  <div className='singlePost'>
     <div className='singlePostWrapper'>
         <img
         src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
         className='singlePostImg'
         />
         <h1 className='singlePostTitle'>
             Ullamco in duis occaecat non officia sunt quis anim.

             <div className='singlePostEdit'>
             <i className="singlePostIcon far fa-edit"></i>
             <i className="singlePostIcon fa-solid fa-trash"></i>
             </div>
         </h1>
         <div className='singlePostInfo'>
             <span className='singlePostAuthor'>Author: <b>Apollos</b></span> 
             <span className='singlePostDate'>1 hour ago</span> 
         </div>
         <p className='singlePostDesc'>
            Sit non ullamco id anim aliqua. Ipsum ea ipsum duis sit eiusmod esse id minim cillum duis non laborum occaecat exercitation. Aliqua nulla et aliqua nisi.

Sit ex ut consequat aliquip velit voluptate irure minim. Fugiat aute excepteur ex eiusmod anim cupidatat duis nostrud esse ullamco minim deserunt fugiat. Eiusmod dolor mollit nostrud officia exercitation dolor velit. Tempor consequat laboris esse culpa nostrud qui cupidatat.

Occaecat ut proident tempor labore est eu velit tempor amet non cupidatat mollit. Cillum consectetur consequat irure commodo Lorem minim fugiat in. Sit exercitation qui non exercitation nisi laboris ad adipisicing occaecat proident laborum culpa in. Veniam ea aliqua enim minim do esse ea exercitation officia laboris fugiat.

Do cupidatat deserunt sint amet officia nostrud. Ipsum sunt in aliqua non amet magna reprehenderit. Commodo elit duis et esse elit pariatur sit nisi cillum.

Reprehenderit elit nisi id voluptate dolor sint aliquip deserunt. Esse aute consequat dolor do aliquip culpa excepteur deserunt culpa nostrud qui ad ut do. Sunt do consequat est minim fugiat Lorem cillum veniam.
         </p>
     </div>
  </div>
  );
}

export default SinglePost;
