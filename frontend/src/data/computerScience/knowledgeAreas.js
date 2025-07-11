import { knowledgeUnits } from "./knowledgeUnits"

export const knowledgeAreas = [
   
    {// Artificial Intelligence (AI)
        name: 'Artificial Intelligence (AI)',
        slug: 'artificial-intelligence',
        knowledgeUnits: knowledgeUnits['artificial-intelligence'] || []
    },
    {// Algorithmic Foundations (AL)
        name: 'Algorithmic Foundations (AL)',
        slug: 'algorithmic-foundations',
        knowledgeUnits: knowledgeUnits['algorithmic-foundations'] || []
    },
    {// Architecture and Organization (AR)
        name: "Architecture and Organization (AR)",
        slug: "architecture-and-organization-ar",
        knowledgeUnits: knowledgeUnits['architecture-and-organization-ar'] || []
    },
    {// Data Management (DM)
        name: "Data Management (DM)",
        slug: "data-management-dm",
        knowledgeUnits: knowledgeUnits['data-management-dm'] || []
    },
    {
        name: "Human-Computer Interaction (HCI)",
        slug: "human-computer-interaction-hci",
        knowledgeUnits: knowledgeUnits['human-computer-interaction-hci'] || []
    },
    {
        name: "Foundations of Programming Languages (FPL)",
        slug: "foundations-of-programming-languages-fpl",
        knowledgeUnits: knowledgeUnits['foundations-of-programming-languages-fpl'] || []
    },
    {
        name: "Graphics and Interactive Techniques (GIT)",
        slug: "graphics-and-interactive-techniques-git",
        knowledgeUnits: knowledgeUnits['graphics-and-interactive-techniques-git'] || []
    },
    {
        name: "Mathematical and Statistical Foundations (MSF)",
        slug: "mathematical-and-statistical-foundations-msf",
        knowledgeUnits: knowledgeUnits['mathematical-and-statistical-foundations-msf'] || []
    },
    {
        name: "Networking and Communications (NC)",
        slug: "networking-and-communications-nc",
        knowledgeUnits: knowledgeUnits['networking-and-communications-nc'] || []
    },
    {
        name: "Operating Systems (OS)",
        slug: "operating-systems-os",
        knowledgeUnits: knowledgeUnits['operating-systems-os'] || []
    },
    {
        name: "Parallel and Distributed Computing (PDC)",
        slug: "parallel-and-distributed-computing-pdc",
        knowledgeUnits: knowledgeUnits['parallel-and-distributed-computing-pdc'] || []
    },
    {
        name: "Software Development Fundamentals (SDF)",
        slug: "software-development-fundamentals-sdf",
        knowledgeUnits: knowledgeUnits['software-development-fundamentals-sdf'] || []
    },
    {
        name: "Software Engineering (SE)",
        slug: "software-engineering-se",
        knowledgeUnits: knowledgeUnits['software-engineering-se'] || []
    }
]

export const md = `
# Introduction to Knowledge Model

## Definitions and Terminology
\n

A *knowledge model* of a curriculum is structured as a set of knowledge areas:

\`Knowledge model = { Knowledge areas }\`

A *knowledge area* is a set of related knowledge units:

\`Knowledge area = { Knowledge units }\`

A *knowledge unit* is a set of related topics and a set of learning outcomes for those topics:

\`Knowledge unit = { Topics } + { Learning outcomes }\`

Learning outcomes are used for assessment.

Each topic in a knowledge unit is categorized as either core or elective:

\`Topic ∈ { core } ∪ { elective }\`

Core topics are topics that every graduate must know. Every curriculum is typically expected to cover all the core topics.

Elective topics are those that are not required of every graduate. Nevertheless, they complement the coverage of core topics. In addition to covering all the core topics, a curriculum is expected to cover a considerable percentage of elective topics.

Students may be expected to demonstrate proficiency in topics at different *skill levels*. Typically, Bloom’s taxonomy is used to describe skill levels. The instructional time needed to cover a topic is determined by the skill level — e.g., instructing how to apply a concept may take longer than instructing how to explain the concept.

The expected skill levels and, therefore, the time needed to cover topics are salient because they determine how many topics can be packaged into a typical course and how many courses are needed in a curriculum to cover all the required topics. Thus, the list of core topics and the skill levels at which students must demonstrate proficiency in those topics determine the minimum size of a curriculum.

## CS2023 Knowledge Model

Knowledge areas: The CS2023 knowledge model consists of 17 knowledge areas, listed in alphabetical order of their abbreviation:

- Artificial Intelligence (AI)
- Algorithmic Foundations (AL)
- Architecture and Organization (AR)
- Data Management (DM)
- Foundations of Programming Languages (FPL)
- Graphics and Interactive Techniques (GIT)
- Networking and Communication (NC)
- Operating Systems (OS)
- Parallel and Distributed Computing (PDC)
- Software Development Fundamentals (SDF)
- Software Engineering (SE)
- Security (SEC)
- Society, Ethics, and the Profession (SEP)
`;
