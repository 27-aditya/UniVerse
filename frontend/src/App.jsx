import React, { useState } from 'react';
import './App.css';
import Header from './header';
import PostForm from './postform';
import Thread from './thread';
import AuthModal from './authmodal.jsx';
import Posts from './post.jsx';


function App() {

  const [showModal, setShowModal] = useState(true);
  const handleCloseModal = () => {
    setShowModal(false);
    console.log('handleCloseModal called');
  };

  return (
    <div>
      <Header/>
      <PostForm/>
      {showModal && <AuthModal show={showModal} onClose={handleCloseModal} />}
      <Thread/>
      <Posts/>
    </div>
  );
}

export default App;
