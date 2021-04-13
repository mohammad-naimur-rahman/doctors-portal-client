import React from 'react';
import featured from '../../../images/featured.png';

const FeaturedService = () => {
    return (
        <section className="container">
            <div className="row">
                <div className="col-lg-5">
                    <img src={featured} className='img-fluid px-3' alt="featured img" />
                </div>
                <div className="col-lg-6 p-5 ">
                    <h2>
                        Exceptional Dental Care, on Your Terms
                    </h2>
                    <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                    <button className="btn-main">
                        Learn more
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;