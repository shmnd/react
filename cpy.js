// node cpy.js   (paste this in terminal to get output)

// Normal function

        // function message(){
        //     console.log('It is a beautifull morning');
        // }

        // message();


// Anonymus function 

    // it does'nt have name 

    //    let fun = function(){
    //         console.log('A function without function name its called anonymus function ,It is example for anonymus function');
    //     }

    //     fun();



// Arrow function

        // let abc = () => console.log('Hello world');


        // abc();



// ARROW FUNCTIOIN USING ARGUEMENTS AND PARAMETERS

        // let sum = (a,c) => console.log(a+c)

        // sum(5,15);



    
// ARROW FUNCTION USING  IF CONDITIONS

        // let negative = (a) => {if (a>0){
        //     console.log('positive')
        // } else {
        //     console.log('negative')
        // }
        // }

        // //  negative(10);
        // negative(-10);


                                // if we don't give cruly bracket of arrow function it return all the data's inside the bracket and don't need to use return statement

// Arry destructuring
        
        // const arr=[1,2,3,4]
        // const [j,k,l,m]=arr
        // console.log(j,k,l,m)


// SPREAD OPERATOR 
        // without using spread operator
                // let num=[1,2,3,4,5]
                // let maxima= Math.max(num) //without using spread operator
                // console.log(maxima)
                // output=
                // PS C:\Users\user\Desktop\react project> node cpy.js
                // NaN




        // with spread operator
                // num=[1,2,3,4,5]
                // let maxima= Math.max(...num) //used 3 dots it's spread operator
                // console.log(maxima)
                //outupt:
                // PS C:\Users\user\Desktop\react project> node cpy.js
                // 5


                // let name='shamnad'
                // let username=[...name];
                // console.log(username)



                // output:
                        
                //         [
                //         's', 'h', 'a',
                //         'm', 'n', 'a',
                //         'd'
                //         ]


                // let fruits=['appple','orange','grape','water melon']

                // let vegies=['carrot','potatos','ginger','egg plant']

                // let food =[...fruits,...vegies,'egg','milk']

                // console.log(food)

                // output:
                //         [
                //         'appple', 'orange',
                //         'grape',  'water melon',
                //         'carrot', 'potatos',
                //         'ginger', 'egg plant',
                //         'egg',    'milk'
                //         ]