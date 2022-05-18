console.log(Math.ceil(6.1));

const obj1 = {}
    obj1.name = 'ball';
    //obj1['name'] = 'ballTwo'; 
    console.log(obj1.name);

    function obj (name) {
        this.name = name
        this.run = function() {
            console.log('Running...')
        }        
    };

const obj2 = new obj ('chair');
const obj3 = new obj('table');
console.log(obj2.name);
console.log(obj3.name);
obj3.run()
