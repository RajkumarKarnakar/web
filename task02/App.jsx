'use strict'

const formData =[55,undefined,'rajkumar'];

formData.forEach((elem)=>{
    console.log(`\n${elem}:`);
    console.table({
        // 'new String()':{
        //     result : `${new String(elem)}`,
        //     'data type': `${typeof new String(elem)}`
        // },
        // toString : {
        //     result: `${elem.toString()}`,
        //     'data type': `${typeof elem.toString()}`,
        // },
        'String()' :{
            result:`${String(elem)}`,
            'data type': `${typeof String(elem)}`
        },
    });
});