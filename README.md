# Camagru2.0 - Instagram Clone

Camagru2.0 is an Instagram clone project built with Next.js and React.js. It aims to replicate some of the core features of Instagram, including user authentication, posting images, viewing others' posts, liking and commenting, and viewing your own profile page.

## Features

- **User Authentication:** Users can log in to the application using their Google account through NextAuth. This ensures secure and convenient authentication.

- **Posting Images:** Authenticated users can upload and publish new posts with images. These posts will be displayed on the home page and on the user's profile page.

- **Viewing Others' Posts:** Users can explore posts from other users on the home page. These posts will be displayed in a grid layout, allowing users to scroll and discover content.

- **Likes and Comments:** Users can engage with posts by liking them or leaving comments. This promotes interaction and enables users to express their opinions on specific posts.

- **Profile Page:** Authenticated users have access to their own profile page, where they can view only their own posts. This provides a personalized space for users to showcase their content.

- **Restricted Access:** If a user is not logged in, they can still view the home page and browse others' posts, but they won't be able to engage with them by liking or commenting.

## Tech Stack

The project is built using the following technologies:

- **Next.js:** A React framework that enables server-side rendering (SSR) and static site generation (SSG). Next.js simplifies the setup and allows for better performance and SEO optimization.

- **Tailwind CSS:** A utility-first CSS framework that provides a set of pre-defined styles and classes. Tailwind CSS allows for rapid styling and customization, making it easier to create a visually appealing and responsive user interface.

- **Firebase v9:** A cloud-based platform that provides various services for building web and mobile applications. In this project, Firebase v9 is used for authentication and storage of images.

- **Recoil:** A state management library for React that allows for predictable and efficient management of application state. Recoil helps in managing user-related data and post-related data.

- **NextAuth:** An authentication library for Next.js applications. It provides a simple and customizable way to implement authentication methods, including Google Sign-In for this project.

- **Hero Icons:** A set of free SVG icons designed for use in web projects. Hero Icons are used to enhance the visual appeal of the user interface.

- **Headless UI:** A set of completely unstyled, fully accessible UI components for React. Headless UI components are used to build interactive and accessible UI elements.

- **React Moment:** A React component library for formatting dates and times. React Moment is used to display the creation time of posts in a human-friendly format.

## Live Demo

Check out the live demo of the Camagru2.0: [Instagram Clone Live Demo](https://camagru-five.vercel.app/)
