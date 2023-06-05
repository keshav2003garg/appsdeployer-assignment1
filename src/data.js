const jobList = [
    {
        id: 1,
        name: 'Senior Frontend Developer',
        company: 'Google',
        tag: 'Frontend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        salary: '$100,000-120,000',
        duration: '4 Months',
        jobType: 'Full Time',
        location: 'New York, NY',
        posted: new Date('2021-01-01'),
    },
    {
        id: 2,
        name: 'Senior Backend Developer',
        company: 'Facebook',
        tag: 'Backend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        salary: '$100,000-120,000',
        duration: '4 Months',
        jobType: 'Full Time',
        location: 'New York, NY',
        posted: new Date('2020-01-01'),
    },
    {
        id: 3,
        name: 'Senior Fullstack Developer',
        company: 'Amazon',
        tag: 'Fullstack',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        salary: '$100,000-120,000',
        duration: '4 Months',
        jobType: 'Full Time',
        location: 'New York, NY',
        posted: new Date('2019-01-01'),
    },
    {
        id: 4,
        name: 'Senior Frontend Developer',
        company: 'Google',
        tag: 'Frontend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        salary: '$100,000-120,000',
        duration: '4 Months',
        jobType: 'Full Time',
        location: 'New York, NY',
        posted: new Date('2018-01-01'),
    },
    {
        id: 5,
        name: 'Senior Backend Developer',
        company: 'Facebook',
        tag: 'Backend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        salary: '$100,000-120,000',
        duration: '4 Months',
        jobType: 'Full Time',
        location: 'New York, NY',
        posted: new Date('2017-01-01'),
    },
    {
        id: 6,
        name: 'Senior Fullstack Developer',
        company: 'Amazon',
        tag: 'Fullstack',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        salary: '$100,000-120,000',
        duration: '4 Months',
        jobType: 'Full Time',
        location: 'New York, NY',
        posted: new Date('2016-01-01'),
    },
    {
        id: 7,
        name: 'Senior Frontend Developer',
        company: 'Google',
        tag: 'Frontend',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        salary: '$100,000-120,000',
        duration: '4 Months',
        jobType: 'Full Time',
        location: 'New York, NY',
        posted: new Date('2015-01-01'),
    },
];

const jobDetail = [
    {
        id: 1,
        name: 'Senior Frontend Developer',
        company: 'Google',
        location: 'New York, NY',
        posted: new Date('2021-01-01'),
        jobType: 'Full Time',
        companySize: '100-500',
        industry: 'Technology',
        salary: '$100,000-120,000',
        duration: '4 Months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        responsibilities: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        requirements: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        benefits: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
    },
    {
        id: 2,
        name: 'Senior Backend Developer',
        company: 'Facebook',
        location: 'New York, NY',
        posted: new Date('2021-01-01'),
        jobType: 'Full Time',
        companySize: '100-500',
        industry: 'Technology',
        salary: '$100,000-120,000',
        duration: '4 Months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        responsibilities: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        requirements: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        benefits: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
    },
    {
        id: 3,
        name: 'Senior Fullstack Developer',
        company: 'Amazon',
        location: 'New York, NY',
        posted: new Date('2021-01-01'),
        jobType: 'Full Time',
        companySize: '100-500',
        industry: 'Technology',
        salary: '$100,000-120,000',
        duration: '4 Months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        responsibilities: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        requirements: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        benefits: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
    },
    {
        id: 4,
        name: 'Senior Frontend Developer',
        company: 'Google',
        location: 'New York, NY',
        posted: new Date('2021-01-01'),
        jobType: 'Full Time',
        companySize: '100-500',
        industry: 'Technology',
        salary: '$100,000-120,000',
        duration: '4 Months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        responsibilities: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        requirements: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        benefits: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
    },
    {
        id: 5,
        name: 'Senior Frontend Developer',
        company: 'Google',
        location: 'New York, NY',
        posted: new Date('2021-01-01'),
        jobType: 'Full Time',
        companySize: '100-500',
        industry: 'Technology',
        salary: '$100,000-120,000',
        duration: '4 Months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        responsibilities: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        requirements: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        benefits: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
    },
    {
        id: 6,
        name: 'Senior Frontend Developer',
        company: 'Google',
        location: 'New York, NY',
        posted: new Date('2021-01-01'),
        jobType: 'Full Time',
        companySize: '100-500',
        industry: 'Technology',
        salary: '$100,000-120,000',
        duration: '4 Months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        responsibilities: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        requirements: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        benefits: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
    },
    {
        id: 7,
        name: 'Senior Frontend Developer',
        company: 'Google',
        location: 'New York, NY',
        posted: new Date('2021-01-01'),
        jobType: 'Full Time',
        companySize: '100-500',
        industry: 'Technology',
        salary: '$100,000-120,000',
        duration: '4 Months',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.',
        responsibilities: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        requirements: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
        benefits: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ],
    },
]

export { jobList, jobDetail };