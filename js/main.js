 
 let order=true
 function service(ms){
    return new Promise((resolve,reject)=>{
        if(order){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("Not order"))
        }
    })
}

async function online_order(){
    try{
        console.log('cheese barbeque pizza ordered');
        await service(2000)
        console.log('cheese barbeque pizza for preparation');
        await service(1000)
        console.log(`On the Way Pizzahub server`);
        await service(1000)
        console.log(`Succesfully Deliverd Thanks for your order`);

    }
    catch(err){
        console.log("Customer left");
    }
}
online_order()