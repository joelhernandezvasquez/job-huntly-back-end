

export const Calendar = {
    getFormattedYMDDate:(date:Date):string =>{
        let year = date.getFullYear();
        let month = ('0' + (date.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-indexed
        let day = ('0' + date.getDate()).slice(-2);

        return `${year}-${month}-${day}`;
    }
}