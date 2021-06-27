import React from 'react';

export default function Showpage(props) {
    console.log(props.data, "ssssssss")
    return (
        <>
            <div class="card mb-4">
                <div class="card-header">Categories Details</div>
                <div class="card-body">
                    <div>
                        Welcome Mr.{props.data.name}, this is your details then please check with here...
                        You're going to be a valuable asset to our company, and we can't wait to see all that you accomplish. The entire team of [name of the company] is thrilled to welcome you on board. We hope you'll do some amazing works here! A warm welcome and lots of good wishes on becoming part of our growing team.
                    </div>
                    <div class="row">
                        <div class="col-lg-6 ">
                            <ul class="list-unstyled mb-0">
                                <li>id:{props.data.id}</li>
                                <li>name:{props.data.name}</li>
                            </ul>
                        </div>
                        <div class="col-lg-6">
                            <ul class="list-unstyled mb-0">
                                <li>email:{props.data.email}</li>
                                <li>username:{props.data.username}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}