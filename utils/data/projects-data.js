import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'News',
        description: 'I designed and developed a fully functional Android-based news application in Kotlin. The application includes features such as retrieving breaking news, saving and unsaving news locally for offline reading, searching articles to find news on specific topics, and viewing news in an embedded WebView. I utilized NewsAPI to retrieve data, managed the local database with the Room persistence library, used Kotlin Coroutines for asynchronous programming, and applied the MVVM design pattern.',
        tools: ['Kotlin', 'Android Studio', 'Room', 'Retrofit', 'Glide'],
        role: 'Android Developer',
        code: '',
        demo: '',
        images: ['crefin', 'crefin']
    },
    {
        id: 2,
        name: 'Swift Notes',
        description: 'I developed a fully functional iOS application using Swift and SwiftUI to efficiently manage notes. The application includes features such as creating, editing, and deleting notes. I designed a user-friendly interface focusing on an intuitive user experience and accessibility with SwiftUI. Data persistence was ensured using SwiftData for local storage.',
        tools: ['Swift', 'SwiftUI', "SwiftData", "XCode"],
        role: 'iOS Developer',
        code: '',
        demo: '',
        images: ['crefin', 'crefin']
    },
    {
        id: 3,
        name: 'Chat Me',
        description: 'I designed and developed an Android-based chat application in Java with Firebase Services; Authentication, Storage, Realtime Database, Cloud Messaging as Backend. The application includes features such as authentication, email verification, consent-based personal contacts, real-time messaging with push notification, p2p communication, and profile management. I enhanced the project after a technical discussion with an Android software architect; applied MVVM design pattern, Broadcast Receiver, Shared Preferences, Background Service, and Activity Lifecycle Management. Iterated all project UI/UX after self-test loops. The purpose of the project is to learn and implement Android basics and gather them on a single project.',
        tools: ['Java', 'Firebase', 'MVVM', 'Broadcast Receiver', 'Shared Preferences', 'Background Service', 'Activity Lifecycle Management'],
        role: 'Android Developer',
        code: 'https://github.com/yourusername/chat-me',
        demo: '',
        images: ['crefin', 'crefin']
    },
    {
        id: 4,
        name: 'Conference Management System',
        description: 'I collaborated with a team of 4 people and developed a web-based conference management system using Java Spring Boot for the backend, MySQL as a relational database and HTML, CSS, JavaScript for frontend. I contributed to the backend of the application, implemented features such as submission of papers, review and selection process including double-blind reviewing system to ensure unbiased feedback. I conducted unit testing to ensure code quality and reliability. Additionally, I utilized Firebase Storage for saving papers as PDF files, ensuring efficient and secure document management. I integrated backend functionalities with the frontend, enabling features like paper submission and management. Followed Agile methodologies for project management, ensuring iterative development and continuous improvement.',
        tools: ['Java Spring Boot', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Firebase Storage', 'Agile'],
        role: 'Full Stack Developer',
        code: 'https://github.com/yourusername/conference-management-system',
        demo: '',
        images: ['crefin', 'crefin']
    },
    {
        id: 5,
        name: 'Anonymous Chat',
        description: 'I developed a web-based real-time chat application using Spring Boot for the backend, providing a scalable and robust architecture. The application includes features such as WebSocket communication for real-time messaging between users, RESTful APIs for message handling and chat room management. Ensured efficient message delivery and user management without relying on a traditional database. The application allows users to join chat rooms anonymously for real-time messaging.',
        tools: ['Spring Boot', 'WebSocket', 'RESTful API'],
        role: 'Backend Developer',
        code: 'https://github.com/yourusername/anonymous-chat',
        demo: '',
        images: ['crefin', 'crefin']
    },
    {
        id: 6,
        name: 'Little Digital Library',
        description: 'I collaborated with a team of 2 people and developed a fully functional Android application with a Java Spring Framework and Firebase-based backend, MySQL as a relational database that stores back-end application state. I designed, implemented, and tested the Android application. The application includes features such as authentication, listing and downloading books, viewing a downloaded book in the embedded PDF reader.',
        tools: ['Java Spring Framework', 'Firebase', 'MySQL', 'Android Studio', 'Embedded PDF Reader'],
        role: 'Android Developer',
        code: 'https://github.com/yourusername/little-digital-library',
        demo: '',
        images: ['crefin', 'crefin']
    },
    
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },