import React from 'react';

const BlogPost = ({ blog }) => {
    const { title, description, author, authorImg, date } = blog;
    return (
        <div className='col-lg-4 col-md-6'>
            <div className="p-3 m-2 shadow">
                <div className="d-flex align-items-center">
                    <img src={authorImg} alt="author" className='mx-3' style={{ width: '50px', height: '50px' }} />
                    <div>
                        <p className="text-secondary fw-bold">
                            {author}
                        </p>
                        <p className="text-secondary">
                            {date}
                        </p>
                    </div>
                </div>
                <h3 className="py-2">
                    {title}
                </h3>
                <p className="py-1 text-secondary">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default BlogPost;