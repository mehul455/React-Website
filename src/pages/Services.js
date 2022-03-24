import React from 'react'
import Servicecard from '../component/Servicecard'
const Services = () => {
    return (
     <section className="we-offer-area text-center">
        <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="site-heading text-center">
                    <h2>Our Services</h2>
                    <h4>Lorem Ipsum is simply dummy text</h4>
                </div>
            </div>
        </div>
            <div className="row our-offer-items less-carousel">
                <Servicecard icon="fas fa-pen-fancy" heading="Full Stack Development" paraghraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <Servicecard icon="fas fa-dharmachakra" heading="Software Development" paraghraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <Servicecard icon="fas fa-tasks" heading="Porject Management" paraghraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <Servicecard icon="fas fa-tachometer-alt" heading="Porject Impliment" paraghraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <Servicecard icon="fas fa-recycle" heading="Software Update" paraghraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <Servicecard icon="fas fa-headset" heading="24/7 Support" paraghraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
            </div>
    </div>
</section>
    )
}

export default Services
