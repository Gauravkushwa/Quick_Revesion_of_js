function outerClosure(){
    const message = "Hello i am from Closure...!"

    function innerClosure(){
        console.log(message)
    }
    return innerClosure;
};

const exicuteClosure = outerClosure();
exicuteClosure();