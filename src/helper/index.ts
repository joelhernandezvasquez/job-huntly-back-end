

export const sanitizeFields = (objectData:any,fieldToExclude:string) =>{
   
    const entryFields = Object.entries(objectData);
    const validFields = entryFields.filter((key)=> key[0]!==fieldToExclude);

    return Object.fromEntries(validFields);
}