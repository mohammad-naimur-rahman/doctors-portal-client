import React from 'react';
import wilson from '../../../images/wilson.png';
import BlogPost from '../BlogPost/BlogPost';

const blogData = [
    {
        title: 'Check at least a doctor in a year for your teeth',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: wilson,
        date: '23 April 2019'
    },
    {
        title: 'Two time brush in a day can keep you healthy',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Sinthia',
        authorImg: wilson,
        date: '23 April 2019'
    },
    {
        title: 'The tooth cancer is taking a challenge',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, placeat totam laborum maiores, esse assumenda porro error natus sit ipsam.        ',
        author: 'Dr. Cudi',
        authorImg: wilson,
        date: '23 April 2019'
    },
]

const Blog = () => {
    return (
        <div className='container-fluid p-5'>
            <h5 className='sub-heading'>
                our blog
            </h5>
            <h2 className='heading'>
                From Our Blog News
            </h2>
            <div className="row py-5">
                {
                    blogData.map(blog => <BlogPost key={blog.title} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blog;