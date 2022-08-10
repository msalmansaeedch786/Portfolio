import { SignalCellularNullOutlined } from "@mui/icons-material"
import axios from "../axiosInstance"

const mail = async(val)=>{
    let resolved = {
        error:null,
        data:SignalCellularNullOutlined
    }

    try {

        let res = await axios({
          url: "/sendmail",
          method:"POST",

          data:{
              name:val.fullName,
              email:val.email,
              message:val.message,
          }
        });

        resolved.data = res.data
        
    } catch (error) {

        resolved.error = "Something went wrong"
        
    }
    return resolved;
}

export {mail}