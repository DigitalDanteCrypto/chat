// import { setHelper } from './Chat';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CommandList from './CommandList'

/*function closeButton() {
    document.getElementsByClassName("helper")[0].style.display = "none";
}
*/
function Helper(state) {
//Défini l'état pour fermer la window
    return (
            <Autocomplete
    disablePortal
    id="combo-box-demo"
    options={CommandList}
    sx={{ width: 300 }}
    renderInput={(params) => <TextField {...params} label="" />}
    />      
    )
}








export default Helper;