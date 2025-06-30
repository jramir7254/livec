import { knowledgeAreas } from "./computerScience/knowledgeAreas"


export const CURRICULA = [
    { name: 'Computer Science', slug: 'computer-science' },
    { name: 'Information Systems', slug: 'information-systems' },
    { name: 'Cybersecurity', slug: 'cybersecurity' },
    { name: 'Computing Curricula', slug: 'computing-curricula' },
    { name: 'Information Technology', slug: 'information-technology' },
    { name: 'Computer Engineering', slug: 'computer-engineering' },
    { name: 'Data Science', slug: 'data-science' },
    { name: 'Software Engineering', slug: 'software-engineering' },
]


export const COMPUTER_SCIENCE = {
    name: 'Computer Science',
    slug: 'computer-science',
    description: 'The study of computers and computational systems, focusing on algorithms, data structures, and software design.',
    knowledgeAreas: knowledgeAreas || []
}


export const CS2023 = [
    {
        title: "Artificial Intelligence (AI)",
        page: 65,
        units: [
            { title: "AI/Basic knowledge", page: 66 },
            { title: "AI/Knowledge representation and reasoning", page: 68 },
            { title: "AI/Planning and acting", page: 70 },
            { title: "AI/Machine learning", page: 72 },
            { title: "AI/Natural language processing", page: 74 },
            { title: "AI/Computer vision", page: 76 },
            { title: "AI/Intelligent robotics", page: 78 },
            { title: "AI/Ethics and impacts of AI", page: 80 }
        ]
    },
    {
        title: "Algorithmic Foundations (AL)",
        page: 87,
        units: [
            { title: "AL/Fundamental data structures and algorithms", page: 88 },
            { title: "AL/Advanced data structures and algorithms", page: 90 },
            { title: "AL/Computational complexity", page: 92 },
            { title: "AL/Computability", page: 94 },
            { title: "AL/Automata and formal languages", page: 96 }
        ]
    },
    {
        title: "Architecture and Organization (AR)",
        page: 101,
        units: [
            { title: "AR/Computer architecture basics", page: 102 },
            { title: "AR/Assembly-level architecture", page: 104 },
            { title: "AR/Memory systems", page: 106 },
            { title: "AR/Interfacing and communication", page: 108 },
            { title: "AR/Performance and parallelism", page: 110 }
        ]
    },
    {
        title: "Data Management (DM)",
        page: 113,
        units: [
            { title: "DM/Data modeling", page: 114 },
            { title: "DM/Query languages", page: 116 },
            { title: "DM/Relational databases", page: 118 },
            { title: "DM/Database design", page: 120 },
            { title: "DM/Transactions", page: 122 },
            { title: "DM/Distributed databases", page: 124 },
            { title: "DM/Big data and analytics", page: 126 }
        ]
    },
    {
        title: "Foundations of Programming Languages (FPL)",
        page: 127,
        units: [
            { title: "FPL/Basic language features", page: 128 },
            { title: "FPL/Object-oriented programming", page: 130 },
            { title: "FPL/Functional programming", page: 132 },
            { title: "FPL/Event-driven and concurrent programming", page: 134 },
            { title: "FPL/Memory management", page: 136 },
            { title: "FPL/Programming language paradigms", page: 138 }
        ]
    },
    {
        title: "Graphics and Interactive Techniques (GIT)",
        page: 151,
        units: [
            { title: "GIT/Computer graphics fundamentals", page: 152 },
            { title: "GIT/Modeling and rendering", page: 154 },
            { title: "GIT/Human-computer interaction basics", page: 156 },
            { title: "GIT/User-centered design", page: 158 },
            { title: "GIT/Interaction techniques and devices", page: 160 },
            { title: "GIT/Evaluation and testing", page: 162 }
        ]
    },
    {
        title: "Human-Computer Interaction (HCI)",
        page: 173,
        units: [
            { title: "HCI/Human factors", page: 174 },
            { title: "HCI/User-centered design", page: 176 },
            { title: "HCI/Prototyping and testing", page: 178 },
            { title: "HCI/User research methods", page: 180 }
        ]
    },
    {
        title: "Mathematical and Statistical Foundations (MSF)",
        page: 185,
        units: [
            { title: "MSF/Discrete structures", page: 186 },
            { title: "MSF/Probability and statistics", page: 188 },
            { title: "MSF/Linear algebra", page: 190 },
            { title: "MSF/Numerical methods", page: 192 }
        ]
    },
    {
        title: "Networking and Communication (NC)",
        page: 197,
        units: [
            { title: "NC/Network protocols and architecture", page: 198 },
            { title: "NC/Network security", page: 200 },
            { title: "NC/Wireless and mobile networks", page: 202 },
            { title: "NC/Cloud and internet services", page: 204 }
        ]
    },
    {
        title: "Operating Systems (OS)",
        page: 205,
        units: [
            { title: "OS/Operating system principles", page: 206 },
            { title: "OS/Processes and threads", page: 208 },
            { title: "OS/Memory and storage management", page: 210 },
            { title: "OS/File systems", page: 212 },
            { title: "OS/Security and protection", page: 214 }
        ]
    },
    {
        title: "Parallel and Distributed Computing (PDC)",
        page: 217,
        units: [
            { title: "PDC/Parallel and concurrent programming", page: 218 },
            { title: "PDC/Distributed systems", page: 220 },
            { title: "PDC/Cloud computing", page: 222 },
            { title: "PDC/Grid and edge computing", page: 224 }
        ]
    },
    {
        title: "Software Development Fundamentals (SDF)",
        page: 229,
        units: [
            { title: "SDF/Software construction", page: 230 },
            { title: "SDF/Development tools and environments", page: 232 },
            { title: "SDF/Debugging and testing", page: 234 }
        ]
    },
    {
        title: "Software Engineering (SE)",
        page: 237,
        units: [
            { title: "SE/Software development process models", page: 238 },
            { title: "SE/Requirements engineering", page: 240 },
            { title: "SE/Software design", page: 242 },
            { title: "SE/Software project management", page: 244 },
            { title: "SE/Software quality and testing", page: 246 },
            { title: "SE/Maintenance and evolution", page: 248 }
        ]
    },
    {
        title: "Security (SEC)",
        page: 255,
        units: [
            { title: "SEC/Security principles", page: 256 },
            { title: "SEC/Cryptography", page: 258 },
            { title: "SEC/System and network security", page: 260 },
            { title: "SEC/Application security", page: 262 },
            { title: "SEC/Ethical and legal issues", page: 264 }
        ]
    },
    {
        title: "Society, Ethics, and the Profession (SEP)",
        page: 269,
        units: [
            { title: "SEP/History and social context", page: 270 },
            { title: "SEP/Professional communication", page: 272 },
            { title: "SEP/Ethics and professional responsibility", page: 274 },
            { title: "SEP/Intellectual property", page: 276 },
            { title: "SEP/Security and privacy", page: 278 },
            { title: "SEP/Impact of computing on society", page: 280 }
        ]
    },
    {
        title: "Systems Fundamentals (SF)",
        page: 291,
        units: [
            { title: "SF/Computing systems concepts", page: 292 },
            { title: "SF/Performance analysis", page: 294 },
            { title: "SF/Resource management", page: 296 },
            { title: "SF/Virtualization", page: 298 }
        ]
    },
    {
        title: "Specialized Platform Development (SPD)",
        page: 301,
        units: [
            { title: "SPD/Web and mobile development", page: 302 },
            { title: "SPD/Embedded systems", page: 304 },
            { title: "SPD/Game development", page: 306 },
            { title: "SPD/Extended reality", page: 308 }
        ]
    }
];
