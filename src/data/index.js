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