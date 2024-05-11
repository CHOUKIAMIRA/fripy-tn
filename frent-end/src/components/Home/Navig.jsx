import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../App.css";
function Navig() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Style pour le contenu du modal
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    height: "600px",
    backgroundColor: "transparent", // Rend le fond transparent pour afficher l'image
    border: "none",
    borderRadius: "30px",
    boxShadow: 24,
    p: 4,
    backgroundImage: "url('src/assets/men.avif')",
    backgroundSize: "cover", // Ajustement de la taille de l'image
    backgroundPosition: "center", // Positionnement de l'image
  };

  return (
    <div>
      <Navbar expand="lg" style={{ backgroundColor: "red" }}>
        <Container>
          <Nav className="me-auto">
            {/* homme */}
            <div>
            <Button onClick={handleOpen} style={{ color: "white" }}>
              Homme
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
            >
              <Fade in={open}>
                <Box sx={modalStyle} >
                  <Typography id="transition-modal-title">
                   <br/><a style={{cursor:"pointer",color:"red",fontSize:"25px"}}>Tous les produits homme</a> <br/><br/>
                  </Typography>
                  <Typography id="transition-modal-description" >
                    <div style={{display:"flex",justifyContent:"center",gap:"1000px",marginTop:"40px"}}>
                    <div>
                    <a>Manteaux & Vestes</a>
                    <br />
                    <br />
                    <a>Costumes & Blazers</a>
                    <br />
                    <br />
                    <a>Pantalons</a>
                    <br />
                    <br />
                    <a>shorts</a>
                    <br />
                    <br />
                  
                    </div>
                    
                    <div>
                    <a>sous-vêtements</a>
                    <br />
                    <br />
                    <a>sur-vêtements</a>
                    <br />
                    <br />
                    <a>Espadrilles</a>
                    <br />
                    <br />
                    <a>Accessoires</a>
                    </div>
                    <div>
                    <a>Capuches & Gilets</a>
                    <br />
                    <br />
                    <a>Maillots</a>
                    <br />
                    <br />
                    <a>Tenues de travail</a>
                    <br />
                    <br />
                    </div>
                    </div>
                    
                  </Typography>
                </Box>
              </Fade>
            </Modal>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* femme */}
            <Button onClick={handleOpen} style={{ color: "white" }}>
              Femme
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              open={open}
              onClose={handleClose}
              closeAfterTransition
            >
              <Fade in={open}>
                <Box sx={modalStyle} >
                  <Typography id="transition-modal-title">
                   <br/><a style={{cursor:"pointer",color:"red",fontSize:"25px"}}>Tous les produits femme</a> <br/><br/>
                  </Typography>
                  <Typography id="transition-modal-description" >
                    <div style={{display:"flex",justifyContent:"left",gap:"70px",marginTop:"40px"}}>
                    <div>
                    <a>Manteaux & Vestes</a>
                    <br />
                    <br />
                    <a>Costumes & Blazers</a>
                    <br />
                    <br />
                    <a>Pantalons</a>
                    <br />
                    <br />
                    <a>shorts</a>
                    <br />
                    <br />
                  
                    </div>
                    
                    <div>
                    <a>sous-vêtements</a>
                    <br />
                    <br />
                    <a>sur-vêtements</a>
                    <br />
                    <br />
                    <a>Espadrilles</a>
                    <br />
                    <br />
                    <a>Accessoires</a>
                    <br />
                    <br />
                    <a>Capuches & Gilets</a>
                    <br />
                    <br />
                    <a>Maillots</a>
                    <br />
                    <br />
                    <a>Tenues de travail</a>
                    <br />
                    <br />
                    </div>
                  
                    
                   
                    </div>
                    
                  </Typography>
                </Box>
              </Fade>
            </Modal>

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navig;
