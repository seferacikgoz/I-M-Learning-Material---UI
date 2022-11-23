import Typography  from "@mui/material/Typography";
import Container  from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField  from "@mui/material/TextField";

const TextFieldComp = () => {
  return (
    <div>
        <Container>
            <Typography variant="h4" color="error" align="center" mt={4}>
                TEXT FİELD
            </Typography>
            <Box sx={{mt:4}}>
                <TextField id="email" 
                label="Email" 
                placeholder="Enter your email"
                fullWidth
                error={true}
                />
            </Box>
        </Container>
    </div>
  )
}

export default TextFieldComp