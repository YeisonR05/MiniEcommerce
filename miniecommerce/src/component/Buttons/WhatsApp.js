import React from 'react';

const FloatingWhatsAppButton = () => {
  const buttonStyle = {
    position: 'fixed',
    bottom: '35px',
    right: '30px',
    zIndex: '1000',
    padding: '15px', 
    background: '#25d366',
    color: 'white',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.15)', 
    cursor: 'pointer', 
    border: 'none' 
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+573225059783'; 
    window.open(`https://wa.me/${phoneNumber}?text=Hola`, '_blank');
  };

  return (
    <button style={buttonStyle} onClick={handleWhatsAppClick}>
      <i className="fa fa-whatsapp" style={{ fontSize: '40px' }}></i>  
    </button>
  );
};

export default FloatingWhatsAppButton;
