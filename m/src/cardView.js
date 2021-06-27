import React, { useState, useEffect } from 'react';


export default function Carddisplay(props) {
    console.log(props,"props")
    const [count, setCount] = useState(0);

    const [count1, setCount1] = useState();
    const [fruit, setfruit] = useState('banana');


    useEffect(() => {
        setCount1(count1 + 1)
        setfruit('mango' + `${count1 + 1}`)
    }, [count]);

    return (
        <>
            <div className='col-lg-3'>
                <div class="col mb-5">
                    <div class="card h-100">
                        <img class="card-img-top" src="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg" alt="..." />

                        <div class="card-body p-4">
                            <div class="text-center">
                                <h5 class="fw-bolder">{props.i.name}</h5>
                                <div class='idselect'>
                                  <p class='idshow'>id:{props.i.id}</p> 
                                  <p>city:{props.i.address.city}</p>      
                                  </div>
                                    </div>
                        </div>
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><button class="btn btn-outline-dark mt-auto" onClick={()=>props.click(props.i)}>View profile</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}