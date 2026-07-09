
const asyncHandeler = (fn) => async(req , res , next) => {
    try {
        await fn(req , res , next);
    } catch (error) {
        
        throw error;    
    }   
}       

export default asyncHandeler;    
