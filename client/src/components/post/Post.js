import React from 'react';
import "./post.css"

function Post() {
  return (
  <div className='post'>
      <img 
      className='postImg' 
      src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      ></img>

      <div className='postInfo'>
          <div className='postCats'>
             <span className='postCat'>Life</span>
             <span className='postCat'>Music</span>
          </div>
          <span className='postTitle'>Aliquip tempor in adipisicing eiusmod dolore  </span>

          <hr/>
          <span className='postDate'>1 hour ago</span>
      </div>
      <p className='postDesc'>Excepteur ut sit nostrud tempor. Magna culpa ipsum in culpa irure qui cillum ea occaecat do nulla. Aliquip labore eiusmod fugiat aliqua. Deserunt anim elit dolore culpa incididunt. Do occaecat id esse irure dolore pariatur consectetur. Culpa et est ea duis aute eu velit est minim nostrud enim.

Esse dolore cupidatat et esse. Incididunt proident ex consectetur nisi in anim voluptate ipsum irure fugiat quis pariatur magna consectetur. Incididunt ad irure eiusmod mollit adipisicing id laborum fugiat nulla occaecat officia ea. Et consequat incididunt veniam elit amet exercitation. Elit incididunt nisi do et minim adipisicing veniam in et irure consequat mollit. Nulla labore officia adipisicing aute reprehenderit tempor consectetur nulla eu.</p>
  </div>
  );
}

export default Post;
