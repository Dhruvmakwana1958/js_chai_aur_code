// scopes in function

function one(){
    const username = "Hitesh"

    function two(){
        const website = "Youtube"
        console.log(username) // ahi function two mate one() j global scop thy gyo mtlb block scop vada global ni value access kari sake 
    }
    // console.log(website) // ahi apde block ni anddar ni value mtlb block scop ni value global scope mtlb two() pase thi print karava magvi chia
    // je khotu che
    two() // have ane declare karyu che too call pan karvu pde ane e pan aa one() ni andar j karvu pade kem ke bar to na kari sakay kem ke 
    //block scop che
}
one()


/*ahi have su thy che ae samjava jai to ak example che nana vadil pase icecream magi sake pan vadil nana paase ny to ahi evu j kaik che
two() ma apde username ne access kari sakya kem ke two mate duniya one() che matlb global scope che to tuk ma em samji sakay ke child 
parent ne use kari sake but parent child ne no use kari sake mtlb username ne two() vada block ma use karii sakya but two() ni andar na
variable website ne baar thi use na kari sakaya*/



