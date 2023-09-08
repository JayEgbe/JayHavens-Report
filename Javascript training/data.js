const coursesData = [
    {
      course: 'Web Development Fundamentals',
      description: 'Learn the basics of web development, HTML, CSS, and JavaScript.',
      category: 'Web Development',
      price: 4999,
      image: 'https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      course: 'JavaScript Mastery',
      description: 'Become a JavaScript expert with in-depth coverage of advanced topics.',
      category: 'Web Development',
      price: 6999,
      image: 'https://images.pexels.com/photos/5474299/pexels-photo-5474299.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      course: 'Full Stack Development',
      description: 'Master both front-end and back-end development for modern applications.',
      category: 'Web Development',
      price: 9999,
      image: 'https://images.pexels.com/photos/316465/pexels-photo-316465.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      course: 'Graphic Design Basics',
      description: 'Learn the fundamental principles of graphic design, including layout, typography, and color theory.',
      category: 'Graphic Design',
      price: 4499,
      image: 'https://images.pexels.com/photos/3183151/pexels-photo-3183151.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      course: 'Advanced Photoshop Techniques',
      description: 'Take your Photoshop skills to the next level with advanced editing and manipulation techniques.',
      category: 'Graphic Design',
      price: 5999,
      image: 'https://images.pexels.com/photos/687668/pexels-photo-687668.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      course: 'Digital Marketing Fundamentals',
      description: 'Explore the world of digital marketing, including SEO, social media, and content strategies.',
      category: 'Digital Marketing',
      price: 5499,
      image: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      course: 'Social Media Marketing',
      description: 'Learn how to leverage social media platforms to grow your brand and engage with your audience.',
      category: 'Digital Marketing',
      price: 4999,
      image: 'https://images.pexels.com/photos/6078126/pexels-photo-6078126.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
        course: 'Cyber Security Fundamentals',
        description: 'Learn the basics of cyber security, including threats, vulnerabilities, and basic defense strategies.',
        category: 'Cyber Security',
        price: 5999,
        image: 'https://images.pexels.com/photos/3193498/pexels-photo-3193498.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Ethical Hacking',
        description: 'Explore the world of ethical hacking and penetration testing to identify and secure vulnerabilities.',
        category: 'Cyber Security',
        price: 7999,
        image: 'https://images.pexels.com/photos/730560/pexels-photo-730560.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Network Security',
        description: 'Master the techniques to secure computer networks from unauthorized access and attacks.',
        category: 'Cyber Security',
        price: 6999,
        image: 'https://images.pexels.com/photos/3193924/pexels-photo-3193924.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Introduction to Cloud Computing',
        description: 'Learn the basics of cloud computing, including different service models and deployment models.',
        category: 'Cloud Computing',
        price: 4499,
        image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'AWS Essentials',
        description: 'Explore Amazon Web Services (AWS) and its core services for cloud infrastructure.',
        category: 'Cloud Computing',
        price: 5999,
        image: 'https://images.pexels.com/photos/3657062/pexels-photo-3657062.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Microsoft Azure Fundamentals',
        description: 'Get started with Microsoft Azure and its cloud computing services and solutions.',
        category: 'Cloud Computing',
        price: 5499,
        image: 'https://images.pexels.com/photos/1695735/pexels-photo-1695735.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Google Cloud Platform Basics',
        description: 'Learn the basics of Google Cloud Platform (GCP) and its various tools and services.',
        category: 'Cloud Computing',
        price: 5999,
        image: 'https://images.pexels.com/photos/87484/pexels-photo-87484.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Data Analysis Fundamentals',
        description: 'Learn the basics of data analysis, including data cleaning, visualization, and basic statistical techniques.',
        category: 'Data Analysis',
        price: 5499,
        image: 'https://images.pexels.com/photos/3184414/pexels-photo-3184414.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Advanced Excel for Data Analysis',
        description: 'Master Excel for data manipulation and analysis, including complex formulas and pivot tables.',
        category: 'Data Analysis',
        price: 5999,
        image: 'https://images.pexels.com/photos/1191637/pexels-photo-1191637.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Introduction to Python for Data Analysis',
        description: 'Get started with Python programming for data analysis, covering libraries like Pandas and Matplotlib.',
        category: 'Data Analysis',
        price: 6999,
        image: 'https://images.pexels.com/photos/2397753/pexels-photo-2397753.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Data Visualization with Tableau',
        description: 'Explore data visualization using Tableau to create interactive and informative visualizations.',
        category: 'Data Analysis',
        price: 6499,
        image: 'https://images.pexels.com/photos/2690770/pexels-photo-2690770.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Mobile App Development Fundamentals',
        description: 'Learn the basics of mobile app development for Android and iOS platforms.',
        category: 'Mobile App Development',
        price: 5999,
        image: 'https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Advanced React Native Techniques',
        description: 'Master advanced concepts of React Native for building powerful mobile applications.',
        category: 'Mobile App Development',
        price: 7999,
        image: 'https://images.pexels.com/photos/5474299/pexels-photo-5474299.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'UI/UX Design Principles',
        description: 'Discover the principles of user interface and user experience design.',
        category: 'UI/UX Design',
        price: 4499,
        image: 'https://images.pexels.com/photos/3183151/pexels-photo-3183151.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Prototyping with Adobe XD',
        description: 'Learn how to create interactive prototypes using Adobe XD.',
        category: 'UI/UX Design',
        price: 4999,
        image: 'https://images.pexels.com/photos/6078126/pexels-photo-6078126.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Machine Learning Foundations',
        description: 'Get started with the fundamentals of machine learning and predictive modeling.',
        category: 'Machine Learning',
        price: 6999,
        image: 'https://images.pexels.com/photos/2690770/pexels-photo-2690770.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Deep Learning and Neural Networks',
        description: 'Dive into the world of deep learning and neural networks for AI applications.',
        category: 'Machine Learning',
        price: 8999,
        image: 'https://images.pexels.com/photos/3657062/pexels-photo-3657062.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Introduction to Blockchain Technology',
        description: 'Explore the basics of blockchain technology, cryptocurrencies, and smart contracts.',
        category: 'Blockchain',
        price: 5499,
        image: 'https://images.pexels.com/photos/3193498/pexels-photo-3193498.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        course: 'Ethereum Development Essentials',
        description: 'Learn how to develop decentralized applications on the Ethereum platform.',
        category: 'Blockchain',
        price: 7499,
        image: 'https://images.pexels.com/photos/730560/pexels-photo-730560.jpeg?auto=compress&cs=tinysrgb&w=600'
      }
  ];
  
  console.log(courses);
  