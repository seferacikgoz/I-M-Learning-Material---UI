import Typography  from "@mui/material/Typography";
import Container  from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const TypoButtons = () => {
  return (
    <>
    <Container>
    <Typography 
    variant="h4" 
    component="h6"
    align="center" 
    mt={4}
    color="error">
      MUI Typography
    </Typography>
  
    <Typography variant="body1"  align="justify" mt={4} sx={{background:"lightgreen", 
      color:"#eee",
      fontSize:"1.4rem"}}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi iusto nesciunt ipsa sapiente. Dicta ipsum, pariatur magni id sunt ut!
    </Typography>
  
    <Typography variant="button" sx ={{display: "inline-block", marginTop:"2rem"}}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nobis similique rem officia incidunt maiores beatae alias. Cum harum pariatur incidunt totam dolores deleniti delectus ut tempore? Non, architecto id.
    </Typography>
    </Container>
    
    <Container>
    <Box sx={{display:"flex", flexDirection:"column", gap:"0.5rem"}}>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
    </Box>
    </Container>
    </>
  
  )
};

export default TypoButtons;
