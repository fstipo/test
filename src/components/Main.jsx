import React from 'react'

const Main = () => {
    console.log("Main.jsx");

    return (
        <>
            <div id="content" className="app-content">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">BREADCRUMB</a></li>
                    <li className="breadcrumb-item active">HOME PAGE</li>
                </ul>

                <h1 className="page-header">
                    Starter Page <small>page header description goes here...</small>
                </h1>

                <p>
                    Start build your page here
                </p>
            </div>
            {/* <!-- END #content --> */}
            {/* <!-- BEGIN btn-scroll-top --> */}
            <a href="#" data-click="scroll-top" className="btn-scroll-top fade"><i className="fa fa-arrow-up"></i></a>
            {/* <Child /> */}
        </>
    )
}

export default Main