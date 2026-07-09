class Apiresponse{
    constructor(statusCode, message, data){ 
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success=statuscode<400;
    }
}
export default Apiresponse;