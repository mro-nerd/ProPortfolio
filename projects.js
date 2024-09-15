// delete projects array if you want to make your own project data.

let projects = [
    
    {
        name: 'MERN Estate',
        about: 'This project is designed to provide a comprehensive solution for managing real estate listings, featuring user authentication, Google sign-in, image storage via Firebase, profile updates, listing creation and management, advanced search capabilities, and a communication channel for user queries.',
        tags:  '#fullstack, #backend, #javascript',
        live: 'https://mern-estate-9i0q.onrender.com',
        github: 'https://github.com/mro-nerd/EstateApp.git',
        image: 'img/pro-1.png',
        languages: {
            html: '2%',
            css: '2%',
            javascript: '90%',
            reactjs: '95%',
            nodejs: '60%',
            database: '40%',
            tailwind: '40%',
            other: '5%',
        }
    },
    {
        name: 'Simple Parallax blog site',
        about: 'This project is my first web development project! This project showcases a simple yet elegant blog website created using HTML and CSS. The highlight of this project is the implementation of a parallax effect using CSS to enhance the visual appeal of the site.',
        tags: '#html ,#css ,#frontend',
        live: 'https://github.com/mro-nerd/Parallax.git',
        github: 'https://github.com/mro-nerd/Parallax.git',
        image: 'img/pro1.png',
        languages: {
            html: '90%',
            css: '80%',
            javascript: '0%',
            reactjs: '0%',
            nodejs: '0%',
            database: '0%',
            tailwind: '0%',
            other: '0%',
        }
    },
    {
        name: 'Rayzorpay clone',
        about: 'This web application serves as a simplified clone of the Razorpay payment gateway, created using HTML and Tailwind CSS. Explore the various features and functionalities inspired by Razorpay',
        tags: '#frontend, #tailwind, #html',
        live: 'https://github.com/mro-nerd/razorpayClone.git',
        github: 'https://github.com/mro-nerd/razorpayClone.git',
        image: 'img/pro-3.png',
        languages: {
            html: '90%',
            css: '90%',
            javascript: '0%',
            reactjs: '0%',
            nodejs: '0%',
            database: '0%',
            tailwind: '0%',
            other: '1%',
        }
    },
    {
        name: 'weather web-app',
        about: ' This web application provides real-time weather information for your current location (with location permission) or any desired location. It utilizes a weather API to fetch accurate weather details.',
        tags: '#css, #frontend, #javascript, #html',
        live: 'https://github.com/mro-nerd/WeatherApp.git',
        github: 'https://github.com/mro-nerd/WeatherApp.git',
        image: 'img/pro4.png',
        languages: {
            html: '30%',
            css: '30%',
            javascript: '60%',
            reactjs: '0%',
            nodejs: '0%',
            database: '0%',
            tailwind: '0%',
            other: '0%',
        }
    },
    {
        name: 'react top course',
        about: 'This React application showcases an interface for an online course site. Discover various courses presented as card components, filter courses by category, and engage with the like/dislike feature, complete with a user-friendly toast notification system.',
        tags: '#frontend, #javascript,  #reactjs',
        live: 'https://github.com/mro-nerd/topCourse.git',
        github: 'https://github.com/mro-nerd/topCourse.git',
        image: 'img/pro-5.png',
        languages: {
            html: '20%',
            css: '10%',
            javascript: '70%',
            reactjs: '70%',
            nodejs: '0%',
            database: '0%',
            tailwind: '0%',
            other: '1%',
        }
    },
    {
        name: 'recat-redux shopping app',
        about: 'This React-Redux application provides a dynamic e-commerce interface where users can explore various products displayed in card components. The site features Home and Cart tabs, allowing users to navigate seamlessly. Enhance your shopping experience by adding products to the cart, complete with a toast notification for a delightful user interaction.',
        tags: '#javascript, #reactjs, #frontend',
        live: 'https://github.com/mro-nerd/reduxShoppingApp.git',
        github: 'https://github.com/mro-nerd/reduxShoppingApp.git',
        image: 'img/pro-6.png',
        languages: {
            html: '4%',
            css: '2%',
            javascript: '90%',
            reactjs: '90%',
            nodejs: '0%',
            database: '0%',
            tailwind: '0%',
            other: '0%',
        }
    },
    {
        name: 'chat-gpt clone',
        about: 'This React application mimics the functionality of Chat-GPT, allowing users to ask questions and receive responses powered by the OpenAI API. Experience the magic of conversing with an AI model in a simple chat interface.',
        tags: '#reactjs, #frontend,  #javascript',
        live: 'https://github.com/mro-nerd/chatGptClone.git',
        github: 'https://github.com/mro-nerd/chatGptClone.git',
        image: 'img/pro7.png',
        languages: {
            html: '4%',
            css: '2%',
            javascript: '90%',
            reactjs: '95%',
            nodejs: '0%',
            database: '0%',
            tailwind: '0%',
            other: '0%',
        }
    },
    {
        name: 'Chat App',
        about: 'This MERN (MongoDB, Express.js, React, Node.js) application offers a complete chat experience with features such as user authentication using JWT, Firebase authentication for Gmail, Facebook, and GitHub logins, avatar customization, real-time chat functionality via Socket.IO, and the ability to send emojis to other users.',
        tags: '#css, #reactjs, #fullstack, #backend, #javascript',
        live: 'https://github.com/mro-nerd/chatApp.git',
        github: 'https://github.com/mro-nerd/chatApp.git',
        image: 'img/pro8.png',
        languages: {
            html: '2%',
            css: '3%',
            javascript: '90%',
            reactjs: '55%',
            nodejs: '50%',
            database: '20%',
            tailwind: '0%',
            other: '40%',
        }
    },
    {
        name: 'Blogging-app',
        about: 'This feature-rich application provides a complete blogging experience with user authentication using JWT. Users can explore blogs created by others, search for specific blogs, read and comment on posts, update and delete their profiles, and create, update, and delete their own blogs with titles, categories, images, and detailed descriptions.',
        tags: '#javascript, #fullstack, #reactjs, #nodejs',
        live: 'https://github.com/mro-nerd/BlogApp.git',
        github: 'https://github.com/mro-nerd/BlogApp.git',
        image: 'img/pro9.png',
        languages: {
            html: '2%',
            css: '3%',
            javascript: '90%',
            reactjs: '50%',
            nodejs: '55%',
            database: '25%',
            tailwind: '0%',
            other: '40%',
        }
    }
];

let projectGallery=document.querySelector('.project-gallery');

const createProjects = (data) =>{
    projectGallery.innerHTML += `
    <a href="#project-info" class="project-card" data-tags="${data.tags}" data-info='${JSON.stringify(data)}'>
        <img src="${data.image}" class="project-image" alt="">
        <span class="tags">${data.tags}</span>
        
    </a>` ;
}

projects.map((project,i)=>{
    createProjects(project);
})

setUpProfileInfo(projects[0]);