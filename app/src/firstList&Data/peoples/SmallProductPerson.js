export const SmallPerson = ({sampleData})=>{
    const {name,age,DOB} =sampleData;
    const date = new Date(DOB);
    console.log();
    return(
        <p>Name: {name}, Age: {age} years {date.toLocaleDateString()}</p>
    )
}